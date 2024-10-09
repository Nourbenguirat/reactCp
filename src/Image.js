import product from './Prod';

const Image = () => {
  return <img src={product.imageUrl} alt={product.name} style={{ width: '100%' }} />;
};

export default Image;
