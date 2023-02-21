import styled from "styled-components";
import { borderColor } from "../consts/colors";
import { Link, useNavigate } from "react-router-dom";
import { CART_PATH, HOME_PATH, LOGIN_PATH } from "../routes/const";
import EnhancedSearchBar from "../components/SearchBar/EnhancedSearchBar";
import { FiLogOut, FiLogIn, FiShoppingBag } from "react-icons/fi";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { toast } from "react-hot-toast";
import CategoriesButton from "../components/CategoriesButton/CategoriesButton";

const TopBar = () => {
  const { isLoggedIn, handleLogOut } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClickSign = () => {
    if (isLoggedIn) {
      handleLogOut();
      navigate(HOME_PATH);
      toast.success("Successfully logged out!");
    } else {
      navigate(LOGIN_PATH);
    }
  };

  return (
    <Container>
      <CategoriesButton />
      <Logo as={Link} to={HOME_PATH}>
        KOPIKTA
      </Logo>
      <ItemContainer>
        <EnhancedSearchBar />
        <Link to={CART_PATH}>
          <FiShoppingBag />
        </Link>
        <LogOut onClick={handleClickSign}>
          {isLoggedIn ? <FiLogOut /> : <FiLogIn />}
        </LogOut>
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

const Logo = styled.div`
  font-weight: 700;
  font-size: 28px;
  text-decoration: none;
  color: inherit;
  margin-left: 230px;
`;

const LogOut = styled.div`
  cursor: pointer;
`;
