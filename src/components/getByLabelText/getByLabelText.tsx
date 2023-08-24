import React, { useState } from "react";

function GetByLabelText() {
  const [username, setUsername] = useState("");
  const [topic, setTopic] = useState("vue");

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleTopicChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTopic(event.target.value);
  };

  return (
    <form>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <div>
        <label htmlFor="username">Username </label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={handleUsernameChange}
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
      <div>
        <label htmlFor="topic-1">Topic</label>
        <input type="text" id="topic-1" className="topic-class" />
      </div>
      <p>{topic}</p>
      <button type="submit">Submit</button>
    </form>
  );
}

export default GetByLabelText;
