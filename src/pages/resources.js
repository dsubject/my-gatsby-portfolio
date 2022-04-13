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

const subtitleStyle = {
  fontSize: 25,
  textDecoration: 'underline'
}

const listStyles = {
  marginBottom: 96,
  paddingLeft: 0
}

const listItemStyles = {
  fontSize: 24,
  maxWidth: 560,
  listStyleType: 'none'
}

const linkStyle = {
  fontSize: 16,
  verticalAlign: '5%',
  color: '#78E56C'
}

const linkTextStyle = {
  fontSize: 16,
  verticalAlign: '5%',
  marginBottom: 0
}

// list

const main = [
  {
    text: 'Green Software Foundation',
    url: 'https://greensoftware.foundation/'
  },
  {
    text: 'Principles of Green Software Engineering',
    url: 'https://principles.green/'
  },
  {
    text: 'Awesome Green Software (by the Green Software Foundation)',
    url: 'https://github.com/Green-Software-Foundation/awesome-green-software'
  },
  {
    text: 'Introduction to Green Computing for A Sustainable Future',
    url: 'https://geekflare.com/green-computing-for-sustainable-future/'
  }
]

const greenDesign = [
  {
    text: 'Designing Branch: Sustainable Interaction Design Principles',
    url:
      'https://branch.climateaction.tech/issues/issue-1/designing-branch-sustainable-interaction-design-principles/'
  },
  {
    text: '17 Ways to make your website more energy efficient',
    url: 'https://www.wholegraindigital.com/blog/website-energy-efficiency/'
  },
  {
    text: 'What is sustainable web design?',
    url: 'https://sustainablewebdesign.org/'
  },
  {
    text: 'Reduce the carbon emissions of your website',
    url:
      'https://climateaction.tech/actions/reduce-the-carbon-emissions-of-your-website/'
  },
  {
    text: 'How to Determine the Size of a Web Page',
    url: 'https://globalwarning.blog/determine-web-page-size/'
  },
  {
    text: 'Static Sites: A Secret Weapon for Fighting Climate Change',
    url: 'https://www.gatsbyjs.com/blog/static-sites-fight-climate-change/'
  },
  {
    text: 'The sustainable.dev',
    url: 'https://the-sustainable.dev/'
  }
]

const directories = [
  {
    text: 'Browse sustainable UX/UI designs ',
    url: 'https://greentheweb.com/best-practices/'
  },
  {
    text:
      'A showcase of websites that practice low-carbon web design and development',
    url: 'https://lowwwcarbon.com/'
  },
  {
    text: 'Awesome Green Software (by the Green Software Foundation)',
    url: 'https://github.com/Green-Software-Foundation/awesome-green-software'
  },
  {
    text:
      'Directory of lightweight websites to inspire designers and developers',
    url: 'https://www.lowww.directory/'
  }
]

const eBooks = [
  {
    text: 'The Lean Web',
    url: 'https://leanweb.dev/ebook/intro/'
  }
]

const tools = [
  {
    text: 'Website Carbon Calculator',
    url: 'https://www.websitecarbon.com/'
  },
  {
    text:
      "EcoPing: tracking the impact of the world's largest company websites",
    url: 'https://ecoping.earth/'
  },
  {
    text: 'EcoGrader',
    url: 'https://ecograder.com/'
  },
  {
    text: 'Digital Beacon',
    url: 'https://digitalbeacon.co/'
  },
  {
    text: 'Cabin',
    url: 'https://withcabin.com/'
  },
  {
    text: 'The Green Web Foundation',
    url: 'https://www.thegreenwebfoundation.org/'
  },
  {
    text: 'Image Optimization: TinyPNG',
    url: 'https://tinypng.com/'
  },
  {
    text: 'How Green Are Your Third Party Resources?',
    url: 'https://aremythirdpartiesgreen.com/'
  }

]

const Resources = () => {
  return (
    <Layout
      title='Green Computing'
      desc='A collection of green computing resources'
      image='/greenSoftware.png'
    >
      <Link to='/'>home</Link>
      <h1 style={headingStyles}>
        <span style={headingAccentStyles}>[Green Computing Resources]</span>
      </h1>
      <p style={subtitleStyle}>Green Software</p>
      <ul style={listStyles}>
        {main.map(link => (
          <li key={link.url} style={{ ...listItemStyles }}>
            <p style={linkTextStyle}>{link.text}:</p>
            <span>
              <Link
                target='_blank'
                style={linkStyle}
                to={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {link.url}
              </Link>
            </span>
          </li>
        ))}
      </ul>
      <p style={subtitleStyle}>Sustainable Web Design</p>
      <ul style={listStyles}>
        {greenDesign.map(link => (
          <li key={link.url} style={{ ...listItemStyles }}>
            <p style={linkTextStyle}>{link.text}:</p>
            <span>
              <Link
                target='_blank'
                style={linkStyle}
                to={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {link.url}
              </Link>
            </span>
          </li>
        ))}
      </ul>
      <p style={subtitleStyle}>eBooks</p>
      <ul style={listStyles}>
        {eBooks.map(link => (
          <li key={link.url} style={{ ...listItemStyles }}>
            <p style={linkTextStyle}>{link.text}:</p>
            <span>
              <Link
                target='_blank'
                style={linkStyle}
                to={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {link.url}
              </Link>
            </span>
          </li>
        ))}
      </ul>
      <p style={subtitleStyle}>Directories</p>
      <ul style={listStyles}>
        {directories.map(link => (
          <li key={link.url} style={{ ...listItemStyles }}>
            <p style={linkTextStyle}>{link.text}:</p>
            <span>
              <Link
                target='_blank'
                style={linkStyle}
                to={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {link.url}
              </Link>
            </span>
          </li>
        ))}
      </ul>
      <p style={subtitleStyle}>Tools</p>
      <ul style={listStyles}>
        {tools.map(link => (
          <li key={link.url} style={{ ...listItemStyles }}>
            <p style={linkTextStyle}>{link.text}:</p>
            <span>
              <Link
                target='_blank'
                style={linkStyle}
                to={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {link.url}
              </Link>
            </span>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default Resources
