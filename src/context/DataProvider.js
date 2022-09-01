import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import ProjectContext from "./ProjectContext";

function DataProvider({ children }) {
  const [storage, setStorage] = useState();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [emailRegister, setEmailRegister] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [buttonRegister, setButtonRegister] = useState(true);

  useEffect(() => {
    try {
      // Consome os dados da API, caso dê erro, cai no catch após o try
      if (compareEmail(email, emailRegister) && comparePassword(password, passwordRegister)) {
        setButtonRegister(false);
      } else {
        setButtonRegister(true);
      }
    } catch (error) {
      console.error(error);
    }
  });

  function compareEmail(emailOne, emailTwo) {
    const emailRegex = /\S+@\S+\.\S+/;
    if (emailRegex.test(emailOne) && emailRegex.test(emailTwo) && email === emailRegister) {
      return true;
    } else {
      return false;
    }
  }

  function comparePassword(passOne, passTwo) {
    if (passOne === passTwo && password > 7 && passwordRegister > 7) {
      return true;
    } else {
      return false;
    }
  }
  // console.log();
  const context = {
    email, setEmail,
    password, setPassword,
    buttonRegister, setButtonRegister,
    name, setName,
    lastName, setLastName,
    emailRegister, setEmailRegister,
    passwordRegister, setPasswordRegister,
    compareEmail,
    storage, setStorage,
    date, setDate
  }; // Constante feita para alocar todos os dados que serão passados posteriormente no value do provider

  return (
    <ProjectContext.Provider value={context}>
      {children}
    </ProjectContext.Provider>
  );
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataProvider;
