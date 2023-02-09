import styled from 'styled-components';
import { primaryButtonColor, primaryDarkButtonColor } from '../../consts/colors';

const PrimaryButton = styled.button`
border: none;
text-decoration: none;
border-radius: 4px;
background-color: ${primaryButtonColor};
padding: 10px 24px;
color: #ffffff;
font-size: 16px;
cursor: pointer;
transition: 0.1s ease-in-out;
&:hover {
  background-color: ${primaryDarkButtonColor};
}

&:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
`

const Button = ({children, ...rest}) => {
  return (
    <PrimaryButton {...rest}>{children}</PrimaryButton>
  )
}

export default Button