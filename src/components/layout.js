import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import Nav from "./nav"

const pageStyles = {
  color: "#232129",
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
        <Nav menuLinks={data.site.siteMetadata.menuLinks} />
        {children}
        </main>
    )
}

export default Layout
