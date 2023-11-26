import { useState, useEffect } from 'react'
import Form from '../Form/Form'
import Ideas from '../Ideas/Ideas'
import './App.css';

function App() {
  const [allIdeas, setAllIdeas] = useState([
    { title: 'Sweaters for pugs', desc: 'Because they get cold too', id: 0 },
    { title: 'Goldfish hats', desc: 'Question: how would they stay on?', id: 2 },
  ])

  const addNewIdea = (newIdea) => {
    setAllIdeas([...allIdeas, newIdea]);
  }

  return (
    <>
      <h1>App is rendering!</h1>
      <Form addNewIdea={addNewIdea} />
      <Ideas allIdeas={allIdeas} />
    </>
  );
}

export default App;
