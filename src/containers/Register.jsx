import React from 'react';
import { Col, Row, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import '../assets/styles/components/Register.scss';

const Register = () => (
    <section className="register">
        <Form className="register__card">
            <h1>Regístrate</h1>
            <Form.Row>
                <Col>
                    <Form.Group controlId="usserName">
                        <Form.Label>Nombre:</Form.Label>
                        <Form.Control type="text" placeholder="Peter" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="usserLastName">
                        <Form.Label>Apellidos:</Form.Label>
                        <Form.Control type="text" placeholder="Parker" />
                    </Form.Group>
                </Col>
            </Form.Row>
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

export default Register;
