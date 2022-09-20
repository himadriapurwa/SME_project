import React from 'react'
import {useFormik} from 'formik'
import {Row, Col,Form, Button} from 'react-bootstrap'
// import { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import DatePicker from "@mui/lab/DatePicker";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers";
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import { LocalizationProvider } from '@material-ui/pickers'
import { LocalizationProvider } from '@mui/x-date-pickers'
// import MomentUtils from '@date-io/moment';
const initialValues = {
    email : '',
    password :'',
    username: "",
    number : "",
    gender : "",
    nationality: "",
    checkbox : "",
    birthday: Date.now()
}

const onSubmit = async (values) =>{
    
    // const data = {values}
    console.log("data: ", values)
}

const validate = values =>{
    let errors = {}
    if(!values.username){
      errors.number = 'Required'
    }
    if(!values.number){
        errors.number = 'Required'
      }
    // else if(!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(values.number)){
    //   errors.number = 'invalid contact number'
    // }  
   
    if(!values.email){
      errors.email = 'Required'
    }
    else if( !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(values.email)){
      errors.email ='invalid email form'
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
<Row>
<Col>
{/* username */}
{/* <div className='form-control'> */}
        <Form.Label>username</Form.Label>
       <Form.Control className = 'form-control'  type="text" placeholder="username" id="usename" name="username" onChange={formik.handleChange}  value={formik.values.username} />
      {formik.errors.username ? (<div className='error' style={{color: "red"}}>{formik.errors.username}</div>):null}
  {/* </div> */}
</Col>
<Col>
{/* EMAIL */}
{/* <div className='form-control'> */}
        <Form.Label >Email address</Form.Label>
        <Form.Control className = 'form-control' type="email" placeholder="Enter email" id="email" name="email" onChange={formik.handleChange}  value={formik.values.email} />
        {formik.errors.email ? (<div className='error' style={{color: "red"}}>{formik.errors.email}</div>):null}
  {/* </div> */}
</Col>



</Row> 

<Row>

  <Col>
    {/* NUMBER */}
    {/* <div className='form-control'> */}
        <Form.Label>Contact Number</Form.Label>
        <Form.Control className = 'form-control' type="text" placeholder="number" id="number" name="number" onChange={formik.handleChange}  value={formik.values.number} />
        {formik.errors.number ? (<div className='error' style={{color: "red"}}>{formik.errors.number}</div>):null}
    {/* </div> */}
  </Col>
  <Col>
    {/* PASSWORD */}

    {/* <div className='form-control' > */}
        <Form.Label >password</Form.Label>
       <Form.Control className = 'form-control' type="password" autocomplete="on" placeholder="password" id="password" name="password" onChange={formik.handleChange}  value={formik.values.password} />
      {formik.errors.password ? (<div className='error' style={{color: "red"}}>{formik.errors.password}</div>):null}
  {/* </div> */}

  </Col>
</Row>

<Row>
  <Col>
  <Form.Label>nationality</Form.Label>
                    <Form.Control className='form-control' as="select" id="nationality" name="nationality" onChange={formik.handleChange}  value={formik.values.nationality}>
                      <option label="Indian" value= "Indian">Indian</option>
                      <option label="Albanian" value= "Albanian">Albanian</option>
                      <option label="Algerian" value= "Algerian">Algerian</option>
                      <option label="American" value= "American">American</option>
                      <option label="Belgian" value= "Belgian">Belgian</option>
                    </Form.Control>

  
  </Col>
  <Col>
  <LocalizationProvider dateAdapter={AdapterDateFns}>
   
            <DatePicker className='form-control'
              onChange={(value) => formik.setFieldValue("birthday", value, true)}
              value={formik.values.birthday}
              renderInput={(props) => (
                <TextField
                  // error={Boolean(touched.birthday && errors.birthday)}
                  // helperText={touched.birthday && errors.birthday}
                  // onChange={formik.handleChange}
                  label="Birthday"
                  margin="normal"
                  name="birthday"
                  variant="standard"               
                  {...props}
                />
              )}
            />
          </LocalizationProvider>


  

  </Col>
</Row>


<Form.Group className='form-control' as="checkbox" id="checkbox" name="checkbox" onChange={formik.handleChange}  value={formik.values.checkbox}>
       <Form.Check type ="checkbox" label="abc" name="checkbox" value= "abc" />
       <Form.Check type ="checkbox" label="def" name="checkbox" value= "def"/>
       <Form.Check type ="checkbox" label="pqr" name="checkbox" value= "pqr"/>
       <Form.Check type ="checkbox" label="lmn" name="checkbox" value= "lmn"/>
 </Form.Group>

 <label htmlFor="gender">gender</label>
       <Form.Group className='form-control' id="gender" name="gender" onChange={formik.handleChange}  value={formik.values.gender}>
            <Form.Check inline type="radio" label="male" name="gender" id="supportedRadio3" value="male" />
            <Form.Check inline type="radio" label="female" name="gender" id="supportedRadio4" value="female" />
         </Form.Group>


{/* DATEPICKER */}
      <div>
        
        <input 
          type='file'
          name='photo'
          accept='image/*'
          onChange={formik.handleChange}
        />
      </div>

    {/* <button type='submit'>submit</button> */}
    <Button type = "submit" variant="secondary">Submit</Button>
    </Form>
    <div>
    </div>
    <div>
    </div>
    </div>
    </>
  )
}
export default RegistrationForm;
