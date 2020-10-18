import React from "react"
import FormNewsletter from "./Form--Newsletter"
import styles from "../styles/components/newsletter.module.scss"

const Newsletter = () => {
      return (
            <div className={styles.newsletter}>
                  <h3 style={{color: "white"}}>Newsletter</h3>
                  <p style={{color: "white"}}>To receive tips on how to grow your community, sign up to our weekly newsletter. We'll never send you spam or pass on your email address.</p>
                  <FormNewsletter />
            </div>
      )
}

export default Newsletter