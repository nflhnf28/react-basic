import React from 'react';
import NotesList from './NotesList';
import { getInitialData } from '../utils';
import NotesInput from './NotesInput';
// import { createRoot } from 'react-dom/client';

class NotesApp extends React.Component{
  // Initiate props
  constructor(props){
    super(props);
    this.state ={
      notes: getInitialData(),
    }
    
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
}

// Function delete
onDeleteHandler (id){
  const notes = this.state.notes.filter((note) => note.id !== id);
  this.setState({ notes });
}

// Function add
onAddNoteHandler({title, body}) {
  // Inisialisasi date, terus ubah ke ISO
  const currentDate = new Date();
  const isoDateString = currentDate.toISOString();

  this.setState((prevState) => {
    const newNote = {
      id: +new Date(),
      title,
      body,
      createdAt: isoDateString,
      archived: false,
    };

    return {
      notes: [...prevState.notes, newNote],
    };
  });
}
// console.log(notes);

render(){
    return (
      <div className="note-app__body">
        <h2>Buat Catatan</h2>
        <NotesInput addNote={this.onAddNoteHandler.bind(this)}/>
        <h2>Catatan Aktif</h2>
        <NotesList notes={this.state.notes} onDelete={this.onDeleteHandler} />
        <h2>Arsip</h2>
      </div>
    );
  }
}

export default NotesApp;
// const root = createRoot(document.getElementById('root'));
// root.render(<h1>Hello, World!</h1>);