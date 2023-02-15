import { useContext } from "react";
import styled from "styled-components";
import { screenSize } from "../../consts/media";
import { CartContext } from "../../contexts/CartContext";
import CartItem from "../Cart/CartItem";
import PaymentsForm from "./PaymentsForm";

const Checkout = () => {
  const {cartItems} = useContext(CartContext);

  return (
    <Container>
      <PaymentContainer>
        <PaymentsForm />
      </PaymentContainer>
       <CartContainer>
        {cartItems.map((product) => (
          <CartItem key={product.id} product={product}>
          </CartItem>
        ))}
      </CartContainer>
    </Container>
  )
}

export default Checkout

const Container = styled.div`
  max-width: ${screenSize.laptop};
  margin: 0 auto;
  display: flex;
  gap: 32px;
`

const PaymentContainer = styled.div`
  flex: 3;
  background-color: #ffffff;
  padding: 16px;
`

const CartContainer = styled.div`
  flex: 1;
  padding: 16px 32px 0 0;
  background-color: #ffffff;
  margin-bottom: 24px;
`