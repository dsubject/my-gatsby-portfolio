import React from "react"
import { Helmet } from "react-helmet"
import Footer from "../components/footer"

const pageStyles = {
  color: 'rgba(255, 255, 255, 0.88)',
  margin: 96,  
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
  fontSize: "1.125rem",
  //maxWidth: '42rem'
  display: 'flex',
  flexDirection: 'column',
  flex: '2 1 auto'
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
