import React from "react"
import styles from "../styles/components/stat.module.scss"

const Stat = (props) => {
      return (
            <div className={styles.stat}>
                  <img src={`/images/icon-${props.url}.svg`} alt={props.altdesc}/>
                  <p className={styles.stat__figure}>{props.figure}</p>
                  <p>{props.category}</p>
            </div>
      )
}

export default Stat