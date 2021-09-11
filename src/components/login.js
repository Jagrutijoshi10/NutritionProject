import React from 'react';
// import Register from './register';
import { Route } from "react-router-dom";
import {
    Container,
    // Row, 
    // Col, 
    Form,
    Button
} from "react-bootstrap"
import HomePage from './homePage';

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input: {},
            errors: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

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
            input["email"] = "";
            input["password"] = "";
            this.setState({ input: input });
            this.props.history.push('/homePage');
            <Route path="/homePage" component={HomePage} />
        }
        // alert(JSON.stringify(this.state))
    }

    validate() {
        let input = this.state.input;
        let errors = {};
        let isValid = true;

        if (!input["email"]) {
            isValid = false;
            errors["email"] = "Please enter your email Address.";
        }

        if (!input["password"]) {
            isValid = false;
            errors["password"] = "Please enter your password.";
        }


        if (typeof input["email"] !== "undefined") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(input["email"])) {
                isValid = false;
                errors["email"] = "Please enter valid email address.";
            }
        }

        if (typeof input["email"] !== "undefined") {

            var regex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z]).{8,}$/);
            if (!regex.test(input["password"])) {
                isValid = false;
                errors["password"] = "Please enter password with atleast one alphabet,special character and a number.";
            }
        }


        this.setState({
            errors: errors
        });

        return isValid;
    }


    render() {
        return <div>
            <Container className="login-top-margin">
                <h2 className="d-flex justify-content-center">Login</h2>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value={this.state.input.email}
                            onChange={this.handleChange} placeholder="tony@gmail.com" />
                        <Form.Text className="text-danger">{this.state.errors.email}</Form.Text>
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                            value={this.state.input.name}
                            onChange={this.handleChange} />
                        <Form.Text className="text-danger">{this.state.errors.password}</Form.Text>
                    </Form.Group>

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

export default Login