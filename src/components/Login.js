import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button, Figure } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";

const Login = () => {
  

  return (
    <div>
     
      <Container>
        <Row className="mt-5 mb-5 ms-5">
          <Col className="ml-200">
            <h1 style={{ fontWeight: "700" }}>LOGIN FORM</h1> <br />
            <h4 style={{ fontWeight: "500" }}>Welcome back! <br />
            <span style={{ fontSize: '13px', fontWeight: "400", color: 'grey' }}>Enter your Credentials Details
              to access your account</span></h4>
            <Form style={{ width: "350px" }}>
              
              <Form.Group controlId="form.Email">
                <Form.Label
                  style={{
                    fontSize: "13px",
                    fontWeight: "500",
                    marginTop: "20px",
                  }}
                >
                  Email address<span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  className="border-1 shadow mb-0.5 mt-0.5 p-2 ps-2"
                  size="sm"
                  style={{ fontSize: "11px", height: "30px" }}
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>
              <Form.Group controlId="form.password">
                <Form.Label
                  style={{
                    fontSize: "13px",
                    fontWeight: "500",
                    marginTop: "20px",
                  }}
                >
                  Password<span style={{ color: "red" }}>*</span>
                </Form.Label>
                <div className="input-group">
                  <Form.Control
                    className="border-1 shadow  p-2 ps-2"
                    size="sm"
                    style={{ fontSize: "11px", height: "30px" }}
                    
                    placeholder="Enter your password"
                    required
                    
                  />
                 
                    <i class='bx bx-hide eye-icon'
                    style={{ fontSize: "17px",
                    left:"90%",
                    position: "absolute",
                      right: "72%",
                     padding: "5px",
                     cursor: "pointer",
                     color:'#8b8b8b'
                  }}
                    ></i>

                </div>
              </Form.Group>
              <div >
                <p className='text-primary'
               style={{
               textAlign:"center",
               marginTop: "10px",
               marginLeft:"70%",
               fontSize:"11px",
              }} >Forgot password!</p>
              </div>
              <input
                style={{
                  color: "grey",
                  backgroundColor: "grey",
                  width: "20px",
                  marginTop: "30px",
                }}
                type="checkbox"
                inline
              />
             
              <span style={{ fontSize: "11px", color: "black", fontWeight:"500" }}>
               
                Reminder me

                
              </span>
              <Button
                className="mt-4"
               
                style={{
                 
                  width: "350px",
                  fontWeight: "600",
                  backgroundColor:"#246b3c",
                  border:'none',
                  borderRadius:"2px"
                }}
              >
                LOGIN
              </Button>

              <div className="d-flex mb-1 mt-3">
                <hr className="border-2 " style={{ width: "40%", color:'black' }} />
                <span className=""
               style={{ color: "black", fontWeight:"500" }} >&nbsp; Or &nbsp;</span>
                <hr className="border-2" style={{ width: "40%" }} />
              </div>
              <Row>
                <Col className=" mt-3">
                <Button
                    className="text-dark bg-white ps-1 pe-1"
                    style={{ fontSize: "10px", borderColor: "gray", borderRadius:'10px',
                    padding: '5px 20px ', border: "1px  solid #CACACA",  }}
                  >
                    <FcGoogle style={{ fontSize: "1.5em",  }} />
                    &nbsp;<b>sign in with google</b>
                  </Button>
                </Col>
                <Col className=" mt-3">
                  <Button
                    className="text-dark bg-white ps-1 pe-1"
                    style={{ fontSize: "10px", borderColor: "gray", borderRadius:'10px',
                    padding: '5px 20px ', border: "1px  solid #CACACA",  }}
                  >
                    <BsApple style={{ fontSize: "1.5em",  }} />
                    &nbsp;<b>sign in with Apple</b>
                  </Button>
                </Col>
              </Row>
              <p
                style={{ fontSize: "14px", marginTop: "20px" ,
                color: "black", fontWeight:"500"}}
                className="text-center"
             
              >
               Don't have an account?
                <span className="text-primary"
                style={{
                 fontSize:" 12px",
                  textDecoration:'none'
                 }}
                >Signup</span>
              </p>
            </Form>
          </Col>

          <Col md={7} className="justify-content-end ">
            <Figure>
              <Figure.Image
                style={{
                  height: "450px",
                  width: "450px",
                  marginLeft: "2px",
                   
                }}
                src={require('../assets/Rectangle 4597.png')}
              />
            </Figure>
          </Col>
        </Row>
        
      </Container>
      
    </div>
  );
}

export default Login;