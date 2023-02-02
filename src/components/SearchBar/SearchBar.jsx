import styled from "styled-components"
import { borderColor, mainBgColor} from "../../consts/colors";
import {AiOutlineSearch} from 'react-icons/ai';

const SearchBar = () => {
  return (
  <InputWrapper>
  <AiOutlineSearch/>
  <Input placeholder="Search"/>
  </InputWrapper>
  )
};
  
  export default SearchBar;

  const InputWrapper = styled.div`
    position: relative;

    svg {
      position: absolute;
      left: 8px;
      top: 5px;
      font-size: 1.2rem;
    }

  `

  const Input = styled.input`
  background-color: ${mainBgColor};
  border: none;
  border-radius: 3px;
  padding: 5px 40px;
  outline: none;
  `;