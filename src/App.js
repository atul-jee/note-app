import {useState} from 'react';
import {nanoid} from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
const App =()=>{
  const [notes,setNotes]=useState([
  {
    text:"This is 3my first note!",
    date:'22-05-2023',
    id:nanoid()
  },
  {
    text:"This is my first note! 2",
    date:'22-05-2023',
    id:nanoid()
  },{
    text:"This is my first 2note!",
    date:'22-05-2023',
    id:nanoid()
  }
  ]);
  const addNote=(text)=>{
    const date=new Date();
    const newNote={
      id:nanoid(),
      text:text,
      date:date.toLocaleDateString(),
      
    };
    const newNotes=[...notes,newNote];
    setNotes(newNotes);

  };
  const deleteNote=(id)=>{
    const newNotes=notes.filter((note)=>note.id!==id);
    setNotes(newNotes);
  };

  return (
    <div className='container'>
    <Search />
    <NotesList 
    notes={notes} 
    handleAddNote={addNote}
    handleDeleteNote={deleteNote}
    />
    </div>
    );
}
export default App;
