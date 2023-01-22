import React from 'react'
import {SignupSchema} from "../schema/schemaform"
import {useFormik} from 'formik'
import axios from 'axios'
const AddProduct = () => {
    const {handleChange,handleSubmit,resetForm,values,touched,errors}=useFormik(
        {
initialValues:{
    imgurl:"",
},
validationSchema:SignupSchema,
onSubmit:(values)=>{
axios.post("http://localhost:8080/featureds", values)


    resetForm()
}
        }
    )
  return (
    <div>
        
<form action="" onSubmit={handleSubmit}>
<label htmlFor="imgurl">IMGURL</label>
<input type="text" id='imgurl' name='imgurl'
onChange={handleChange} value={values.imgurl}/>

<br></br>
{
    errors.imgurl && touched.imgurl && (
<span style={{color:"red"}}>
{errors.imgurl}
</span>

    )
}
{/* <input type="text" /> */}
   <button type='submit'>post</button>
    
    </form> </div>
  )
}

export default AddProduct

