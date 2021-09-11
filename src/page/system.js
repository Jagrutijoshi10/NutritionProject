import React from 'react';
import {
    // Container,
    Row,
    Col,
    // Form,
    Button
} from "react-bootstrap";
import Login from "../components/login.js";
import Logo from "../assets/SmartBuilding.jpg";
import Register from '../components/register.js';

class System extends React.Component {

    constructor(props) {
        super(props)

    }

    render() {
        const { match, history } = this.props;
        const { path } = match;

        return <div>
            <Row>
                <Col xs={6}>
                    <img src={Logo} className="login" alt="Logo" />
                </Col>
                <Col xs={6}>
                    <div className="d-flex justify-content-center">
                        {path === '/register' ? <Register history={history} /> : <Login history={history} />}
                    </div>
                    <Row className="d-flex justify-content-center mt-3">
                        <div className="mt-15">
                            {(path === '/' || path === '/login') ? 'Not yet registered?' : ''}
                            {(path === '/' || path === '/login') ?
                                <Button onClick={() => history.push('/register')}>
                                    Sign Up
                                </Button> : null }
                        </div>
                    </Row>

                </Col>
            </Row>
        </div>
    }
}

export default System