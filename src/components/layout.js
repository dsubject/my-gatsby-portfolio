import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import Nav from "./nav"

const pageStyles = {
  color: 'var(--textNormal)',
  padding: 96,
  fontFamily: "'IBM Plex Mono', monospace",
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
            menuLinks {
              name
              link
           }
        }
      }
    }
  `)
    return (
        <main style={pageStyles}>
        <Helmet>
            <title>Dani Subject</title>
            <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300&display=swap" rel="stylesheet"/>
        </Helmet>
        <ThemeToggler>
       {({ theme, toggleTheme }) => {
          // Don't render anything at compile time. Deferring rendering until we
          // know which theme to use on the client avoids incorrect initial
          // state being displayed.
          if (theme == null) {
            return null
          }
          return (
            <label>
              <input
                type="checkbox"
                onChange={(e) =>
                  toggleTheme(e.target.checked ? 'dark' : 'light')
                }
                checked={theme === 'dark'}
              />{' '}
              Dark mode
            </label>
          )
        }}
        </ThemeToggler>
        <Nav menuLinks={data.site.siteMetadata.menuLinks} />
        {children}
        </main>
    )
}

export default Layout
