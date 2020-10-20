import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons'

  /* Funcion añadir para poner el añadir lista en la barra del header */
function AddForm({ add, placeholder }) {
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
        className="addtask"
        value={value}
        placeholder={placeholder}
        onChange={e => setValue(e.target.value)}
      />
      <button type="submit" className="addbutton">+</button>
    </form>
  );
}

const Header = props => {
    /* Devuelve todo el contenido del footer */
  return (<header>
    <div className="barra-navegacion">
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand logo" href="#homepage">
          <img src="https://i.postimg.cc/MGHQgtWR/logowwy.png" className="d-inline-block align-top" alt="WWYouLogo" />
        </a>
        <div className="collapse navbar-collapse item-color" id="navbarNav">
          <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="http://localhost:3000/">
                <FontAwesomeIcon className="user" icon={faUserCircle} />
            </a>
          </li>
            <li className="nav-item">
              <a className="nav-link home" href="http://localhost:3000/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link boards" href="http://localhost:3000/">Boards</a>
            </li>
          </ul>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="http://localhost:3000/">
              <AddForm classname="newlist" add={props.addList} placeholder="Add List" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link bell" href="http://localhost:3000/">
              <button className="bell-item">
                <FontAwesomeIcon className="bell" icon={faBell} />
              </button>
            </a>
          </li>
        </ul>
        <form className="form-inline">
          <input className="form-control ml-sm-2" type="search" placeholder="Búsqueda" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
        </form>


      </nav>
    </div>

  </header>)


}

export default Header;
