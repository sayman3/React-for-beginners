import { isValidElement, useEffect, useState } from 'react';
import styles from './App.module.css';

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event)=>{
    setToDo(event.target.value);
  }
  const onSubmit = (event)=>{
    event.preventDefault();
    if( toDo === ""){
      return;
    }
    setToDos((currentArray)=>{
      return [toDo, ...currentArray];
    })
    setToDo("");
  }
  useEffect(()=>{
    console.log(toDos);
  }, [toDos]);
  return (
    <div className={styles.app}>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="write your to do..." />
        <button style={{opacity: 1}}>
          Add To Do
        </button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index)=>
          (<li key={index}>{item}<button>✕</button></li>)
        )}
      </ul>
    </div>
  )
}

export default App;