import * as yup from 'yup'

export default yup.object().shape({
    first_name: yup.string()
        .required("Name is required"),
    last_name: yup.string()
    .required("Name is required"),
    email: yup.string()
        .email("Must be a valid email")
        .required("Email is required"),
    password: yup.string()
        .required('No password provided.') 
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    term: yup.boolean().required()

})