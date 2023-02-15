import { Formik, Form } from "formik";
import * as Yup from 'yup';
import FormikInput from "../../components/Formik/FormikInput";
import Button from "../../components/Button/Button";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import styled from "styled-components";
import { borderColor } from "../../consts/colors";
import { requiredField } from "../../consts/validations";
import FormikSelect from "../../components/Formik/FormikSelect";
import { CartContext } from "../../contexts/CartContext";

const validationSchema = Yup.object().shape({
  country: Yup.object().required(requiredField),
  address: Yup.string().required(requiredField),
  postal_code: Yup.string().required(requiredField),
  city: Yup.string().required(requiredField),
  phone_number: Yup.string().required(requiredField),
  first_name: Yup.string().required(requiredField),
  last_name: Yup.string().required(requiredField),
  card_number: Yup.number().required(requiredField),
  card_cvv: Yup.number().required(requiredField),
});

const PaymentsForm = () => {
const { resetCart } = useContext(CartContext);
const handleSubmit = (values) => {
  resetCart();
}

  return (
    <Formik initialValues={{
      country: '',
      address: '',
      postal_code: '',
      city: '',
      phone_number: '',
      first_name: '',
      last_name: '',
      card_number: '',
      card_cvv: '',
    }} 
    validationSchema={validationSchema} 
    onSubmit={handleSubmit}>
      <StyledForm>
        <Subtitle>Contact Details</Subtitle>
        <FormikSelect name="country" options={[{ value: "LT", label: "Lithuania" }]} />
        <FormikInput name='address' placeholder='Address'>
        </FormikInput>
        <InputRow>
          <PostalCode>
            <FormikInput name='postal_code' placeholder='Postal Code' />
          </PostalCode>
          <InputRowItem>
            <FormikInput name='city' placeholder='City' />
          </InputRowItem>  
          <InputRowItem>
            <FormikInput name='phone_number' placeholder='Phone Number' />
          </InputRowItem>  
        </InputRow>
        <Subtitle>Card Details</Subtitle>
        <InputRow>
          <InputRowItem>
            <FormikInput name='first_name' placeholder='First Name' />
          </InputRowItem>  
          <InputRowItem>
            <FormikInput name='last_name' placeholder='Last Name' />
          </InputRowItem>  
        </InputRow>
        <InputRow>
          <CardNumber>
            <FormikInput name='card_number' placeholder='Card Number' type='number' />
          </CardNumber>
          <InputRowItem>
            <FormikInput name='card_cvv' placeholder='CVV' type='number' />
          </InputRowItem>
        </InputRow>
        <Button type='submit'>Confirm purchase</Button>
      </StyledForm>
    </Formik>
  )
}

export default PaymentsForm

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const Subtitle = styled.p`
  font-size: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid ${borderColor};
`

const InputRow = styled.div`
  display: flex;
  gap: 8px;
`

const InputRowItem = styled.div`
  flex: 1;
`

const PostalCode = styled.div`
  flex: 0.7;
`

const CardNumber = styled.div`
  flex: 3;
`