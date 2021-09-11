// import { render } from '@testing-library/react';
import React from 'react';
import {
    Container,
    Row,
    Col,
    Form,
    Button
} from "react-bootstrap"
import { Route } from "react-router-dom";
import Login from "../components/login"

class Register extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            input: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
            },
            errors: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        // this.redirectToLogin = this.redirectToLogin.bind(this)
    }

    handleChange(event) {
        let input = this.state.input
        input[event.target.id] = event.target.value;
        this.setState({ input });
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.validate()) {
            let input = {};
            input["firstName"] = "";
            input["lastName"] = "";
            input["email"] = "";
            input["password"] = "";
            input["confirmPassword"] = "";
            this.setState({ input: input });

            this.props.history.push('/login');
            <Route path="/login" component={Login} />
        }

    }

    validate() {
        let input = this.state.input;
        let errors = {};
        let isValid = true;

        if (!input["firstName"]) {
            isValid = false;
            errors["firstName"] = "Please enter your First Name.";
        }

        if (!input["lastName"]) {
            isValid = false;
            errors["lastName"] = "Please enter your Last Name.";
        }

        if (!input["email"]) {
            isValid = false;
            errors["email"] = "Please enter your email Address.";
        }

        if (!input["password"]) {
            isValid = false;
            errors["password"] = "Please enter your password.";
        }

        if (!input["confirmPassword"]) {
            isValid = false;
            errors["confirmPassword"] = "Please enter your Confirm Password.";
        }


        if (input["email"] !== "") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(input["email"])) {
                isValid = false;
                errors["email"] = "Please enter valid email address.";
            }
        }

        if (input["password"] !== "") {

            var regex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z]).{8,}$/);
            if (!regex.test(input["password"])) {
                isValid = false;
                errors["password"] = "Please enter password with atleast one alphabet,special character and a number.";
            }
            if (!regex.test(input["confirmPassword"])) {
                isValid = false;
                errors["confirmPassword"] = "Please enter password with atleast one alphabet,special character and a number.";
            }
            if (input['confirmPassword'] !== input['password']) {
                isValid = false;
                errors["confirmPassword"] = "Password and Confirm Password do not Match.";
            }
        }


        this.setState({
            errors: errors
        });

        return isValid;
    }

    render() {
        return <div className="register">
            <Container>
                <h2 className="d-flex justify-content-center">Register</h2>
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col>
                            <Form.Group controlId="firstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" value={this.state.input.firstName}
                                    onChange={this.handleChange} placeholder="Tony" />
                                <Form.Text className="text-danger">{this.state.errors.firstName}</Form.Text>
                            </Form.Group>

                            <Form.Group controlId="lastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" value={this.state.input.lastName}
                                    onChange={this.handleChange} placeholder="Stark" />
                                <Form.Text className="text-danger">{this.state.errors.lastName}</Form.Text>
                            </Form.Group>

                        </Col>
                        <Col >
                            <Form.Group controlId="email">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="email" value={this.state.input.email}
                                    onChange={this.handleChange} placeholder="tony@gmail.com" />
                                <Form.Text className="text-danger">{this.state.errors.email}</Form.Text>
                            </Form.Group>

                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" value={this.state.input.password}
                                    onChange={this.handleChange} placeholder="Password" />
                                <Form.Text className="text-danger error-wrap">{this.state.errors.password}</Form.Text>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="confirmPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" value={this.state.input.confirmPassword}
                                    onChange={this.handleChange} placeholder="Confirm Password" />
                                <Form.Text className="text-danger error-wrap">{this.state.errors.confirmPassword}</Form.Text>
                            </Form.Group>
                        </Col>
                        <Col></Col>
                    </Row>

                    <div className="d-flex justify-content-end">
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>
            </Container>
        </div>
    }

}

export default Register