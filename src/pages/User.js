import React, { useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import ProjectContext from "../context/ProjectContext";
import imagem from './png/imagemPreta.jpg'

function User() {
  const { email, setEmail,
    password, setPassword, name, setName,
    lastName, setLastName, date, setDate, storage } = useContext(ProjectContext);
  let data;

  setName(localStorage.getItem('name'));
  setLastName(localStorage.getItem('lastName'));
  setEmail(localStorage.getItem('email'));
  setPassword(localStorage.getItem('password'));
  setDate(localStorage.getItem('date'));

  return (
    <div>
      <fieldset>
        <p>Nome: {name}</p>
        <p>Sobrenome: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Data de aniversário: {date}</p>
        <img src={imagem} alt="Tela de usuário" width="150px"></img>
      </fieldset>
    </div>
  );
}

export default User;