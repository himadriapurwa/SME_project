import React from 'react'
import {useFormik} from 'formik'

const initialValues = {
    number : ""
}

const onSubmit = async (values) =>{
    console.log("data: ", values)
}

const validate = values =>{
    let errors = {}
    if(!values.number){
        errors.number = 'Required'
      }
    else if(!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(values.number)){
      errors.number = 'invalid contact number'
    }  
    return errors
  }

  function RegistrationForm() {
    const formik = useFormik({
        initialValues, 
        onSubmit,
        validate
    })

    return (
        <>
        <div>
        
         <Form onSubmit = {formik.handleSubmit} encType="multipart/form-data" method= "POST">  
         {/* <div className='form-control'> */}
        <Form.Label>Contact Number</Form.Label>
        <Form.Control className = 'form-control' type="text" placeholder="number" id="number" name="number" onChange={formik.handleChange}  value={formik.values.number} />
        {formik.errors.number ? (<div className='error' style={{color: "red"}}>{formik.errors.number}</div>):null}
        </Form>
        
        </div>
        </>
    )}