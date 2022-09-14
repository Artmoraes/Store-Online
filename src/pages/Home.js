import React from 'react';
import Categories from '../components/Categories';
import './css/Home.css';
import Products from './Products';
import SearchProducts from './SearchProducts';

function Home() {
  return (
    <>
      <nav>
        <SearchProducts />
      </nav>
      <main className="container-home">
        <div className="container-categories-products">
          <aside>
            <Categories />
          </aside>
          <main className="container-products">
            <Products />
          </main>
        </div>
      </main>
    </>
  );
}

export default Home;
