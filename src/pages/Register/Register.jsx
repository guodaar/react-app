import {Formik, Form} from 'formik';
import FormikInput from '../../components/Formik/FormikInput';
import styled from 'styled-components';
import { screenSize } from '../../consts/media';
import Button from '../../components/Button/Button';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { LOGIN_PATH } from '../../routes/const';
import { useCreateUser } from '../../hooks/user';

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required('Required'),
  last_name: Yup.string().required('Required'),
  email: Yup.string().email('Please enter a valid email').required('Required'),
  password: Yup.string().required('Required'),
  confirm_password: Yup.string().required("Please retype your password").oneOf([Yup.ref("password")], "Your passwords do not match")
})

const Register = () => {
  const navigate = useNavigate();

  const {mutateAsync: createUser} = useCreateUser();

  const handleSubmit = (values) => {
    const {confirm_password, ...newUser} = values;
    createUser(newUser).then(() => {
      navigate(LOGIN_PATH)
    }).catch((error) => 
    {
      console.error('registration failed', error);
    })
  }

  return (
    <div>
      <Formik initialValues={{
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      >
        {({isSubmitting}) => (
        <StyledForm>
          <Title>Register your account</Title>
          <FormikInput name='first_name' placeholder='First Name' />
          <FormikInput name='last_name' placeholder='Last Name' />
          <FormikInput type='email' name='email' placeholder='Email' />
          <FormikInput type='password' name='password' placeholder='Password' />
          <FormikInput type='password' name='confirm_password' placeholder='Repeat Password' />
          <Button type='submit' disabled={isSubmitting}>Submit</Button>
          <StyledLink to={LOGIN_PATH}>Already have an account? Sign in here</StyledLink>
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