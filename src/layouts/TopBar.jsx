import styled from "styled-components";
import { borderColor } from "../consts/colors";
import { Link } from "react-router-dom";
import { CART_PATH, HOME_PATH } from "../routes/const";
import { FaShoppingCart } from "react-icons/fa";
import EnhancedSearchBar from "../components/SearchBar/EnhancedSearchBar";

const TopBar = () => {
  return (
    <Container>
      <NavItem>Categories</NavItem>
      <Logo as={Link} to={HOME_PATH}>
        KOPIKTA
      </Logo>
      <ItemContainer>
        <EnhancedSearchBar />
        <Link to={CART_PATH}>
          <FaShoppingCart />
        </Link>
      </ItemContainer>
    </Container>
  );
};

export default TopBar;

const Container = styled.div`
  background-color: white;
  padding: 6px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${borderColor};
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  svg {
    font-size: 20px;

    &:hover {
      opacity: 0.6;
    }
  }
`;

const NavItem = styled.div`
  font-size: 18px;
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 28px;
  text-decoration: none;
  color: inherit;
`;
