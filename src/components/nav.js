import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Nav = ({ siteTitle, menuLinks }) => (
  <header>
    <div>
        <nav>
        <ul style={{ display: "flex", flex: 1, padding: 0 }}>
            {menuLinks.map(link => (
            <li
                key={link.name}
                style={{
                listStyleType: `none`,
                paddingRight: `1rem`,
                paddingBottom: '1rem'
                }}
            >
                <Link style={{ color: `#c39eff` }} to={link.link}>
                {link.name}
                </Link>
            </li>
            ))}
        </ul>
        </nav>
    </div>
  </header>
)

export default Nav