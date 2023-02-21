import { Formik, Form } from "formik";
import FormikInput from "../../components/Formik/FormikInput";
import styled from "styled-components";
import { screenSize } from "../../consts/media";
import Button from "../../components/Button/Button";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { CHECKOUT_PATH, REGISTER_PATH } from "../../routes/const";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import { useLoginUser } from "../../hooks/user";
import { toast } from "react-hot-toast";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const Login = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const { mutateAsync: loginUser } = useLoginUser();

  const handleSubmit = (values) => {
    loginUser(values)
      .then((response) => {
        setUser(response);
        navigate(CHECKOUT_PATH);
        toast.success("Successfully logged in!");
      })
      .catch((error) => {
        toast.error("Failed to login, try again");
      });
  };

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        //Kitas variantas per pati Formik:
        // validate={(values) => {
        //   const errors = {};

        //   if (!values.email) {
        //     errors.email = 'Required'
        //   }
        //   if (!values.password) {
        //     errors.password = 'Required'
        //   }

        //   console.log(errors)

        //   return errors
        // }}
        onSubmit={handleSubmit}
      >
        {({ values, errors, isSubmitting }) => (
          <StyledForm>
            <Title>Login</Title>
            <FormikInput type="email" name="email" placeholder="Email" />
            <FormikInput
              type="password"
              name="password"
              placeholder="Password"
            />
            <Button type="submit" disabled={isSubmitting}>
              Login
            </Button>
            <StyledLink to={REGISTER_PATH}>Sign up</StyledLink>
          </StyledForm>
        )}
      </Formik>
    </div>
  );
};

export default Login;

const StyledForm = styled(Form)`
  max-width: ${screenSize.mobile};
  margin: 40px auto;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  padding: 32px;
`;

const Title = styled.p`
  font-size: 24px;
  text-align: center;
`;

const StyledLink = styled(Link)`
  text-align: center;
  margin-top: 8px;

  &:hover {
    text-decoration: none;
  }
`;
