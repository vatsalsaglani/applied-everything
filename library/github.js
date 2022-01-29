const getGitRepos = async () => {
  let repos = await fetch(
    "https://api.github.com/users/vatsalsaglani/repos?per_page=1000&page=1"
  );
  repos = await repos.json();
  repos = repos.sort(
    (a, b) => createTimeStamp(b.updated_at) - createTimeStamp(a.updated_at)
  );

  return repos;
};

const createTimeStamp = (time) => {
  let _time = time.split("T")[0];
  _time = _time.split("-");
  let year = _time[0];
  let month = _time[1];
  let date = _time[2];
  return new Date(year, month, date).getTime();
};

export default getGitRepos;
