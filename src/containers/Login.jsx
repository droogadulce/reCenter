import React, { useState } from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../assets/styles/components/Login.scss';
import { loginRequest } from '../actions';

const Login = props => {
  const [form, setValues] = useState({
    email: '',
  });
  const handleInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = event => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
  };
  return (
    <section className='login'>
      <Form className='login__card' onSubmit={handleSubmit}>
        <h1>Inicia sesión</h1>
        <Form.Group controlId='usserId'>
          <Form.Label>Mail:</Form.Label>
          <Form.Control
            type='email'
            placeholder='nombre@mail.com'
            name='email'
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group controlId='usserPassword'>
          <Form.Label>Contraseña:</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            name='password'
            onChange={handleInput}
          />
          <Form.Check type='checkbox' label='Recuérdame' />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Entrar!
        </Button>
      </Form>
    </section>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
