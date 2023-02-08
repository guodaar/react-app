import {Formik, Form} from 'formik';
import FormikInput from '../../components/Formik/FormikInput';
import styled from 'styled-components';
import { screenSize } from '../../consts/media';
import Button from '../../components/Button/Button';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { LOGIN } from '../../routes/const';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Please enter a valid email').required('Required'),
  password: Yup.string().required('Required'),
  confirmPassword: Yup.string().required("Please retype your password").oneOf([Yup.ref("password")], "Your passwords do not match")
})

const Register = () => {
const handleSubmit = (values, {setSubmitting, resetForm}) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
    resetForm();
  }, 2000);
}

  return (
    <div>
      <Formik initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      >
        {({isSubmitting}) => (
        <StyledForm>
          <Title>Register your account</Title>
          <FormikInput name='firstName' placeholder='First Name' />
          <FormikInput name='lastName' placeholder='Last Name' />
          <FormikInput type='email' name='email' placeholder='Email' />
          <FormikInput type='password' name='password' placeholder='Password' />
          <FormikInput type='password' name='confirmPassword' placeholder='Repeat Password' />
          <Button type='submit' disabled={isSubmitting}>Submit</Button>
          <StyledLink to={LOGIN}>Already have an account? Sign in here</StyledLink>
        </StyledForm>
        )}
      </Formik>
    </div>
  )
}

export default Register

const StyledForm = styled(Form)`
  max-width: ${screenSize.mobile};
  margin: 40px auto;
  background-color: #ffffff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  padding: 32px;
`

const Title = styled.p`
  font-size: 24px;
  text-align: center;
`

const StyledLink = styled(Link)`
  text-align: center;
  margin-top: 8px;

  &:hover {
    text-decoration: none;
  }
`