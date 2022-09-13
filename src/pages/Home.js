import React from 'react';
import Categories from '../components/Categories';
import Products from './Products';
import SearchProducts from './SearchProducts';
// import Product from './Product';

function Home() {
  return (
    <main>
      <nav>
        <SearchProducts />
        {/* <Link to="/ShoppingCart">
          <FaShoppingCart />
          <p>{count}</p>
        </Link> */}
      </nav>
      <aside>
        <Categories />
      </aside>
      <Products />
    </main>
  );
}

export default Home;
