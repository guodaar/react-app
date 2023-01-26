import styled from "styled-components";

const ProductCategory = ({name, image}) => {
  return (
    <ProductItem>
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
    color:#f7d7f5;
  }
  h3 {
    margin: 0;
    color:#f7d7f5;
  }

  img {
    width: 100%;
  }
`;