import React from "react"
import { Link } from "gatsby"

import InstagramIcon from "../assets/instagram.svg"
import LinkedInIcon from "../assets/linkedin.svg"
import GithubIcon from "../assets/github.svg"

const Footer = () => {
    return (
        <div>
            <Link to="https://www.instagram.com/changingthesubject/" target="_blank"><img src={InstagramIcon} alt="instagram icon" /></Link>{" "}
            <Link to="https://www.linkedin.com/in/danielle-subject/" target="_blank"><img src={LinkedInIcon} alt="linkedin icon" /></Link>{" "}
            <Link to="https://github.com/dsubject/my-gatsby-blog" target="_blank"><img src={GithubIcon} alt="github icon" /></Link>
        </div>
    )
}

export default Footer
