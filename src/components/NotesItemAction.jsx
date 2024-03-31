import React from 'react';
import Button from './Button';

function NotesItemAction({id, onDelete}){
  return (
    <div className='note-item__action'>
      <Button className="note-item__delete-button" id={id} onDelete={onDelete}>Delete</Button>
      <Button className="note-item__archive-button">Arsipkan</Button>
    </div>
  )
}

export default NotesItemAction;