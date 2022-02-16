import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

import '../components/layout.css'

const headingStyles = {
  marginBottom: 64
}

const headingAccentStyles = {
  color: '#78E56C'
}

const listStyles = {
  marginBottom: 96,
  paddingLeft: 0
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
  listStyleType: 'none'
}

const linkStyle = {
  fontWeight: 'bold',
  fontSize: 16,
  verticalAlign: '5%',
  color: '#78E56C'
}

// list
const links = [
  {
    text: 'Green Software Foundation',
    url: 'https://greensoftware.foundation/'
  },
  {
    text: 'Principles of Green Software Engineering',
    url: 'https://principles.green/'
  },
  {
    text: 'The Carbon Footprint of Sending Data',
    url: 'https://observablehq.com/@mrchrisadams/carbon-footprint-of-sending-data-around'
  },
  {
    text: 'The Lean Web',
    url: 'https://leanweb.dev/ebook/intro/'
  },
  {
    text: 'Website Carbon Calculator',
    url: 'https://www.websitecarbon.com/'
  },
  {
    text: 'Designing Branch: Sustainable Interaction Design Principles',
    url:
      'https://branch.climateaction.tech/issues/issue-1/designing-branch-sustainable-interaction-design-principles/'
  },
  {
    text: 'Awesome Green Software (by the Green Software Foundation)',
    url: 'https://github.com/Green-Software-Foundation/awesome-green-software'
  },
  {
    text: 'How to Determine the Size of a Web Page',
    url: 'https://globalwarning.blog/determine-web-page-size/'
  },
  {
    text: 'Introduction to Green Computing for A Sustainable Future',
    url: 'https://geekflare.com/green-computing-for-sustainable-future/'
  }
]

const Resources = () => {
  return (
    <Layout title='Danielle Subject: Green Resources'>
      <Link to='/'>home</Link>
      <h1 style={headingStyles}>
        <span style={headingAccentStyles}>[Green Software Links]</span>
      </h1>
      <p>
        If you're interested in learning more about green software, I've put together a list of websites and articles below.
      </p>
      <ul style={listStyles}>
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles }}>
            <span>
              [
              <Link
                target='_blank'
                style={linkStyle}
                to={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {link.text}
              </Link>
              ]
            </span>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default Resources
