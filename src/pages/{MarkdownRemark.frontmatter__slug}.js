import React from "react"
import { graphql, Link } from "gatsby"
import "../components/layout.css"
import Layout from "../components/layout"
import Img from "gatsby-image"

const containerStyle = {
  color: 'rgba(255, 255, 255, 0.88)',
  padding: 96,
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '42rem',
  marginRight: 'auto',
  marginLeft: 'auto'
}

const headerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const subheaderStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 50,
  fontSize: '0.83255rem'
}

const contentContainer = {
  fontSize: '1rem',
  lineHeight: "1.75"
}

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
    <Link to="/blog">blog</Link>
    <div style={containerStyle} className="blog-post-container">
      <div className="blog-post">
        <h1 style={headerStyle}>{frontmatter.title}</h1>
        <p style={subheaderStyle}>{frontmatter.date}</p>
        { frontmatter.featuredImgAlt ? 
          <Img fluid={frontmatter.featuredImage.childImageSharp.fluid} alt={frontmatter.featuredImgAlt} loading="lazy" /> : null
        }
        <div
          style={contentContainer}
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        featuredImgAlt
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`