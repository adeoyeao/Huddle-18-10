import React from "react"
import Button from "./Button"
import Image from "./Image"
import styles from "../styles/layouts/hero.module.scss"

const Hero = () => {
      return (
            <section className={styles.hero}>
                  <h1>Build The Community Your Fans Will Love</h1>
                  <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
                  <Button type="primary" />
                  <Image url="screen-mockups" description="Desktop and mobile screen mockups of Huddle" />
            </section>
      )
}

export default Hero