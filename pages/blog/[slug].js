import hydrate from "next-mdx-remote/hydrate";
import MDXComponents from "../../components/MDXComponents";
import BlogLayout from '../../layouts/blog'

import { getFiles, getFileBySlug } from "../../library/mdx";

export default function Blog({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  });

  //   console.log(content)

  return <BlogLayout frontMatter={frontMatter}>{content}</BlogLayout>;
}

// get all the path to have things at .html files at build time
export async function getStaticPaths() {
  const posts = await getFiles("blog");

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
}

// get all the params to provide data to page at build time
export async function getStaticProps({ params }) {
  const post = await getFileBySlug("blog", params.slug);

  return { props: post };
}
