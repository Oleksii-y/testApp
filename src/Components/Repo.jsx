import { useEffect, useState } from "react";
import { BASE_URL } from "../Constants/Main";

const Repo = ({ repo: { name }, gitHubUserName }) => {
  const [stars, setStars] = useState();

  useEffect(() => {
    fetch(`${BASE_URL}/repos/${gitHubUserName}/${name}`)
      .then((response) => response.json())
      .then((data) => {
        setStars(data.stargazers_count);
      });
  }, [name, gitHubUserName]);

  return (
    <div className="repo">
      <div>Name: {name}</div>
      {stars && <div>Stars: {stars}</div>}
    </div>
  );
};
export default Repo;
