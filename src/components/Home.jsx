import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { emojiData } from "./data";

const Sinput = styled.input`
  padding: 10px;
  outline: none;
  border-radius: 7px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Sform = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  & > input {
    width: 30%;
    &:focus {
      border: 5px solid green;
    }
  }
  & > button {
    width: 32%;
    padding: 10px 30px;
    outline: none;
    border-radius: 7px;
  }
`;
function Home() {
  const [text, setText] = useState("");
  const [emoji, setEmoji] = useState("");
  const [emojinm, setEmojinm] = useState("");
  const [emojiList, setEmojilist] = useState(emojiData);

  useEffect(() => {
    let arr = text.split(" ");
    console.log(arr);
    arr = arr.map((el) => (emojiList[el] ? emojiList[el] : el));
    console.log(arr);
    setText(arr.join(" "));
  }, [text]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = { ...emojiList };
    obj[emojinm] = emoji;
    setEmojilist({ ...obj });
    console.log(emojiList);
    alert("emoji added successfully");
    setEmojinm("");
    setEmoji("");
  };

  const sendReq = (e) => {
    e.preventDefault();
    let pl = { text: text };
    axios
      .post("https://indusosdata.herokuapp.com/text", pl)
      .then((res) => console.log(res))
      .then(() => alert("submit successfull"))
      .then(() => setText(""));
  };

  return (
    <div>
      <Sform onSubmit={(e) => sendReq(e)}>
        <Sinput required value={text} onChange={(e) => handleChange(e)} />
        <button type="submit">Submit</button>
      </Sform>
      <h1>Add some emoji using it's name </h1>
      <Sform onSubmit={(e) => handleSubmit(e)}>
        <Sinput
          required
          value={emojinm}
          onChange={(e) => setEmojinm(e.target.value)}
          placeholder="please enter a emoji name (::any::) "
        />
        <Sinput
          required
          value={emoji}
          onChange={(e) => setEmoji(e.target.value)}
          placeholder="please enter the emoji"
        />
        <button type="submit">Submit</button>
      </Sform>
    </div>
  );
}

export default Home;
