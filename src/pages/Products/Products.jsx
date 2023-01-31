import { useParams } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";
import { useContext } from "react";
import styled from "styled-components";
import { capitalizeLetter } from "../../utils/string";
import { mainFontColor } from "../../consts/colors";
import Select from 'react-select';

const Products = () => {
  const {category} = useParams();
  const {products} = useContext(ProductContext);
  const categoryProducts = products.filter(product => product.type === category)

  console.log(categoryProducts);

  return (
    <div>
      <FiltersContainer>
        <Filter>
          <Select isMulti name="colors" options={[]} />
          </Filter>
          </FiltersContainer>
      <ProductsContainer>
      {categoryProducts.map((product) => (
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
  padding: 40px 40px 20px;
`;

const Filter = styled.div`
  width: 250px;
`;

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 0 40px 40px;
  grid-gap: 24px;
`;

const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: white;
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