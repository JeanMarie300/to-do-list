import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import Note from './Note'
import CreateArea from './CreateArea';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
 
   const  [items, setItems] = React.useState([]);

   function addItems (note){
    console.log(items);
      setItems(prev => {
        return [...prev, note]
      })
   }

    return (
        root.render(
            <React.StrictMode>
            <Header />
            <CreateArea  
              onAdd={addItems}   />

            {items.map((item, index) => (
              <Note 
              title={item.title}
              content= {item.content}
            />      
            ))}
            <Footer />
          </React.StrictMode>
        )
    )
}

export default App;