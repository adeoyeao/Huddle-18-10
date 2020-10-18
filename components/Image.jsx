import React from "react"
import styles from "../styles/components/image.module.scss"
import style from "../styles/layouts/about.module.scss"

const Image = (props) => {
      return (
            <div className={!props.illustration ? styles.image : style.illustration}>
                  <img src={`/images/${props.url}.svg`} alt={props.description}/>
            </div>
      )
}

export default Image