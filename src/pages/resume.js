import * as React from "react"
import Layout from "../components/layout"
import resume from "../assets/danielle_subject_CV.pdf"

// styles
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#DDB8FF",
}

// markup
const ResumePage = () => {
  return (
    <Layout>
      <h1 style={headingStyles}>
        Dani Subject
        <br />
        <span style={headingAccentStyles}>Software developer</span>
        <span role="img" aria-label="Personal computer emoji">
          {" "}💻 
        </span>
      </h1>
      <p>I'm an English Major turned software developer. My main experience consists of full stack JavaScript development and native Android development in Kotlin, with frameworks such as ReactJS, React Native, and Angular. Currently, my interest lies in Blockchain development and sustainable IT.</p>
    <a href={resume} download>Download My Full CV</a>
      <h2>
        Professional Experience
      </h2>
      <h3>Software Developer, IBM</h3>
      <p>May 2019-Current</p>
      <ul>
        <li>Outlining and presenting green software concepts through the phases of the software development lifecycle</li>
        <li>Native Android development in Kotlin</li>
        <li>Implemented RESTful api data consumption using Retrofit</li>
        <li>Dev Ops: Implemented a Bamboo pipeline to ensure easy deployment
        for the client</li>
        <li>Led a full accessibility audit of Storybook UI components</li>
        <li>Integrated analytics tagging to track user interactions on a Storybook
        application using Angular</li>
        <li>Write unit tests to achieve client's desired coverage</li>
        <li>Led the integration for a remote cheque deposit SDK feature on multiple
        projects</li>
        <li>Work closely with QA testers to enforce accessibility standards</li>
        <li>Provide testing and defect support to clients</li>
        <li>Created an Android framework written in kotlin to meet client's needs for
        a resuable library</li>
        <li>Solely built a POC application in Android from the ground up</li>
        <li>Utilized Adobe Experience Manager Forms and Adobe Designer to build
        interactive forms for the client</li>
        <li>Tested crash rate of an SDK with custom logs using Firebase and
        Crashlytics</li>
      </ul>
      <h3>JavaScript Developer, Knockri</h3>
      <p>Jan 2019-May 2019</p>
      <ul>
        <li>A video assessment tool used to reduce unconscious bias during the hiring process.</li>
        <li>Implemented new features using WebRTC API</li>
        <li>Led accessibility audit and implemented accessible features to meet legal criteria</li>
        <li>Stack: JavaScript, NodeJS, ReactJS, SQL, ExpressJS</li>
      </ul>
      <h3>React Native Developer, Boro</h3>
      <p>Jan 2018-Nov 2018</p>
      <ul>
        <li>Developed and implemented new features</li>
        <li>Collaborated in an agile environment</li>
        <li>Stack: React Native, NodeJS, SQL, ExpressJS</li>
      </ul>
    <h3>Web Development Teaching Assistant, Brainstation</h3>
      <p>Apr 2018-Jun 2018</p>
      <ul style={{paddingBottom: 20}}>
        <li>Responsible for educating a MERN Stack curriculum, as well as PostgreSQL, Git, and deployment flow</li>
        <li>Led code-along demonstrations for students</li>
        <li>Provided one-on-one mentoring to students</li>
      </ul>
    </Layout>
  )
}

export default ResumePage