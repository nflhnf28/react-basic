import React from "react";
import NotesItem from "./NotesItem";

function NotesList( {notes, onDelete}){
  return(
    <div className="notes-list">
    {/* Conditional Rendering using ternary  */}
      {
        notes.length === 0 ? (
        <p>Tidak ada catatan.</p>
      ) : (
        notes.map((note) => (
          <NotesItem key={note.id} id={note.id} onDelete={onDelete} {...note} />
        ))
      )}
    </div>
  )
}

export default NotesList;