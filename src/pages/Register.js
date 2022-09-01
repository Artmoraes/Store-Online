import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProjectContext from "../context/ProjectContext";

function Register() {


  const { email, setEmail,
    password, setPassword,
    buttonRegister, setButtonRegister,
    name, setName,
    lastName, setLastName,
    emailRegister, setEmailRegister,
    passwordRegister, setPasswordRegister, storage, setStorage, date, setDate } = useContext(ProjectContext);

  function register() {
    localStorage.setItem('name', JSON.stringify(name));
    localStorage.setItem('lastName', JSON.stringify(lastName));
    localStorage.setItem('email', JSON.stringify(email));
    localStorage.setItem('password', JSON.stringify(password));
    localStorage.setItem('date', JSON.stringify(date));
  }

  return (
    <div>
      <form>
        <input type="text"
          name="name"
          value={name}
          maxLength={6}
          onChange={({ target }) => {
            setName(target.value);
          }} required></input>

        <input type="text"
          name="lastname"
          value={lastName}
          maxLength={5}
          onChange={({ target }) => {
            setLastName(target.value);
          }} required></input>

        <input
          type="email"
          name="email"
          value={email}
          onChange={({ target }) => {
            setEmail(target.value);
          }} required
        />

        <input
          type="email"
          name="email"
          value={emailRegister}
          onChange={({ target }) => {
            setEmailRegister(target.value);
          }} required
        />

        <input
          type="password"
          name="password"
          value={password}
          onChange={({ target }) => {
            setPassword(target.value);
          }}
          required
        />

        <input
          type="password"
          name="password"
          value={passwordRegister}
          onChange={({ target }) => {
            setPasswordRegister(target.value);
          }}
          required
        />
        <input id="date" type="date" value={date} onChange={({ target }) => {
          setDate(target.value);
        }} max="2010-01-01" required></input><span class="validity"></span>
        <Link to={'/'}>
          <button type="button" disabled={buttonRegister} onClick={register}>Registrar</button>
        </Link>
      </form>
    </div>
  );
}

export default Register;
