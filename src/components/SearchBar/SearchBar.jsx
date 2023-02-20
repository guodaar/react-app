import styled from "styled-components";
import { mainBgColor } from "../../consts/colors";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ value, setValue }) => {
  return (
    <InputWrapper>
      <AiOutlineSearch />
      <Input
        placeholder="Search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </InputWrapper>
  );
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
`;

const Input = styled.input`
  background-color: ${mainBgColor};
  border: none;
  border-radius: 3px;
  padding: 5px 40px;
  outline: none;
`;
