import React from "react"
import { Helmet } from "react-helmet"

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
                <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300&display=swap" rel="stylesheet"/>
            </Helmet>
            {children}
            <Footer />
        </main>
    )
}

export default Layout
