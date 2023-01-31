import styled from "styled-components";
import {useNavigate, generatePath } from 'react-router-dom';
import {PRODUCTS_PATH} from '../../routes/const'
import { mainFontColor } from "../../consts/colors";

const ProductCategory = ({name, image}) => {
  const navigate = useNavigate();
  const productPath = generatePath(PRODUCTS_PATH, {category: name});

  return (
    <ProductItem onClick={() => navigate(productPath)}>
      <div>
        <h2>{name}s</h2>
        <h3>13</h3>
      </div>
      <img src={image} alt={name} />
    </ProductItem>
  )
}

export default ProductCategory;

const ProductItem = styled.div`
  width: 15%;
  text-align: center;
  text-transform: uppercase;
  background-color: #ffffff;
  margin: 16px;
  padding: 10px;
  border-radius: 4px;
  transition: transform 0.4s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.03);
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }

  h2 {
    margin: 0;
    font-size: 16px;
    color: ${mainFontColor};
  }
  h3 {
    margin: 0;
    color: ${mainFontColor};
  }

  img {
    width: 100%;
  }
`;