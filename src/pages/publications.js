import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

import "../components/layout.css"

const headingStyles = {
  marginBottom: 64,
}

const headingAccentStyles = {
  color: "#DDB8FF",
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

// list
const links = [
  {
    text: "Exclaim!",
    url: "https://exclaim.ca/writers/danielle_subject",
    color: "#8954A8"
  },
  {
    text: "The Ontarion",
    url: "https://theontarion.com/author/danielle-subject/",
    color: "#1099A8"
  },
  {
    text: "Geek'D-Out!",
    url: "https://indie88.com/author/danielles/",
    color: "#1099A8"
  },
  {
    text: "Indie88 FM",
    url: "https://geekd-out.com/author/dsubject/",
    color: "#1099A8"
  },
  {
    text: "Medium",
    url: "https://medium.com/@DaniSubject",
    color: "#1099A8"
  },
]

const Publications = () => {

  return (
    <Layout>
        <Link to="/">home</Link>
        <h1 style={headingStyles}>
            From the{" "}
            <span style={headingAccentStyles}>[Archives]</span>
        </h1>
        <p>Before I became a software developer, I was a writer. Below is a list of publications I once wrote for — everything from album and concert reviews to interviews with local artists.</p>
        <ul style={listStyles}>
            {links.map(link => (
            <li key={link.url} style={{ ...listItemStyles }}>
                <span>
                [<Link
                    target="_blank"
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

export default Publications
