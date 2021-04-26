import React from "react"
import { useDispatch, useSelector} from 'react-redux'
import { Navbar, Nav, Row, Container, NavDropdown } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { logout } from '../actions/userActions'
import { slogout } from '../actions/subscriberActions'



function Header() {

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const subscriberLogin = useSelector(state => state.subscriberLogin)
  const { subscriberInfo } = subscriberLogin


  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logout())
  }

  const slogoutHandler = () => {
    dispatch(slogout())
  }

  return (
    <header>
      <Navbar bg="dark" expand="lg" collapseOnSelect>
        <Container fluid>
          <LinkContainer to="/">
            <Navbar.Brand >The Book Store</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/Cart">
                <Nav.Link >
                  <i className="fas fa-shopping-cart"></i>Cart
                </Nav.Link>
              </LinkContainer>

              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                    <LinkContainer to='/profile'>
                        <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>

                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>   

                </NavDropdown>
              ): (
                <LinkContainer to="/Login">
                  <Nav.Link >
                    <i className="fas fa-user"></i>Login
                  </Nav.Link>
                </LinkContainer>

                
              )}

                {subscriberInfo ? (
                <NavDropdown title={subscriberInfo.name} id='username'>
                    <LinkContainer to='/profile'>
                        <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>

                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>   

                </NavDropdown>
              ): (
                <LinkContainer to="/Subscribe">
                  <Nav.Link >
                    <i className="fas fa-bookmark"></i>Subscribe
                  </Nav.Link>
                </LinkContainer>
              )}


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
