import React from "react";
import { Link } from "gatsby";

const Header = () => {
  return (
    <header className="global-header">
      <Link to="/">HOME</Link>
      <Link to="/">ABOUT</Link>
      <Link to="/">PRICING</Link>
      <Link to="/">
        <span>VITA</span>
      </Link>
      <Link to="/">GALLERY</Link>
      <Link to="/">BLOG</Link>
      <Link to="/">CONTACT</Link>
    </header>
  );
};

export default Header;
