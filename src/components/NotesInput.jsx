import React from "react";

class NotesInput extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      title: '',
      body: '',
    }

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitChangeEventHandler = this.onSubmitChangeEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const inputTitle = event.target.value;
    
    if (inputTitle.length <= 50) {
      this.setState({
        title: inputTitle,
      });
    }
  }


  onBodyChangeEventHandler(event){
    this.setState(() => {
      return {
        body: event.target.value,
      }
    });
  }

  onSubmitChangeEventHandler(event){
    event.preventDefault();
    this.props.addNote(this.state);

    // Clear input after submit
    this.setState({
      title: "",
      body: "",
    });
  }



  render(){
    return(
      <form className="note-input" onSubmit={this.onSubmitChangeEventHandler}>
      <p className="note-input__title__char-limit">Sisa karakter: {50 - this.state.title.length}</p>
        <input type="text" placeholder="Title" className="note-input__title" value={this.state.title} onChange={this.onTitleChangeEventHandler}></input>
        <textarea type="text" placeholder="Content" className="note-input__body" value={this.state.body} onChange={this.onBodyChangeEventHandler}></textarea>
        <button type="submit">Buat</button>
      </form>
    )
  }
}

export default NotesInput;