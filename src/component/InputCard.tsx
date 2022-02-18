import React, { useState } from "react";
import styles from "../../styles/InputCard.module.css";

interface InputCardProps {
  fetchUsername: (username: string) => void;
}
const InputCard = ({ fetchUsername }: InputCardProps) => {
  const [input, setInput] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log("Submitted", input);
    fetchUsername(input);
    setInput("");
  };

  const onChangehandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <div className={styles.card}>
      <h2>Find your username</h2>
      <p>Enter your username and we will search if it&apos;s available.</p>
      <form onSubmit={onSubmit}>
        <input
          value={input}
          onChange={onChangehandle}
          type="text"
          placeholder="Enter your username"
        />
        <button type="submit">Find</button>
      </form>
    </div>
  );
};

export default InputCard;
