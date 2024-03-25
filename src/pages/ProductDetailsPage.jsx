import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import { useGetProductDetailsQuery } from '../slices/productsApiSlice';

import ProductDetailComponent from '../components/product-details/ProductDetails';

function ProductDetailsPage() {
  const { id } = useParams();
  const { data: product, isLoading, error } = useGetProductDetailsQuery(id);

  return (
    <LoaderOrError isLoading={isLoading} error={error}>
      {product && <ProductDetailComponent product={product} />}
    </LoaderOrError>
  );
}

export default ProductDetailsPage;

function LoaderOrError({ isLoading, error, children }) {
  if (isLoading) return <h2 className="container">Loading...</h2>;
  if (error) return <div className="container">{error.data?.message || error.error}</div>;
  return children;
}

LoaderOrError.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.shape({
    data: PropTypes.shape({
      message: PropTypes.string,
    }),
    error: PropTypes.string,
  }),
  children: PropTypes.node,
};

LoaderOrError.defaultProps = {
  error: null,
  children: null,
};
