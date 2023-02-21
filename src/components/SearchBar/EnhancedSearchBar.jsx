import { useState } from "react";
import { Popover } from "react-tiny-popover";
import { useProductData } from "../../hooks/products";
import SearchBar from "./SearchBar";
import styled from "styled-components";
import { borderColor } from "../../consts/colors";
import { generatePath, Link } from "react-router-dom";
import { PRODUCT_PATH } from "../../routes/const";

const EnhancedSearchBar = () => {
  const [search, setSearch] = useState("");
  const { data } = useProductData();
  const products = data || [];
  const filteredItems = products
    .filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    )
    .slice(0, 5);

  return (
    <Popover
      onClickOutside={() => setSearch("")}
      isOpen={search}
      positions={["top", "bottom", "left", "right"]}
      content={
        <Container>
          {filteredItems.length ? (
            filteredItems.map((product) => (
              <p key={product.id} onClick={() => setSearch("")}>
                <Link
                  to={generatePath(PRODUCT_PATH, {
                    category: product.type,
                    productId: product.id,
                  })}
                >
                  {product.name}
                </Link>
              </p>
            ))
          ) : (
            <p>Item not found.</p>
          )}
        </Container>
      }
    >
      <div>
        <SearchBar value={search} setValue={setSearch} />
      </div>
    </Popover>
  );
};

export default EnhancedSearchBar;

const Container = styled.div`
  max-height: 120px;
  background-color: #ffffff;
  border-radius: 3px;
  border: 1px solid ${borderColor};
  padding: 10px;
  width: 220px;

  p {
    margin-bottom: 3px;
  }
`;
