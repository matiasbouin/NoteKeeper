import React from "react";
import Note from "../components/Note";
import notes from "../notes";

const getNoteInfo = (note) => {
  return <Note key={note.key} title={note.title} content={note.content} />;
};

const createNote = notes.map(getNoteInfo);

export default createNote;
