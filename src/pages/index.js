import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

// styles
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320
}
const headingAccentStyles = {
  color: '#DDB8FF'
}
const paragraphStyles = {
  marginBottom: 48
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

// data
const links = [
  {
    text: 'Blog',
    url: 'https://changingthesubject.ca',
    color: '#DDB8FF'
  },
  {
    text: 'Green Software Resources',
    url: 'https://daniellesubject.com/resources',
    color: '#DDB8FF',
    icon: '🌱',
    alt: 'seedling emoji'
  },
  {
    text: 'Resumé',
    url: 'https://daniellesubject.com/resume',
    color: '#DDB8FF'
  },
  {
    text: 'From the Archives',
    url: 'https://daniellesubject.com/archives',
    color: '#DDB8FF'
  }
]

// markup
const IndexPage = () => {
  return (
    <Layout title='Portfolio' image='/homeBanner.jpeg'>
      <h1 style={headingStyles}>
        Dani Subject
        <br />
        <span style={headingAccentStyles}>Software developer</span>
        <span role='img' aria-label='Personal computer emoji'>
          {' '}
          💻
        </span>
      </h1>
      <p style={paragraphStyles}>
        Hi! I'm Danielle, but you can call me Dani. I'm a software developer
        with a special interest in creating a greener web. Welcome to my
        low-carbon website.
      </p>
      <p>This site was built using GatsbyJS and is hosted by Netlify.</p>
      <ul style={listStyles}>
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles }}>
            <span>
              [{' '}
              <Link
                style={{ verticalAlign: '5%', color: link.color }}
                to={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {link.text}
              </Link>
              {link.icon ? (
                <span role='img' aria-label={link.alt}>
                  {' ' + link.icon}
                </span>
              ) : (
                ' '
              )}
              ]
            </span>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default IndexPage
