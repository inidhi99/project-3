import React from 'react';

import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <>
       
       <p>This is the Login</p>

       <Form>
       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="d-flex justify-content-center mb-4" controlId="remember-me">
          <Form.Check label="Remember me" />
        </Form.Group>
      {/* <Button variant="primary" type="submit">
        Login 
      </Button> */}

      <Link className="linkStyles" to="#Explore">
        <Button variant="primary" size="lg"> Login </Button>
        </Link>


      <Link className="linkStyles" to="../pages/SignupForm">
        <Button variant="primary" size="lg">Sign Up</Button>
        </Link>

    </Form>


    </>

  );
};

export default LoginForm;



// // see SignupForm.js for comments
// import React, { useState } from 'react';
// import { Form, Button, Alert } from 'react-bootstrap';
// // Import the `useMutation()` hook from Apollo Client
// import { useMutation } from '@apollo/client';
// // Import the GraphQL mutation
// import { LOGIN_USER } from '../utils/mutations';
// import Auth from '../utils/auth';

// const LoginForm = () => {
//   const [userFormData, setUserFormData] = useState({ email: '', password: '' });
//   const [validated] = useState(false);
//   const [showAlert, setShowAlert] = useState(false);
//   const [loginUser] = useMutation(LOGIN_USER)

//   const handleInputChange = event => {
//     const { name, value } = event.target;
//     setUserFormData({ ...userFormData, [name]: value });
//   };

//   const handleFormSubmit = async event => {
//     event.preventDefault();

//     // check if form has everything (as per react-bootstrap docs)
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     try {
//       const { data } = await loginUser({
//         variables: { ...userFormData },
//       });
//       Auth.login(data.login.token);
//     } catch (err) {
//       console.error(err);
//       setShowAlert(true);
//     }

//     setUserFormData({
//       username: '',
//       email: '',
//       password: '',
//     });
//   };

//   return (
//     <>
//       <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
//         <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant="danger">
//           Something went wrong with your login credentials!
//         </Alert>


//         <Form.Group>
//           <Form.Label htmlFor="email">Email</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Your email"
//             name="email"
//             onChange={handleInputChange}
//             value={userFormData.email}
//             required
//           />
//           <Form.Control.Feedback type="invalid">Email is required!</Form.Control.Feedback>
//         </Form.Group>

//         <Form.Group>
//           <Form.Label htmlFor="password">Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Your password"
//             name="password"
//             onChange={handleInputChange}
//             value={userFormData.password}
//             required
//           />
//           <Form.Control.Feedback type="invalid">Password is required!</Form.Control.Feedback>
//         </Form.Group>


        
//         <Button disabled={!(userFormData.email && userFormData.password)} type="submit" variant="success">
//           Submit
//         </Button>
//       </Form>
//     </>
//   );
// };

// export default LoginForm;