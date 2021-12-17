import { useCallback, useState } from "react";
import "../styles/Form.scss";

const Form = ({ handleGetRepos }) => {
  const [userName, setUserName] = useState("");

  const handleChangeName = useCallback((event) => {
    setUserName(event.target.value);
  }, []);

  const getRepos = useCallback(() => {
    handleGetRepos(userName);
  }, [userName, handleGetRepos]);

  return (
    <div className="form">
      <div className="form__input-wrapper">
        <input
          type={"text"}
          value={userName}
          placeholder="Enter username"
          onChange={handleChangeName}
        />
      </div>
      <div className="form__button-wrapper">
        <button onClick={getRepos}>Get repos</button>
      </div>
    </div>
  );
};

export default Form;
