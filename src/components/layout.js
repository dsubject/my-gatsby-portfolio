import React from "react"
import { Helmet } from "react-helmet"
import Footer from "../components/footer"

const pageStyles = {
  color: 'rgba(255, 255, 255, 0.88)',
  padding: 96,
  marginLeft: 'auto',
  marginRight: 'auto',  
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
  fontSize: "1.125rem",
  maxWidth: '42rem'
}

const Layout = ({ children, title }) => {
    return (
        <main className="main-container" style={pageStyles}>
            <Helmet 
                defaultTitle="Danielle Subject" 
                title={title}>
                <script src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js" defer></script>
            </Helmet>
            {children}
            <Footer />
        </main>
    )
}

export default Layout
