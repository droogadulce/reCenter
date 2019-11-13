import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../assets/styles/components/Login.scss';

const Login = () => (
    <section className="login">
        <Form className="login__card">
            <h1>Inicia sesión</h1>
            <Form.Group controlId="usserId">
                <Form.Label>Mail:</Form.Label>
                <Form.Control type="email" placeholder="nombre@mail.com" />
            </Form.Group>
            <Form.Group controlId="usserPassword">
                <Form.Label>Contraseña:</Form.Label>   
                <Form.Control type="password" placeholder="Password" />
                <Form.Check type="checkbox" label="Recuérdame"/>
            </Form.Group>
            <Button variant="primary" type="sumbit">
                Entrar!
            </Button>
        </Form>
    </section>
);

export default Login;
