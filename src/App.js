import "./styles.css";
import { useState } from "react";
import { emojiDictionary } from "./data";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export default function App() {
  const [inputEmoji, setInputEmoji] = useState("");

  function handleChange(e) {
    setInputEmoji(e.target.value);
  }

  function handleClick(item) {
    setInputEmoji(item);
  }
  const emojis = Object.keys(emojiDictionary);
  return (
    <div className="App">
      <Navbar />
      <h1 className="heading">Your Emoji here 👇</h1>

      <div className="inputWrapper">
        <input
          type="text"
          className="input"
          value={inputEmoji}
          // placeholder="Type your emoji here..."
          onChange={handleChange}
        />
      </div>
      <p className="content">
        {emojiDictionary[inputEmoji] === undefined
          ? "Please select or enter valid emoji"
          : emojiDictionary[inputEmoji]}
      </p>
      <div className="emojis">
        {emojis.map((item) => {
          return (
            <span className="emoji" onClick={() => handleClick(item)}>
              {item}
            </span>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
