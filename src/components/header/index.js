import React, { useState } from 'react';
import { Navbar, Container } from 'rbx';
import logoImage from '../../assets/images/logo.png';
import '../../styles/header.scss';

function Header() {
  const [ openMenu, setOpenMenu ] = useState(false);

  return(
    <Navbar>
      <Container>
        <Navbar.Brand>
          <img src={logoImage} />
          <Navbar.Burger
            className="navbar-burger burger" 
            aria-label="menu" 
            aria-expanded="false" 
            data-target="navbar-menu">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </Navbar.Burger>
        </Navbar.Brand>

        <Navbar.Menu id="navbar-menu"
          // active={openMenu.toString()}
          // onClick={() => setOpenMenu(!openMenu)}
        >
          <Navbar.Segment as="div" className="navbar-item navbar-end" align="right">
            Item 1
          </Navbar.Segment>
        </Navbar.Menu>
      </Container>
    </Navbar>
  )
}

export default Header;
