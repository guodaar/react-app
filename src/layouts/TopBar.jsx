import styled from "styled-components"
import SearchBar from "../components/SearchBar/SearchBar";
import { borderColor } from "../consts/colors";

const TopBar = () => {
  return <Container>
    <NavItem>Categories</NavItem>
    <Logo>KOPIKTA</Logo>
    <SearchBar/>
  </Container>
}

export default TopBar;

const Container = styled.div`
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

`