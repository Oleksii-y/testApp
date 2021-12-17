import React, { useState } from "react";
import "./styles/App.scss";
import { BASE_URL } from "./Constants/Main";
import Form from "./Components/Form";
import Repos from "./Components/Repos";

function App() {
  const [repos, setRepos] = useState([]);
  const [gitHubUserName, setGitHubUserName] = useState("");
  const [notFound, setNotFound] = useState(false);

  const handleGetRepos = (userName) => {
    setNotFound(false);
    setGitHubUserName(userName);

    fetch(`${BASE_URL}/users/${userName}/repos?type=all`)
      .then((response) => {
        if (response.status === 403) {
          setNotFound(true);
        }
        return response.json();
      })
      .then((data) => {
        setRepos(data);
      });
  };

  if (notFound) {
    return <div>Did not find user / Rate Limit</div>;
  }

  return (
    <div className="App">
      <div>
        <Form handleGetRepos={handleGetRepos} />
      </div>
      <div>
        <Repos repos={repos} gitHubUserName={gitHubUserName} />
      </div>
    </div>
  );
}

export default App;
