import {Field, ErrorMessage} from 'formik';
import Input from '../Input/Input';

const FormikInput = ({ name, ...restProps}) => {
  return (
    <div>
      <Field name={name} as={Input} {...restProps}/>
      <ErrorMessage name={name} component='div'/>
    </div>
  )
}

export default FormikInput