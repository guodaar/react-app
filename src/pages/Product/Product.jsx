import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useProductData } from "../../hooks/products";
import { screenSize } from "../../consts/media";
import { borderColor } from "../../consts/colors";
import { euroSymbol } from "../../consts/currency";
import Button from "../../components/Button/Button";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";
import { toast } from "react-hot-toast";

const Product = () => {
  const { productId } = useParams();
  const { handleAddToCart } = useContext(CartContext);
  const { data, isLoading } = useProductData();
  const products = data || [];

  const product = products.find((product) => product.id === Number(productId));

  const handleAddProduct = () => {
    handleAddToCart(product);
    toast("Item added to cart");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <Container>
      <PhotoSide>
        <img src={product.picUrl[0]} alt={product.name} />
      </PhotoSide>
      <InfoSide>
        <Title>{product.name}</Title>
        <Price>
          {euroSymbol}
          {product.price}
        </Price>

        <Description>{product.description}</Description>
        <FullSizeButton onClick={handleAddProduct}>Add to Cart</FullSizeButton>
      </InfoSide>
    </Container>
  );
};

export default Product;

const Container = styled.div`
  max-width: ${screenSize.tablet};
  margin: 40px auto;
  display: flex;
`;

const PhotoSide = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;

  img {
    width: 80%;
    border-radius: 5px;
    border: 1px solid ${borderColor};
  }
`;

const InfoSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.p`
  font-size: 18px;
`;

const Description = styled.p`
  font-size: 14px;
  font-weight: 300;
`;

const Price = styled.p`
  font-size: 24px;
`;
const FullSizeButton = styled(Button)`
  width: 100%;
`;
