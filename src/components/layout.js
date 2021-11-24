import React from "react"
import { Helmet } from "react-helmet"

import Footer from "../components/footer"

const pageStyles = {
  color: 'rgba(255, 255, 255, 0.88)',
  padding: 96,
  marginRight: 'auto',
  marginLeft: 'auto',
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
  fontSize: "1.125rem",
  maxWidth: '45rem',
}

const Layout = ({ children }) => {
    return (
        <main style={pageStyles}>
            <Helmet>
                <title>Dani Subject</title>
            </Helmet>
            {children}
            <Footer />
        </main>
    )
}

export default Layout
