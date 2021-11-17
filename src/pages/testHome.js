import * as React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql, Link } from "gatsby"
import PostLink from "../components/post-link"
import  "../components/layout.css"

import InstagramIcon from "../assets/instagram.svg"
import LinkedInIcon from "../assets/linkedin.svg"
import GithubIcon from "../assets/github.svg"
import blankProfile from "../assets/no_profile.png"

// styles
const pageStyles = {
  color: "#ffffff",
  padding: 96,
  fontFamily: "'IBM Plex Mono', monospace",
}

const headingStyles = {
  marginTop: 0,
  maxWidth: 320,
  color: "#f056c7"
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  paddingLeft: 0,
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap'
}
const listItemStyles = {
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
  listStyleType: "none" 
}

const linkStyle = {
  fontSize: 16,
  verticalAlign: "top"
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

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const rowStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  width: '100%'
}

const columnStyle = {
  display: 'flex',
  flexDirection: 'column',
  flexBasis: '100%',
  flex: 1,
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
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    color: "#E95800"
  },
  {
    text: "Publications",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    color: "#1099A8"
  },
]

// markup
const TestHome = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
    const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

    console.log("time " + new Date().getTime())
  return (
    <main style={pageStyles}>
      <Helmet>
        <title>Dani Subject</title>
      </Helmet>
      <div style={rowStyle}>
        <div style={columnStyle}>
            <h1 style={headingStyles}>
                Dani Subject
            </h1>
            <div style={{ display: 'flex', flexDirection: 'row'}}>
            <img src={blankProfile} alt="blank profile image" style={{ height: '150px', width: '150px', paddingRight: 10}} />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <span>Software developer</span>
                <br/>
                <span>
                Last login:<br/>1 hour ago
                </span>
            </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', marginTop: 10, flexWrap: 'wrap'}}>
            <p style={{marginRight: 10}}>View My:</p>
            <ul style={listStyles}>
                {links.map(link => (
                <li key={link.url} style={{ ...listItemStyles }}>
                    <span>
                    <Link
                        style={linkStyle}
                        to={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
                    >
                        {link.text}
                    </Link>
                    <span style={{ fontSize: 16, verticalAlign: "top", marginRight: 5, marginLeft: 5 }}>|</span>
                    </span>
                </li>
                ))}
            </ul>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: 10 }}>
                <img src={InstagramIcon} alt="instagram icon" style={{ padding: 2 }} />
                <img src={LinkedInIcon} alt="linkedin icon" style={{ padding: 2 }} />
                <img src={GithubIcon} alt="github icon" style={{ padding: 2 }} />
            </div>
        </div>
        <div style={{ ...columnStyle, justifyContent: 'space-between', overflow: 'auto' }}>
            <span style={{ paddingBottom: 10}}>Dani's latest blog entries [<Link style={linkStyle}>View Blog</Link>]</span>
            <div>{Posts}</div>
            <div style={{ borderStyle: 'solid', padding: 5, borderColor: '#f056c7'}}>
                <div>About me</div><br/>
                <span>Hi! I'm Danielle, but you can call me Dani. Welcome to my blog, Changing the Subject. I'm a writer, software developer and beekeeper (yup, you read that right) based out of Toronto. After losing my job in 2017, I realized I wasn't happy with the path that I was on, and I made the switch into software development. You can read a bit about that journey here. {" "}</span>
            </div>
        </div>
      </div>
    </main>
  )
}

export default TestHome

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`
