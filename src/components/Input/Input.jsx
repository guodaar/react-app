import styled from 'styled-components'
import { mainBgColor, mainFontColor } from '../../consts/colors'

const Input = (props) => {
  return (
    <StyledInput {...props}/>
  )
}

export default Input

const StyledInput = styled.input`
  font-size: 16px;
  border-radius: 3px;
  color: ${mainFontColor};
  background-color: ${mainBgColor};
  padding: 10px 14px;
  border: 0;
  outline: none;
  width: 100%;
`