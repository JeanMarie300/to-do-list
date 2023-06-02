import React from "react";

function CreateArea(props) {

    const [note, setNote] = React.useState({title:"", content:""});

    function handleNoteChange(event) {
      const {value, name} = event.target;
      
         setNote(prev=>{
          console.log(prev);
           if (name === "title") {
            return {
              title:value,
              content : prev.content
            }
           } else {
            return {
              title:prev.title,
              content : value
            }
           }
         })
    }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={handleNoteChange}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleNoteChange} />
        <button onClick={ (e) => {
          e.preventDefault();
          props.onAdd(note);
        }} >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
