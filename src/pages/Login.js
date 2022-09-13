import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ProjectContext from '../context/ProjectContext';

function Login() {
  const { email, setEmail, password, setPassword } = useContext(ProjectContext);
  return (
    <div>
      <form>
        <input
          type="email"
          id="email"
          name="email"
          value={ email }
          onChange={ ({ target }) => {
            setEmail(target.value);
          } }
          required
        />
        <input
          type="password"
          id="pass"
          name="password"
          value={ password }
          onChange={ ({ target }) => {
            setPassword(target.value);
          } }
          required
        />
        <Link to="/">
          <button type="button" disabled={ password.length < 7 }>Login</button>
        </Link>
        <Link to="/register">
          <button type="button">Registrar</button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
