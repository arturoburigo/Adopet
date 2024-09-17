import React from 'react';
import { useParams } from 'react-router-dom';

type ProductDetailsParams = {
  productId: string;
};

const ProductDetails: React.FC = () => {
  const { productId } = useParams<ProductDetailsParams>();

  return (
    <div>
      <h1>Detalhes do Produto {productId}</h1>
      <p>Aqui você pode colocar mais informações sobre o produto {productId}.</p>
    </div>
  );
};

export default ProductDetails;