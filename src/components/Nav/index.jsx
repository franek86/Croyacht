import React from "react";
import { NavLink } from "react-router-dom";

const menuItems = [
  { item: "Boats", url: "boats" },
  { item: "Destinations", url: "destinations" },
  { item: "Blog", url: "blog" },
  { item: "About", url: "about" },
  { item: "Contact", url: "contact" },
];

const Nav = () => {
  return (
    <nav className='header__nav'>
      {menuItems.map(({ item, url }, index) => (
        <NavLink to={url} key={index}>
          {item}
        </NavLink>
      ))}
    </nav>
  );
};

export default Nav;
