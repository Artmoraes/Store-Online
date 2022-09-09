import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { getCategories } from "../services/api";
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

  const [buttonUserName, setButtonUserName] = useState(false);
  const [buttonUserLastName, setButtonUserLastName] = useState(false);
  const [buttonUserEmail, setButtonUserEmail] = useState(false);
  const [buttonUserPassword, setButtonUserPassword] = useState(true);
  const [buttonUserDate, setButtonUserDate] = useState(false);
  const [buttonRegister, setButtonRegister] = useState(true);
  const [buttonUserEmailCheck, setButtonUserEmailCheck] = useState(false);
  const [confirmName, setConfirmName] = useState(false);
  const [, setConfirmLastName] = useState(false);
  const [, setConfirmEmail] = useState(false);
  const [, setConfirmDate] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState('');

  const [categories, setCategories] = useState([]);
  const [IdCategories, setIdCategories] = useState();
  const [InputSearchProduct, setInputSearchProduct] = useState('');
  const [newDataProducts, setNewDataProducts] = useState([]);

  useEffect(() => {
    try {
      // Utilizado na aba Home para atualizar a API
      getCategories().then((dataObj) => { setCategories(dataObj) });
      // getProductsFromCategoryAndQuery(IdCategories, InputSearchProduct).then((dataObj) => { setNewDataProducts(dataObj) })

    } catch (error) {
      console.error(error);
    }
  });


  useEffect(() => {
    try {
      // Utilizado na aba do Register
      if (compareEmail() && comparePassword()) {
        setButtonRegister(false);
      } else {
        setButtonRegister(true);
      }

      if (checkPassword(password)) {
        setButtonUserPassword(false);
      } else {
        setButtonUserPassword(true);
      }

      if (checkEmailUser(email)) {
        setButtonUserEmail(false);
      } else {
        setButtonUserEmail(true);
      }
    } catch (error) {
      console.error(error);
    }
  }, [compareEmail, comparePassword, email, password]);

  useEffect(() => {
    try {
      // Utilizado na aba do User
      if (showConfirmPassword === password) {
        setButtonUserName(false);
        setConfirmName(false);
      } else if (showConfirmPassword !== password) {
        setButtonUserName(true);
        setConfirmName(true);
      }

      if (showConfirmPassword === password) {
        setButtonUserLastName(false);
        setConfirmLastName(false);
      } else if (showConfirmPassword !== password) {
        setButtonUserLastName(true);
        setConfirmLastName(true);
      }

      if (showConfirmPassword === password) {
        setButtonUserEmail(false);
        setConfirmEmail(false);
      } else if (showConfirmPassword !== password) {
        setButtonUserEmail(true);
        setConfirmEmail(true);
      }

      if (showConfirmPassword === password) {
        setButtonUserDate(false);
        setConfirmDate(false);
      } else if (showConfirmPassword !== password) {
        setButtonUserDate(true);
        setConfirmDate(true);
      }

    } catch (error) {
      console.error(error);
    }
  }, [showConfirmPassword, password, setButtonUserName, setConfirmName]);

  function compareEmail() {
    const emailRegex = /\S+@\S+\.\S+/;
    if (emailRegex.test(email) && emailRegex.test(emailRegister) && email === emailRegister) {
      return true;
    } else {
      return false;
    }
  }

  function comparePassword() {
    if (password === passwordRegister && password.length > 7 && passwordRegister.length > 7) {
      return true;
    } else {
      return false;
    }
  }

  function checkPassword(passOne) {
    if (passOne.length > 7) {
      return true;
    } else {
      return false;
    }
  }

  function checkEmailUser(emailOne) {
    const emailRegex = /\S+@\S+\.\S+/;
    if (emailRegex.test(emailOne)) {
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
    compareEmail, storage, setStorage,
    date, setDate, buttonUserEmail,
    setButtonUserEmail, buttonUserPassword,
    comparePassword, setButtonUserPassword,
    checkPassword, confirmName, setConfirmName,
    showConfirmPassword, setShowConfirmPassword,
    buttonUserName, setButtonUserName,
    setConfirmLastName, buttonUserLastName,
    setButtonUserLastName, buttonUserEmailCheck,
    setButtonUserEmailCheck, buttonUserDate,
    setButtonUserDate, categories,
    setCategories, IdCategories, setIdCategories,
    InputSearchProduct, setInputSearchProduct,
    newDataProducts, setNewDataProducts
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
