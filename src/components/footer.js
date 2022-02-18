import React from 'react'
import './layout.css'

import InstagramIcon from '../assets/instagram.svg'
import LinkedInIcon from '../assets/linkedin.svg'
import GithubIcon from '../assets/github.svg'

const Footer = () => {
  return (
    <div>
      <a href='https://twitter.com/DaniSubject' target='_blank'>
        <img src={InstagramIcon} alt='twitter icon' />
      </a>{' '}
      <a href='https://www.linkedin.com/in/danielle-subject/' target='_blank'>
        <img src={LinkedInIcon} alt='linkedin icon' />
      </a>{' '}
      <a href='https://github.com/dsubject/my-gatsby-portfolio' target='_blank'>
        <img src={GithubIcon} alt='github icon' />
      </a>
    </div>
  )
}

export default Footer
