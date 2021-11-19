import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import Footer from "../components/footer"

const pageStyles = {
  color: 'rgba(255, 255, 255, 0.88)',
  padding: 96,
  fontFamily: "'IBM Plex Mono', monospace",
  maxWidth: '42rem',
  marginRight: 'auto',
  marginLeft: 'auto'
}

const Layout = ({ children }) => {
    return (
        <main style={pageStyles}>
            <Helmet>
                <title>Dani Subject</title>
                <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300&family=Merriweather&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300&display=swap" rel="stylesheet"/>
                <script src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js" defer></script>
            </Helmet>
            {children}
            <Footer />
            <div style={{padding: 20, display: 'flex', justifyContent: 'right'}} id="wcb" class="carbonbadge .wcb-d"></div>
        </main>
    )
}

export default Layout
