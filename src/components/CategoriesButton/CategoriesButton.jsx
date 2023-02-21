import styled from "styled-components";
import { useProductData } from "../../hooks/products";
import { getUniqueArrayItems } from "../../utils/array";
import { useState } from "react";
import { Popover } from "react-tiny-popover";
import { Link, generatePath } from "react-router-dom";
import { borderColor } from "../../consts/colors";
import { PRODUCTS_PATH } from "../../routes/const";

const CategoriesButton = () => {
  const [hovered, setHovered] = useState(false);
  const { data } = useProductData();
  const products = data || [];
  const uniqCategories = getUniqueArrayItems(
    products.map((product) => product.type)
  );

  return (
    <Popover
      isOpen={hovered}
      positions={["top", "bottom", "left", "right"]}
      onClickOutside={() => setHovered(false)}
      content={
        <ContentContainer onMouseLeave={() => setHovered(false)}>
          {uniqCategories.map((category) => (
            <p key={category} onClick={() => setHovered(false)}>
              <Link to={generatePath(PRODUCTS_PATH, { category })}>
                {category}
              </Link>
            </p>
          ))}
        </ContentContainer>
      }
    >
      <Container onMouseEnter={() => setHovered(true)}>Categories</Container>
    </Popover>
  );
};
export default CategoriesButton;

const Container = styled.div`
  font-size: 18px;
  cursor: pointer;
`;

const ContentContainer = styled.div`
  background-color: #ffffff;
  border: 1px solid ${borderColor};
  border-radius: 3px;
  width: 205px;
  margin-left: 24px;
  margin-top: 4px;

  p {
    padding: 8px;
    font-size: 14px;
    text-transform: uppercase;
  }
`;
