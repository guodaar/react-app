import TopBar from "./TopBar";
import styled from "styled-components";

const MainLayout = ({children}) => {
  return <>
    <TopBar/>
    <ContentWrapper>
    {children}
    </ContentWrapper>
  </>
}

export default MainLayout

const ContentWrapper = styled.div`
  background-color: #f9f9f9;
  padding: 20px 40px;
`