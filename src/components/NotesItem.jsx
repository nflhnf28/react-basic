import React from "react";
import NotesItemContent from "./NotesItemContent";
import NotesItemAction from "./NotesItemAction";

function NotesItem({title, body, id, onDelete, createdAt}){
  // Change the format to ISO format date after create a new note
  const formattedDate = new Date(createdAt).toDateString();

  return(
    <div className="notes-item">
      <NotesItemContent title={title} date={formattedDate} body={body} />
      <NotesItemAction id={id} onDelete={onDelete}/>
    </div>
  )
}

export default NotesItem;