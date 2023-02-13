import styled from "styled-components";
import { useProductData } from "../../hooks/products";
import { getUniqueArrayItems } from "../../utils/array";
import ProductCategory from "./ProducCategory";

const Home = () => {
  const {data, isLoading, error} = useProductData();
  const products = data || [];

  console.log(data);
  const uniqCategories = getUniqueArrayItems(
    products.map((product) => product.type)
  );

  const categories = uniqCategories.map((category) => ({
    name: category,
    image: products.find((product) => product.type === category).picUrl || "",
  }));

  if (isLoading) {
    return "Kraunasi..."
  } 

  if (error) {
    return 'Nepavyko gauti produktu';
  }

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
  align-items: flex-start;

`
