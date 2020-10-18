import React from "react"
import Button from "./Button"
import styles from "../styles/layouts/subscribe.module.scss"

const Subscribe = (props) => {
return (
            <section className={styles.subscribe}>
                 <div>
            <h2>Ready To Build Your Community?</h2>
            <Button type="primary" />
            </div>
      </section>
)
}

export default Subscribe