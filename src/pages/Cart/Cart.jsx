import React, { useContext } from "react";
import styled from "styled-components";
import { screenSize } from "../../consts/media";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { LOGIN_PATH, CHECKOUT_PATH } from "../../routes/const";
import { UserContext } from "../../contexts/UserContext";
import { CartContext } from "../../contexts/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartItems, handleUpdateQuantity } = useContext(CartContext);
  const { isLoggedIn } = useContext(UserContext);

  return (
    <Container>
      <Header>
        {cartItems.length ? (
          <>
            <h2>MY CART</h2>
            <p>Your cart items are reserved for 30 minutes.</p>
          </>
        ) : (
          <>
            <p>Your cart is empty.</p>
          </>
        )}
      </Header>
      <CartContainer>
        {cartItems.map((product) => (
          <CartItem
            key={product.id}
            product={product}
            handleIncreaseQuantity={() =>
              handleUpdateQuantity(product.id, "increase")
            }
            handleDecreaseQuantity={() => handleUpdateQuantity(product.id)}
          />
        ))}
      </CartContainer>
      <ButtonContainer>
        {!!cartItems.length && (
          <Button as={Link} to={isLoggedIn ? CHECKOUT_PATH : LOGIN_PATH}>
            Checkout
          </Button>
        )}
      </ButtonContainer>
    </Container>
  );
};

export default Cart;

const Container = styled.div`
  max-width: ${screenSize.tablet};
  margin: 0 auto;
`;

const Header = styled.div`
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  margin-bottom: 24px;
`;

const CartContainer = styled.div`
  padding: 16px;
  margin-bottom: 24px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
