import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Category.css';

function Categories({ title, categories, theme }) {
  return (
    <section className={`${theme} categories`}>
      <div className="container">
        {title && <h2 className="categories_title">{title}</h2>}
        <div className="categories_content">
          {categories.map((category) => (
            <Link
              key={category.id}
              className="category-logo"
              to={`/products?categories=${category.slug}`}
            >
              <img src={`/assets/images/brands/${category.slug}.svg`} alt={category.name} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

Categories.propTypes = {
  theme: PropTypes.string,
  title: PropTypes.string,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      categoryname: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

Categories.defaultProps = {
  title: null,
  theme: 'light',
};

export default Categories;
