import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to='/products/produto1'>Livros</Link>
        </li>
        <li>
          <Link to='/products/produto2'>Eletronicos</Link>
        </li>
        <li>
          <Link to='/products/produto3'>Roupas</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
