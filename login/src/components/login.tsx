import React from "react";
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import photo from '../assets/signup.png';

function Login(this: any){

    const [state, setState] = React.useState({
        username: "",
        password: ""
    })

    function handleChange(evt: { target: { value: any; name: any; }; }) {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    }

    const navigate  = useNavigate();

    const handleClick = () => {
       navigate('/home' ,
           {state:{name:state.username, password:state.password}});

    };

    return(
        <Container  className="justify-content-center pt-5">

            <Row className="m-0">
            <Col className="p-0">
                <Image src={photo} width='80%'/>
            </Col>
            <Col className="p-0">
                <Container>
                    <form>
                        <Row className="m-0 p-2 mt-5">
                            <Col className="p-0">
                                <h1>Login</h1>
                            </Col>
                        </Row>
                        <Row className="m-0 p-2 mt-5">
                            <label>User Name</label>
                            <input
                                placeholder="Enter User Name"
                                type = "text"
                                name = "username"
                                value = {state.username}
                                onChange={handleChange}
                            />
                        </Row>
                        <Row className="m-0 p-2">
                            <label>Password</label>
                            <input
                                placeholder="Enter Password"
                                type = "text"
                                name = "password"
                                value = {state.password}
                                onChange={handleChange}
                            />
                        </Row>
                        <Row className="m-0 p-2">
                            <Button  onClick={handleClick} >
                                Login
                            </Button>
                        </Row>
                    </form>
                </Container>
            </Col>
            </Row>
        </Container>
    );
}

export default Login;