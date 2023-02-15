import React, { useContext } from 'react';
import styled from 'styled-components';
import { screenSize } from '../../consts/media';
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom';
import { LOGIN_PATH, CHECKOUT_PATH } from '../../routes/const';
import { UserContext } from '../../contexts/UserContext';
import { CartContext } from '../../contexts/CartContext';
import CartItem from './CartItem';

const Cart = () => {
  const {cartItems} = useContext(CartContext);
  const {isLoggedIn} = useContext(UserContext);

  return (
    <Container>
      <Header>
        <h2>MY CART</h2>
        <p>Your cart items are reserved for 30 minutes.</p>
      </Header>
      <CartContainer>
        {cartItems.map((product) => (
          <CartItem key={product.id} product={product}>
          </CartItem>
        ))}
      </CartContainer>
      <ButtonContainer>
        <Button as={Link} to={isLoggedIn ? CHECKOUT_PATH : LOGIN_PATH}>Check out</Button>
      </ButtonContainer>
    </Container>
  )
}

export default Cart 

const Container = styled.div`
  max-width: ${screenSize.tablet};
  margin: 0 auto;
`

const Header = styled.div`
padding: 24px;
display: flex;
justify-content: space-between;
align-items: center;
background-color: #ffffff;
border-top-left-radius: 4px;
border-top-right-radius: 4px;
margin-bottom: 24px;
`

const CartContainer = styled.div`
  padding: 16px;
  background-color: #ffffff;
  margin-bottom: 24px;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

