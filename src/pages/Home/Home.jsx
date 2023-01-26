import { useContext } from "react";
import styled from "styled-components";
import { ProductContext } from "../../contexts/ProductContext";
import { getUniqueArrayItems } from "../../utils/array";
import ProductCategory from "./ProducCategory";

const Home = () => {
  const { products } = useContext(ProductContext);
  const uniqCategories = getUniqueArrayItems(
    products.map((product) => product.type)
  );
  console.log(uniqCategories);

  const categories = uniqCategories.map((category) => ({
    name: category,
    image: products.find((product) => product.type === category).picUrl || "",
  }));
  console.log(categories);

  return (
    <div>
      <ProductContainer>
        {categories.map((category) => (
          <ProductCategory key={category.name} name={category.name} image={JSON.parse(category.image)[0]}/>
        ))}
      </ProductContainer>
    </div>
  );
};

export default Home;

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: hsla(300, 65%, 90%, 1);

background: linear-gradient(270deg, hsla(300, 65%, 90%, 1) 0%, hsla(346, 68%, 93%, 1) 52%, hsla(29, 82%, 91%, 1) 100%);

background: -moz-linear-gradient(270deg, hsla(300, 65%, 90%, 1) 0%, hsla(346, 68%, 93%, 1) 52%, hsla(29, 82%, 91%, 1) 100%);

background: -webkit-linear-gradient(270deg, hsla(300, 65%, 90%, 1) 0%, hsla(346, 68%, 93%, 1) 52%, hsla(29, 82%, 91%, 1) 100%);

filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#F6D4F6", endColorstr="#F9DFE5", GradientType=1 );
`;
