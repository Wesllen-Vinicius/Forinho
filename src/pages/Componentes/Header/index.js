import React from "react";
import "./Header.css";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { GrTerminal } from "react-icons/gr";
import Firebase from "../../Firebase/index";

const Header = () => (
  <nav class="navbar sticky-top  navbar-expand-lg navbar-light bg-light divBar">
    <div class="container-fluid divBar">
      <a class="navbar-brand" href="/">
        <GrTerminal size="50px" class="logo" />
      </a>
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
          <button class="btn btn-outline-success btBuscar" type="submit">
            Buscar
          </button>
        </form>
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
              <AiOutlineUser size={30} />
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
                  onClick={() => Firebase.auth().signOut()}
                >
                  <BiLogOut /> Sair
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/Login">
              Login
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
export default Header;
