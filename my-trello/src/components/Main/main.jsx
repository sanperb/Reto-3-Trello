import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Container, Draggable } from 'react-smooth-dnd';
import uniqueId from "lodash/uniqueId";
import arrayMove from "array-move";

/* Función que incluye los valores de las tareas y botón para borrarlas*/
function Todo({ todo, index, removeTodo }) {
  return (
    <div className="todo"
    >
      {todo.text}
      <div>
        <button className="trashbutton" onClick={() => removeTodo(index)}>
          <FontAwesomeIcon className="trash" icon={faTrash} />
        </button>
      </div>
    </div>
  );
}

/* Función base para añadir tareas y listas*/
function AddForm({ add, placeholder, className }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    add(value);
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className={className}
        value={value}
        placeholder={placeholder}
        onChange={e => setValue(e.target.value)}
      />
      <button type="submit" className={`addbutton ${className}`}>+</button>
    </form>
  );
}

/* Función para añadir tareas, listas y el poder borrarlas*/
function List({ index, list, removeList }) {
  const [todos, setTodos] = React.useState(list.todos)

  const addTodo = text => {
    const id = uniqueId('todo-')
    const newTodos = [...todos, { id, text }];
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

/* Función para poder realizar el Drag and Drop*/
  function onTodoDrop(currentlist, dropResult) {

    const { removedIndex, addedIndex, payload } = dropResult;

    console.log("onTodoDrop", list, dropResult);

    /* Se mueven las tareas de otra lista */
    if (removedIndex === null && addedIndex === null) return;

    const newTodos = [...todos || []]

    /* Muevo todos en la misma lista */
    if (removedIndex !== null && addedIndex !== null) {
      console.log("En la misma lista", list, dropResult);
      setTodos(arrayMove(newTodos, removedIndex, addedIndex));
    }

    /* Borrando una tarea */
    if (removedIndex !== null && addedIndex === null) {
      console.log("Me lo quitan de las manos!", list, dropResult);
      newTodos.splice(removedIndex, 1)
      setTodos(newTodos || []);
    }

    /* Pasando una tarea */
    if (removedIndex === null && addedIndex !== null) {
      console.log("Me estan pasando un todo", list, dropResult);
      (newTodos).splice(addedIndex, 0, payload);
      setTodos(newTodos);
    }

  }


    /* Devolvemos el contenido que puede ser Draggable y Dropeable*/
  return <Draggable >
    <div className="supercontainer">
      <div className="contenedor">
        <div className="todo-list">
          <div className="title">{list.text}</div>
          <div>
            <button className="trahAltcontainer" onClick={() => removeList(index)}>
              <FontAwesomeIcon className="trashAlt" icon={faTrashAlt} />
            </button>
          </div>
          <div className="content">
            <Container groupName="list" orientation="vertical"
              onDrop={e => onTodoDrop(list, e)}
              getChildPayload={(index) => todos[index]}>
              {todos.map((todo, index) => (
                <Draggable key={`${todo.text}-${todo.id}`}>
                  <Todo
                    index={index}
                    todo={todo}
                    removeTodo={removeTodo}
                    removeList={removeList}
                  />
                </Draggable>))}
              <div className="addtodo">
                <AddForm className="addtask" add={addTodo} placeholder="Add Card" />
              </div>
            </Container>
          </div>
        </div>
      </div>
    </div>
  </Draggable>
}
function Main(props) {
  const { lists, addList, removeList, onListDrop } = props
  
  /* Devolvemos todo el contenido del body de la web*/
  return <main>
    <div className="addList">
      <AddForm className="new-list" add={addList} placeholder="Add List" />
      <Container orientation="horizontal" onDrop={onListDrop}>
        {lists.map((list, index) => (<List
          key={`${list.text}-${list.id}`}
          index={index}
          list={list}
          removeList={removeList}
        />)
        )}
      </Container>
    </div>
  </main>
}

export default Main;
