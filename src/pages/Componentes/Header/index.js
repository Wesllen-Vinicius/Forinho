import React, { useContext } from 'react';
import './Header.css';
import { BiLogOut } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';
import { FiTerminal } from 'react-icons/fi';
import firebase from '../../Firebase/index';
import { AuthContext } from '../../Auth/auth';

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <nav class="navbar sticky-top  navbar-expand-lg navbar-dark bg-dark divBar">
      <div class="container-fluid divBar">
        <div class="logo">
          <a class="navbar-brand" href="/">
            <FiTerminal size={40} color="white" />
          </a>
        </div>
        <div class="Menu">
          <button
            class="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="space" />
        <div class="collapse navbar-collapse ulNav" id="navbarSupportedContent">
          <form class="d-flex">
            <input
              class="form-control me-2 busca"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn  btBuscar" type="submit">
              Buscar
            </button>
          
          </form>
          <div class="space2" />
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Francisco zoio
                <AiOutlineUser size={40} color="white" />
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#">
                    Conta
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Configurações
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    onClick={() => firebase.auth().signOut()}
                  >
                    <BiLogOut /> Sair
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item ">
              <a
                class="nav-link active Login"
                aria-current="page"
                href="/Login"
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
