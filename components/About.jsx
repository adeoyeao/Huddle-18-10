import React from "react"
import Image from "./Image"
import styles from "../styles/layouts/about.module.scss"

const About = (props) => {
      const version = `about--${props.version}`

      return (
            <section className={`${styles.about} ${styles[version]}`}>
                  <Image url={props.url} alt={props.description} illustration="true"/>
                  <div>
                  <h3>{props.title}</h3>
                  <p>{props.copy}</p>
                  </div>
            </section>
      )
}

export default About