import * as React from "react"
import InstagramIcon from "../assets/instagram.svg"
import LinkedInIcon from "../assets/linkedin.svg"
import GithubIcon from "../assets/github.svg"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql, Link } from "gatsby"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

// styles
const pageStyles = {
  color: 'var(--textNormal)',
  padding: 96,
  fontFamily: "'IBM Plex Mono', monospace",
}

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "var(--subtitle)",
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

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

// data
const links = [
  {
    text: "Blog",
    url: "http://localhost:8000/blog",
    color: "#8954A8"
  },
  {
    text: "Tutorial",
    url: "http://localhost:8000/testHome",
    color: "#E95800"
  },
  {
    text: "Publications",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    color: "#1099A8"
  },
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Helmet>
        <title>Dani Subject</title>
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300&display=swap" rel="stylesheet"/>
      </Helmet>
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label>
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            Dark mode
          </label>
        )}
      </ThemeToggler>
      <h1 style={headingStyles}>
        Dani Subject
        <br />
        <span style={headingAccentStyles}>Software developer</span>
        <span role="img" aria-label="Personal computer emoji">
          {" "}💻 
        </span>
      </h1>
      <p style={paragraphStyles}>
        Hi! I'm Danielle, but you can call me Dani. Welcome to my blog, Changing the Subject. I'm a writer, software developer and beekeeper (yup, you read that right) based out of Toronto. After losing my job in 2017, I realized I wasn't happy with the path that I was on, and I made the switch into software development. You can read a bit about that journey here. {" "}
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
      <img src={InstagramIcon} alt="instagram icon" />{" "}
      <img src={LinkedInIcon} alt="linkedin icon" />{" "}
      <img src={GithubIcon} alt="github icon" />
    </main>
  )
}

export default IndexPage