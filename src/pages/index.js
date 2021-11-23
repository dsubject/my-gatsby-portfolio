import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

// styles
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#DDB8FF",
}
const paragraphStyles = {
  marginBottom: 48,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
  listStyleType: "none" 
}

const linkStyle = {
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%"
}

// data
const links = [
  {
    text: "Blog",
    url: "https://daniellesubject.com/blog",
    color: "#8954A8"
  },
  {
    text: "Publications",
    url: "https://daniellesubject.com/publications",
    color: "#1099A8"
  },
]

// markup
const IndexPage = () => {
  return (
    <Layout>
      <h1 style={headingStyles}>
        Dani Subject
        <br />
        <span style={headingAccentStyles}>Software developer</span>
        <span role="img" aria-label="Personal computer emoji">
          {" "}💻 
        </span>
      </h1>
      <p style={paragraphStyles}>
        Hi! I'm Danielle, but you can call me Dani. I'm a software developer, writer, and beekeeper (yup, you read that right) based out of Toronto. Welcome to my low-carbon website. 
      </p>
      <ul style={listStyles}>
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles }}>
            <span>
              [<Link
                style={linkStyle}
                to={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {link.text}
              </Link>]
            </span>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default IndexPage