import React from "react"
import Stat from "./Stat"
import styles from "../styles/layouts/statistics.module.scss"

const Statistics = () => {
      return (
            <section className={styles.statistics}>
                  <Stat url="communities" 
                        altdesc="Communities Icon" 
                        figure="1.4k+"
                        category="Communities Formed" 
                        className={styles.statBox}/>
                  <Stat url="speech-bubbles" 
                        altdesc="Messages Icon" 
                        figure="2.7m+"
                        category="Messages Sent" 
                        />
            </section>
      )
}

export default Statistics