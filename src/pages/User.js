import React, { useContext, useState } from "react";
import ProjectContext from "../context/ProjectContext";
import imagem from './png/imagemPreta.jpg'

function User() {
  const {
    email, setEmail,
    password, setPassword, name, setName,
    lastName, setLastName, date, setDate,
    buttonUserEmail, buttonUserPassword,
    setConfirmName, buttonUserName, buttonUserLastName,
    showConfirmPassword, setShowConfirmPassword, setConfirmLastName,
    buttonUserDate
  } = useContext(ProjectContext);

  const [showElementName, setShowElementName] = useState(false);
  const [showElementLastName, setShowElementLastName] = useState(false);
  const [showElementEmail, setShowElementEmail] = useState(false);
  const [showElementPassword, setShowElementPassword] = useState(false);
  const [showElementDate, setShowElementDate] = useState(false);
  const [confirmElementPassword, setConfirmElementPassword] = useState(false);
  const [showElementNameButton, setShowElementNameButton] = useState(false);
  const [showElementLastNameButton, setShowElementLastNameButton] = useState(false);
  const [showElementEmailButton, setShowElementEmailButton] = useState(false);
  const [showElementPasswordButton, setShowElementPasswordButton] = useState(false);
  const [showElementDateButton, setShowElementDateButton] = useState(false);

  setName(localStorage.getItem('name'));
  setLastName(localStorage.getItem('lastName'));
  setEmail(localStorage.getItem('email'));
  setPassword(localStorage.getItem('password'));
  setDate(localStorage.getItem('date'));

  function NewName() {
    localStorage.setItem('name', name);
    if (showConfirmPassword === password) {
      return (
        <input type="text"
          value={name}
          onChange={({ target }) => {
            setName(target.value);
          }} required>
        </input>
      );
    } else if (showConfirmPassword !== password) {
      return (
        <section>
          <p>Insira sua senha para alterar o Nome</p>
          <input type="text"
            value={showConfirmPassword}
            onChange={({ target }) => {
              setShowConfirmPassword(target.value);
            }} required>
          </input>
        </section>
      );
    }
  }

  function NewLastName() {
    localStorage.setItem('lastName', lastName);
    if (showConfirmPassword === password) {
      return (
        <input type="text"
          value={lastName}
          onChange={({ target }) => {
            setLastName(target.value);
          }} required>
        </input>
      );
    } else if (showConfirmPassword !== password) {
      return (
        <section>
          <p>Insira sua senha para alterar o Nome</p>
          <input type="text"
            value={showConfirmPassword}
            onChange={({ target }) => {
              setShowConfirmPassword(target.value);
            }} required>
          </input>
        </section>
      );
    }
  }

  function NewEmail() {
    localStorage.setItem('email', email);

    if (showConfirmPassword === password) {
      return (
        <input type="email"
          value={email}
          onChange={({ target }) => {
            setEmail(target.value);
          }} required>
        </input>
      );
    } else if (showConfirmPassword !== password) {
      return (
        <section>
          <p>Insira sua senha para alterar o Email</p>
          <input type="text"
            value={showConfirmPassword}
            onChange={({ target }) => {
              setShowConfirmPassword(target.value);
            }} required>
          </input>
        </section>
      );
    }
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
    if (showConfirmPassword === password) {
      return (
        <input type="date"
          value={date}
          onChange={({ target }) => {
            setDate(target.value);
          }} max="2010-01-01" required>
        </input>
      );
    } else if (showConfirmPassword !== password) {
      return (
        <section>
          <p>Insira sua senha para alterar a data</p>
          <input type="text"
            value={showConfirmPassword}
            onChange={({ target }) => {
              setShowConfirmPassword(target.value);
            }} required>
          </input>
        </section>
      );
    }
  }

  return (
    <div>
      <fieldset>
        <p>Nome: {showElementName ? NewName() : name}</p>
        {
          showElementNameButton ?
            <button type="button" disabled={buttonUserName} onClick={() => {
              setShowElementName(!showElementName);
              setShowElementNameButton(!showElementNameButton);
              setConfirmName(true);
            }}> Confirmar </button>
            :
            <button type="button" onClick={() => {
              setShowElementName(!showElementName);
              setShowElementNameButton(!showElementNameButton);
            }}> <span role="img" aria-label="pencil"> ✏️ </span> </button>
        }

        <p>Sobrenome:  {showElementLastName ? NewLastName() : lastName}</p>
        {showElementLastNameButton ?
          <button type="button" disabled={buttonUserLastName} onClick={() => {
            setShowElementLastName(!showElementLastName)
            setShowElementLastNameButton(!showElementLastNameButton);
            setConfirmLastName(true);
          }}> Confirmar </button>
          :
          <button type="button" onClick={() => {
            setShowElementLastName(!showElementLastName)
            setShowElementLastNameButton(!showElementLastNameButton);
          }}> <span role="img" aria-label="pencil"> ✏️ </span> </button>
        }

        <p>Email: {showElementEmail ? NewEmail() : email}</p>
        {showElementEmailButton ?
          <button type="button" disabled={buttonUserEmail} onClick={() => {
            setShowElementEmail(!showElementEmail); setShowElementEmailButton(!showElementEmailButton)
          }}> Confirmar </button>
          :
          <button type="button" onClick={() => {
            setShowElementEmail(!showElementEmail); setShowElementEmailButton(!showElementEmailButton)
          }} > <span role="img" aria-label="pencil"> ✏️ </span> </button>
        }

        <p>Password: {showElementPassword ? NewPassword() : NoHidePassword(password)}</p>
        {showElementPasswordButton ?
          <button type="button" disabled={buttonUserPassword} onClick={() => {
            setShowElementPassword(!showElementPassword);
            setShowElementPasswordButton(!showElementPasswordButton);
            setConfirmElementPassword(!confirmElementPassword)
          }}>Confirmar</button>
          :
          <button type="button" onClick={() => {
            setShowElementPassword(!showElementPassword);
            setShowElementPasswordButton(!showElementPasswordButton)
          }}> <span role="img" aria-label="pencil"> ✏️ </span> </button>
        }
        <p>Data de aniversário: {showElementDate ? NewDate() : date}</p>

        {showElementDateButton ?
          <button type="button" disabled={buttonUserDate} onClick={() => {
            setShowElementDate(!showElementDate);
            setShowElementDateButton(!showElementDateButton);
          }}> Confirmar </button>
          :
          <button type="button" onClick={() => {
            setShowElementDate(!showElementDate);
            setShowElementDateButton(!showElementDateButton);
          }}> <span role="img" aria-label="pencil"> ✏️ </span> </button>
        }
        <br />
        <br />
        <img src={imagem} alt="Tela de usuário" width="150px"></img>
      </fieldset>
    </div>
  );
}

export default User;