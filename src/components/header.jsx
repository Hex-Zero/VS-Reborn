import React from "react";
import { Link } from "gatsby";

const Header = () => {
  return (
    <header className="global-header">
      <Link to="/">HOME</Link>
      <Link to="/about">ABOUT</Link>
      <Link to="/pricing">PRICING</Link>
      <Link to="/">
        <span className="max-title">
          <span className="max-title-vita">VITA SMILE</span>
          <span className="max-title-photograpy">PHOTOGRAPY</span>
        </span>
      </Link>
      <Link to="/gallery">GALLERY</Link>
      <Link to="/blog">BLOG</Link>
      <Link to="/contact">CONTACT</Link>
    </header>
  );
};

export default Header;
