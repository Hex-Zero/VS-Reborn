import React from "react";
import { Link } from "gatsby";

const Header = () => {
  return (
    <header className="global-header">
      <Link to="/">HOME</Link>
      <Link to="/">ABOUT</Link>
      <Link to="/">PRICING</Link>
      <Link to="/">
        <span className="max-title">
          <span className="max-title-vita">VITA SMILE</span>
          <span className="max-title-photograpy">PHOTOGRAPY</span>
        </span>
      </Link>
      <Link to="/">GALLERY</Link>
      <Link to="/blog">BLOG</Link>
      <Link to="/">CONTACT</Link>
    </header>
  );
};

export default Header;
