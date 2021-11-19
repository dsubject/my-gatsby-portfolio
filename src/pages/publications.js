import React from "react"
import { graphql, Link } from "gatsby"
import PostLink from "../components/post-link"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"

const headingStyles = {
  marginBottom: 64,
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

const navLinkStyle = {
    paddingBottom: 50
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
    url: "https://geekd-out.com/author/dsubject/",
    color: "#1099A8"
  },
  {
    text: "Medium",
    url: "https://medium.com/@DaniSubject",
    color: "#1099A8"
  },
]

const Publications = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
        <Link to="/">home</Link>
        <h1 style={headingStyles}>
            From the{" "}
            <span style={headingAccentStyles}>[Archives]</span>
        </h1>
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

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 150)
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