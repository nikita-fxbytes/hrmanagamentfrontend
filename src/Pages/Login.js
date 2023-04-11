
import { useState } from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

const Login = () => {
  const formValueJson = {
    email: '',
    password: ''
  }
  const [formValue, setFormValue] = useState(formValueJson)
  const onchange = (e) =>{
    setFormValue({...formValue,[e.target.name]:e.target.value});
    console.log(formValue)

  }
  const handleForm = (e) =>{
      e.preventDefault();

  }
  return (
    <div className='d-flex align-items-center  vh-100'>
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
        <Form className='p-4 border' onSubmit={handleForm}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" value={formValue.email} onChange={onchange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" value={formValue.password} onChange={onchange}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Login
