import React, { useState } from "react";
import { httpApi } from "../../apis/http.api";

function OtherGetMethod() {
  const [username, setUsername] = useState("");
  const [topic, setTopic] = useState("react");

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleTopicChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTopic(event.target.value);
  };

  const handleSubmit = async () => {
    await httpApi();
  };
  return (
    <form title="Form">
      <div>
        <label htmlFor="username">Username </label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Helloo ae nha"
        />
      </div>
      <div>
        <label htmlFor="topic">Topic</label>
        <select id="topic" value={topic} onChange={handleTopicChange}>
          <option value="react">React</option>
          <option value="angular">Angular</option>
          <option value="vue">Vue</option>
        </select>
      </div>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}

export default OtherGetMethod;
