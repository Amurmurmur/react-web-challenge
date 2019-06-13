import * as Yup from "yup"

const Schema = Yup.object({
    fullname: Yup.string("Enter a name")
    .required("Please enter a valid name"),
    email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
    amount: Yup.number("Enter amount")
    .required("Enter your amount"),
    confirmPassword: Yup.string("Enter your password")
    .required("Confirm your password")
    .oneOf([Yup.ref("password")], "Password does not match")})

export default Schema;