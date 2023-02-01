import { useParams } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";
import { useContext, useState } from "react";
import styled from "styled-components";
import { capitalizeLetter } from "../../utils/string";
import { borderColor, mainFontColor } from "../../consts/colors";
import Select from 'react-select';
import { getUniqueArrayItems } from "../../utils/array";
import {screenSize} from '../../consts/media'

const Products = () => {
  const {category} = useParams();
  const {products} = useContext(ProductContext);
  const [selectedColors, setSelectedColors] = useState([]);

  const categoryProducts = products.filter(product => product.type === category);

  const colors = categoryProducts.map((product) => product.color.toLowerCase());
  const uniqueColors = getUniqueArrayItems(colors);
  const colorOptions = uniqueColors.map((color) => ({
    value: color,
    label: capitalizeLetter(color),
  }));
  console.log(selectedColors);

  const selectedColorsArray = selectedColors.map((color) => color.value);
  const filteredByColorProducts = categoryProducts.filter((product) => selectedColorsArray.includes(product.color.toLowerCase()));

  const filteredProducts = filteredByColorProducts.length ? filteredByColorProducts : categoryProducts;

  return (
    <div>
      <FiltersContainer>
        <Filter>
          <Select isMulti name="colors" options={colorOptions} value={selectedColors} onChange={setSelectedColors}/>
          </Filter>
          </FiltersContainer>
      <ProductsContainer>
      {filteredProducts.map((product) => (
        <ProductItem key={product.id}>
          <div>
          <img src={product.picUrl[0]} alt={product.name}></img>
          </div>
          <ProductProperty>
            <div>{capitalizeLetter(product.name.toLowerCase())}
            </div>
            <div>${product.price}</div></ProductProperty>
        </ProductItem>
      ) )}
    </ProductsContainer>
    </div>
    

  )
}

export default Products

const FiltersContainer = styled.div`
padding: 40px 40px 20px 40px;
display: grid;
grid-template-columns: repeat(4, 1fr);

@media (min-width: ${screenSize.tablet}) and (max-width: ${screenSize.laptop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${screenSize.tablet}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Filter = styled.div`
margin-right: 16px;
`;

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 0 40px 40px;
  grid-gap: 24px;

  @media (min-width: ${screenSize.tablet}) and (max-width: ${screenSize.laptop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${screenSize.tablet}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border: 1px solid ${borderColor};
  border-radius: 5px;
  padding-bottom: 16px;
  color: ${mainFontColor};

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
    border-radius: 5px;
    object-fit: cover;
    width: 90%;
    height: 90%;
  }
  }
`;

const ProductProperty = styled.div`
  margin: 0;
  display: flex;
  gap: 10px;
  justify-content: space-between;
`