import styled from "styled-components";
import {useParams} from 'react-router-dom';
import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";

const Product = () => {
  const {productId} = useParams();
  const {products} = useContext(ProductContext);

  const product = products.find((product) => product.id === Number(productId))

  if (!product) {
    return <div>Loading...</div>
  } 
  
  return <Component>{product.name}</Component>
  

  
}

export default Product

const Component = styled.div`

`