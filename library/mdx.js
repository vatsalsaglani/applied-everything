import fs from "fs";
import matter from "gray-matter";
import mdxPrism from "mdx-prism";
import path from "path";
import readingTime from "reading-time";
import renderToString from "next-mdx-remote/render-to-string";
import MDXComponents from "../components/MDXComponents";

const root = process.cwd();

// get all .mdx files
export async function getFiles(type) {
  return fs.readdirSync(path.join(root, "content", type));
}

// get a file given a slug
export async function getFileBySlug(type, slug) {
  const source = slug
    ? fs.readFileSync(path.join(root, "content", type, `${slug}.mdx`), "utf8")
    : fs.readFileSync(path.join(root, "content", `${type}.mdx`), "utf8");

  const { data, content } = matter(source);

  const mdxSource = await renderToString(content, {
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [
        require("remark-autolink-headings"),
        require("remark-slug"),
        require("remark-code-titles"),
      ],
      rehypePlugins: [mdxPrism],
    },
  });

  return {
    mdxSource,
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      slug: slug || null,
      ...data,
    },
  };
}

// get metadata of all files
export async function getAllFilesFrontMatter(type) {
  const files = fs.readdirSync(path.join(root, "content", type));

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, "content", type, postSlug),
      "utf8"
    );
    const { data, content } = matter(source);

    const reading_time = readingTime(content);

    return [
      {
        ...data,
        slug: postSlug.replace(".mdx", ""),
        reading_time: reading_time,
      },
      ...allPosts,
    ];
  }, []);
}
