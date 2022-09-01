import React, { useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import ProjectContext from "../context/ProjectContext";
import imagem from './png/imagemPreta.jpg'

function User() {
  const {
    email, setEmail,
    password, setPassword, name, setName,
    lastName, setLastName, date, setDate,
    buttonUserEmail,
  } = useContext(ProjectContext);
  // setPasswordRegister('');
  const [pass, setPass] = useState(false);

  const [showElementName, setShowElementName] = useState(false);
  const [showElementLastName, setShowElementLastName] = useState(false);
  const [showElementEmail, setShowElementEmail] = useState(false);
  const [showElementPassword, setShowElementPassword] = useState(false);
  const [showElementDate, setShowElementDate] = useState(false);

  setName(localStorage.getItem('name'));
  setLastName(localStorage.getItem('lastName'));
  setEmail(localStorage.getItem('email'));
  setPassword(localStorage.getItem('password'));
  setDate(localStorage.getItem('date'));

  function NewName() {
    localStorage.setItem('name', name);
    return (
      <input type="text"
        value={name}
        onChange={({ target }) => {
          setName(target.value);
        }} required>
      </input>
    );
  }

  function NewLastName() {
    localStorage.setItem('lastName', lastName);
    return (
      <input type="text"
        value={lastName}
        onChange={({ target }) => {
          setLastName(target.value);
        }} required>
      </input>
    );
  }

  function NewEmail() {
    localStorage.setItem('email', email);
    return (
      <input type="email"
        value={email}
        onChange={({ target }) => {
          setEmail(target.value);
        }} required>
      </input>
    );
  }

  function NewPassword() {
    localStorage.setItem('password', password);
    return (
      <>
        <input type="text"
          value={password}
          onChange={({ target }) => {
            setPassword(target.value);
          }} required>
        </input>
      </>
    );
  }

  function NoHidePassword(parameters) {
    return <p>{'*'.repeat(parameters.length)}</p>;
  }

  function NewDate() {
    localStorage.setItem('date', date);
    return (
      <input type="date"
        value={date}
        onChange={({ target }) => {
          setDate(target.value);
        }} max="2010-01-01" required>
      </input>
    );
  }

  return (
    <div>
      <fieldset>
        <p>Nome: {showElementName ? NewName() : name}</p>
        <button type="button" onClick={() => { setShowElementName(!showElementName) }} >Mudar Nome</button>

        <p>Sobrenome:  {showElementLastName ? NewLastName() : lastName}</p>
        <button type="button" onClick={() => { setShowElementLastName(!showElementLastName) }} >Mudar Sobreome</button>

        <p>Email: {showElementEmail ? NewEmail() : email}</p>
        <button type="button" disabled={buttonUserEmail} onClick={() => { setShowElementEmail(!showElementEmail) }} >Mudar Email</button>

        <p>Password: {showElementPassword ? NewPassword() : NoHidePassword(password)}</p>
        <button type="button" disabled={pass} onClick={() => { setShowElementPassword(!showElementPassword) }} >Mudar Senha</button>

        <p>Data de aniversário: {showElementDate ? NewDate() : date}</p>

        <button type="button" onClick={() => { setShowElementDate(!showElementDate) }} >Mudar Data</button>
        <br />

        <img src={imagem} alt="Tela de usuário" width="150px"></img>
      </fieldset>
    </div>
  );
}

export default User;