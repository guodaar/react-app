import styled from "styled-components";
import SearchBar from "../components/SearchBar/SearchBar";
import { borderColor } from "../consts/colors";
import {Link} from 'react-router-dom';
import {HOME_PATH} from '../routes/const';

const TopBar = () => {
  return <Container>
    <NavItem>Categories</NavItem>
    <Logo as={Link} to={HOME_PATH}>KOPIKTA</Logo>
    <SearchBar/>
  </Container>
}

export default TopBar;

const Container = styled.div`
background-color: white;
padding: 6px 40px;
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid ${borderColor};
`

const NavItem = styled.div`
  font-size: 18px;

`

const Logo = styled.div`
  font-weight: 700;
  font-size: 28px;
  text-decoration: none;
  color: inherit;

`