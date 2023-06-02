import React from 'react';


function Note(props) {
    console.log(props.title);
    console.log(props.content);
    return (
       <div className='note'>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
       </div>
    );
}


export default Note;