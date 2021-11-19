import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/post-link"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
}

const headingAccentStyles = {
  color: "#c39eff",
}

const blurbStyles = {
  display: 'flex',
  justifyContent: 'center',
  paddingBottom: 20,
  maxWidth: '60%',
  marginTop: 0
}

const Blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <h1 style={headingStyles}>
          <span style={headingAccentStyles}>Changing the Subject</span>
        </h1>
        <p style={blurbStyles}>Named after a column she used to write at the University of Guelph's student newspaper, Changing the Subject is a blog written by Danielle Subject. Her posts explore (but are not limited to) tech, the environment, and mental health.</p>
      </div>
      <div>{Posts}</div>
    </Layout>
  )
}

export default Blog

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