import React from "react";
import NotesApp from "./NotesApp";
import NotesHeader from "./NotesHeader";

function Notes(){
  return(
    <div className="full-notes">
      <NotesHeader />
      <NotesApp />
    </div>
  )
}

export default Notes;