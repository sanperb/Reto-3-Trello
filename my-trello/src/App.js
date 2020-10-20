import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/main';
import Footer from './components/Footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Header/header.css';
import './components/Footer/footer.css';
import './components/Main/main.css';
import uniqueId from "lodash/uniqueId";
import arrayMove from "array-move";

function App() {

  /* Función de anañir lista que sacamos aquí para poder usarla también en el header */
  const [lists, setLists] = React.useState([

  ]);

  const addList = text => {
    const id = uniqueId('list-')
    const newLists = [...lists, { id, text, todos: [] }];
    setLists(newLists);
  };

  const removeList = index => {
    const newLists = [...lists];
    newLists.splice(index, 1);
    setLists(newLists);
  };


  const onListDrop = (dropResult) => {

    console.log("onListDrop");

    const { removedIndex, addedIndex } = dropResult;

    if (removedIndex === null && addedIndex === null) return;
    const newLists = arrayMove(lists, removedIndex, addedIndex)

    setLists(newLists);
  }

  return (
    <div className="App">
      <Header addList={addList}/>
      <Main lists={lists} addList={addList} removeList={removeList} onListDrop={onListDrop} />
      <Footer/>
    </div>
  );
}

export default App;
