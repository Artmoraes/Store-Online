import React from 'react';
import './css/User.css';
import SearchProducts from './SearchProducts';

function FinalizePurchase() {
  localStorage.clear();
  return (
    <>
      <SearchProducts />
      <div className="container-user">
        <div className="infos-user">
          <h2>Compra finalizada com sucesso!</h2>
          <br />
          <p>Agradecemos por comprar conosco.</p>
          <p>Agora é só esperar e logo logo seu produto chega.</p>
        </div>
      </div>
    </>
  );
}

export default FinalizePurchase;
