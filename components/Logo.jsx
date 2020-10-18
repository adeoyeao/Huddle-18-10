import React from "react"
import styles from "../styles/components/logo.module.scss"

const Logo = (props) => {
      return (
            <div className={styles.logo}>
                  <img src={`/images/logo-${props.type}.svg`} alt="Huddle Logo"/>
            </div>
      )
}

export default Logo