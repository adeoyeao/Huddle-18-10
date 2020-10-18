import React from "react"
import styles from "../styles/components/contact.module.scss"

const Contact = (props) => {
      return (
            <div className={styles.contact}>
                  <img src={`/images/icon-${props.type}.svg`} alt={`${props.type} icon`} />
                  <p style={{color: "white"}}>{props.type === "phone" ? 
                  "Phone: +1-543-123-4567" :
                  "admin@huddle.com" }
                  </p>
            </div>
      )
}

export default Contact