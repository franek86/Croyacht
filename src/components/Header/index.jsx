import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav/index.jsx";
import Container from "../Container/index.jsx";

import Logo from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <header>
      <Container>
        <div className='header'>
          <Link to='/'>
            <img className='header__logo' src={Logo} alt='Croyacht Logo' title='Croyacht' />
          </Link>
          <Nav />
        </div>
      </Container>
    </header>
  );
};

export default Header;
