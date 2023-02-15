import { euroSymbol } from "../../consts/currency";
import styled from "styled-components";

const CartItem = ({product}) => {
  return (
    <Container>
      <img src={product.picUrl[0]} alt={product.name}></img>
      <div>
        <CartItemPrice>{euroSymbol}{product.price}</CartItemPrice>
      <p>{product.name}</p>
      <CartItemColor>{product.color}</CartItemColor>
      </div>
      <ItemQuantity>Quantity: {product.quantity}</ItemQuantity>
    </Container>
)
}

export default CartItem

const Container= styled.div`
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

const ItemQuantity = styled.div`
  flex: 1;
  display: flex;
  align-self: center;
  justify-content: flex-end;
  margin-right: 8px;
`