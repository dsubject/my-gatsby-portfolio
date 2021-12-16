import React from "react"
import { Link } from "gatsby"
import "./layout.css"

import InstagramIcon from "../assets/instagram.svg"
import LinkedInIcon from "../assets/linkedin.svg"
import GithubIcon from "../assets/github.svg"

const Footer = () => {
    return (
        <div>
            <a href="https://www.instagram.com/changingthesubject/" target="_blank"><img src={InstagramIcon} alt="instagram icon" /></a>{" "}
            <a href="https://www.linkedin.com/in/danielle-subject/" target="_blank"><img src={LinkedInIcon} alt="linkedin icon" /></a>{" "}
            <a href="https://github.com/dsubject/my-gatsby-blog" target="_blank"><img src={GithubIcon} alt="github icon" /></a>
        <div id="wcb" class="carbonbadge"></div>
        </div>

    )
}

export default Footer
