import React from "react";

function NotesHeader(){
  return(
    <div className="note-app__header">
      <h1>Notes</h1>
      <input type="text" id="searchInput" placeholder="Cari catatan..."></input>
    </div>
  )
}

export default NotesHeader;