import React, { useContext } from "react";
import ProjectContext from "../context/ProjectContext";

function Login() {
  const { email, setEmail, password, setPassword, button, setButton } = useContext(ProjectContext);
  console.log(email, password);
  const validationButton = () => {
    if (password >= 7) {
      return false
    }
    return true;
  };
  return (
    <div>
      <form>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={({ target }) => {
            setEmail(target.value);
          }} required
        />
        <input
          type="password"
          id="pass"
          name="password"
          min="8"
          value={password}
          onChange={({ target }) => {
            setPassword(target.value);

          }}
          required
        />
        <button type="button" disabled={validationButton()} onClick={console.log('button')}>Login</button>
      </form>
    </div>
  );
}

export default Login;
