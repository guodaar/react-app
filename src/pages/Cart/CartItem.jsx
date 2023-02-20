import { euroSymbol } from "../../consts/currency";
import styled from "styled-components";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const CartItem = ({
  product,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
}) => {
  return (
    <Container>
      <img src={product.picUrl[0]} alt={product.name}></img>
      <div>
        <CartItemPrice>
          {euroSymbol}
          {product.price}
        </CartItemPrice>
        <p>{product.name}</p>
        <CartItemColor>{product.color}</CartItemColor>
      </div>
      <ItemQuantityContainer>
        <AiOutlineMinus onClick={handleDecreaseQuantity} />
        <ItemQuantity>{product.quantity}</ItemQuantity>
        <AiOutlinePlus onClick={handleIncreaseQuantity} />
      </ItemQuantityContainer>
    </Container>
  );
};

export default CartItem;

const Container = styled.div`
  display: flex;
  border-radius: 4px;

  img {
    margin-right: 8px;
    width: 150px;
    object-fit: contain;
  }
`;

const CartItemPrice = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin: 16px 0 8px;
`;

const CartItemColor = styled.p`
  font-weight: 300;
  margin-top: 8px;
`;

const ItemQuantityContainer = styled.div`
  flex: 1;
  display: flex;
  align-self: center;
  justify-content: flex-end;
  gap: 16px;
  margin-right: 8px;
  user-select: none;

  svg {
    cursor: pointer;
    margin-top: 4px;
  }
`;

const ItemQuantity = styled.div`
  font-size: 18px;
`;
