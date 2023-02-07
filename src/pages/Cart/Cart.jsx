import React, { useContext } from 'react'
import { ProductContext } from '../../contexts/ProductContext';
import styled from 'styled-components';
import { euroSymbol } from '../../consts/currency';
import { screenSize } from '../../consts/media';
import Button from '../../components/Button/Button'


const Cart = () => {
  const {products} = useContext(ProductContext);
  const cartProduct = products.slice(0, 2);
  console.log(cartProduct);
  return (
    <Container>
      <Header>
        <h2>MY CART</h2>
        <p>Your cart items are reserved for 30 minutes.</p>
      </Header>
      <CartContainer>
        {cartProduct.map((product) => (
          <CartItem key={product.id}>
            <img src={product.picUrl[0]} alt={product.name}></img>
            <div>
              <CartItemPrice>{euroSymbol}{product.price}</CartItemPrice>
            <p>{product.name}</p>
            <CartItemColor>{product.color}</CartItemColor>
            </div>
            
          </CartItem>
          
        ))}
      </CartContainer>
      <ButtonContainer>
        <Button>Check out</Button>
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
  padding: 16px 32px 0 0;
  background-color: #ffffff;
  margin-bottom: 24px;
`

const CartItem = styled.div`
  display: flex;
  border-radius: 4px;

  img {
    margin-right: 8px;
    width: 150px;
    object-fit: contain;
  }
`

const CartItemPrice = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin: 16px 0 8px;
`

const CartItemColor = styled.p`
  font-weight: 300;
  margin-top: 8px;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`