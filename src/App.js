import React from "react";
import {useFormik} from 'formik'
// TODO: import useFormik from formik library

function App() {
  // TODO: add a const called formik assigned to useFormik()
	const formik = useFormik({
		initialValues: {
			email: '',
			password: ''
		},
		onSubmit: values => {
			console.log('form:', values);
			alert("Login Successful");
		},
		validate: values => {
			let errors = {};
			if(!values.email.match(/[a-zA-Z0-9]+@[a-z0-9.-]+\.[a-z]{2,4}/)) {
				errors.email = 'Username should be an e-mail';
			}
			
			return errors;
			
		}
	});
	

  return (
    <div>
		<form onSubmit={formik.handleSubmit}>
			<div>Email</div>
			
			<input id="emailField" type="text" name="email" onChange={formik.handleChange} value={formik.values.email} />			
			<div id="emailError" style={{color:'red'}}>{formik.values.email.length==0 ? "Field Required" : formik.errors.email ? formik.errors.email : null }&nbsp;</div>
			
			<div>Password</div>
			
			<input id="pswField" type="text" name="password" onChange={formik.handleChange} value={formik.values.password} />
			
			<div id="pswError" style={{color:'red'}}>{formik.values.password.length==0 ? "Field Required" : null}&nbsp;</div>
			
			<button id="submitBtn" type="submit" onClick={formik.handle}>Submit</button>
		</form>
    </div>
  );
}

export default App;
