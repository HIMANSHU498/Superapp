import React, { useState } from "react";
import "./Notes.css";
import notepad from "./../../assets/notepad.png";
const Notes = () => {
  const [notes, setNotes] = useState(localStorage.getItem("notes") || "");
  const [disabled, setDisabled] = useState(true);
  const handleChange = (e) => {
    setNotes(e.target.value);
    localStorage.setItem("notes", notes);
  };
  return (
    <>
      <div className="notepad-container">
        <h2 className="notes">All notes</h2>
        <textarea
          className="notes-text"
          onChange={handleChange}
          value={notes}
          disabled={disabled}
        ></textarea>
        <div className="editor" onClick={() => setDisabled(!disabled)}>
          <img src={notepad} alt="not load img" />
        </div>
      </div>
    </>
  );
};

export default Notes;
