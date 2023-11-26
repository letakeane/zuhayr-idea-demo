import { useState } from "react";
import "./Form.css";

export default function Form({ addNewIdea }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const updateState = (event) => {
    if (event.target.name === "title") {
      setTitle(event.target.value);
    } else {
      setDesc(event.target.value);
    }
  };

  const submitIdea = (event) => {
    event.preventDefault();
    const newIdea = { title: title, desc: desc, id: Date.now() };

    addNewIdea(newIdea);
    setTitle('');
    setDesc('');
  }

  return (
    <form>
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        placeholder="Idea title"
        onChange={updateState}
        />
      <input
        type="text"
        name="desc"
        id="desc"
        value={desc}
        placeholder="Idea description"
        onChange={updateState}
      />
      <button onClick={submitIdea}>Submit idea</button>
    </form>
  );
}
