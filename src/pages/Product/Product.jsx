import styled from "styled-components";
import {useParams} from 'react-router-dom';
import { useProductData } from "../../hooks/products";
import { screenSize } from "../../consts/media";
import { borderColor } from "../../consts/colors";
import { euroSymbol } from "../../consts/currency";
import Button from "../../components/Button/Button";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";

const Product = () => {
  const {productId} = useParams();
  const {handleAddToCart} = useContext(CartContext);
  const {data, isLoading} = useProductData();
  const products = data || [];

  const product = products.find((product) => product.id === Number(productId))

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!product) {
    return <div>Product not found!</div>
  } 
  
  return <Container>
  <PhotoSide>
    <img src={product.picUrl[0]} alt={product.name}/>
  </PhotoSide>
  <InfoSide>
  <Title>{product.name}</Title>
  <Price>{euroSymbol}{product.price}</Price>
  <Button onClick={() => handleAddToCart(product)}>Add to Cart</Button>
  <Description>{product.description}</Description>
  </InfoSide>
  </Container>
   
}

export default Product

const Container = styled.div`
max-width: ${screenSize.tablet};
margin: 40px auto;
display: flex;
`

const PhotoSide = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;

  img {
    width: 80%;
    border-radius: 5px;
    border: 1px solid ${borderColor}
  }
`

const InfoSide = styled.div`
  flex: 1;
`

const Title = styled.p`
  font-size: 18px;
  margin-bottom: 8px;
`

const Description = styled.p`
  margin-top: 16px;
  font-size: 14px;
  font-weight: 300;
`

const Price = styled.p`
  font-size: 24px;
  margin-bottom: 8px;
`