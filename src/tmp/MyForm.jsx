import React from "react"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import { Button, TextField } from "@mui/material"

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
})

function CustomInput(props) {
  return (
    <TextField
      id='outlined-basic'
      label='Label Text'
      variant='outlined'
      {...props}
    />
  )
}

export function MyForm() {
  // function handleClick(ev){
  //   console.log(ev)
  // }
  return (
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          // same shape as initial values
          console.log(values)
        }}
      >
        {({ errors, touched }) => (
          <Form>
            {/* <Field onInput={handleClick} name='firstName' /> */}
            <Field name='firstName' />
            {errors.firstName && touched.firstName ? (
              <div>{errors.firstName}</div>
            ) : null}
            <Field as={CustomInput} name='lastName' />
            {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}
            <Field name='email' type='email' />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Button type='submit' variant="outlined">Submit</Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
