import React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  
    header = (
      <>
      <Link to="/">
        {title}
      </Link>
      <Link to="/">
        {title}
      </Link>
      <Link to="/">
        {title}
      </Link>
      <Link to="/">
        {title}
      </Link>
      <Link to="/">
        {title}
      </Link>
      <Link to="/">
        {title}
      </Link></>
    )
  

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
