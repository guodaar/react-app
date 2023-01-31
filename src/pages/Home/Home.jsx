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
    <Container>
      <ProductContainer>
        {categories.map((category) => (
          <ProductCategory key={category.name} name={category.name} image={category.image[0]}/>
        ))}
      </ProductContainer>
    </Container>
  );
};

export default Home;

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;

`
