import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import ProjectContext from "./ProjectContext";

function DataProvider({ children }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [button, setButton] = useState(true);


  useEffect(() => {
    try {
      // Consome os dados da API, caso dê erro, cai no catch após o try
    } catch (error) {
      console.error(error);
    }
  }, []);

  const context = { email, setEmail, password, setPassword, button, setButton }; // Constante feita para alocar todos os dados que serão passados posteriormente no value do provider
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
