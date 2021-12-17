import Repo from "./Repo";
import "../styles/Repos.scss";

const Repos = ({ repos, gitHubUserName }) => (
  <div className="repos">
    {repos.map((repo) => (
      <Repo key={repo.name} repo={repo} gitHubUserName={gitHubUserName} />
    ))}
  </div>
);

export default Repos;
