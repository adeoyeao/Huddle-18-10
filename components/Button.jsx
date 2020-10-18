import React, {useState} from "react"
import Modal from "./Modal"
import styles from "../styles/components/button.module.scss"

const Button = (props) => {
      const [visible, setVisible] = useState(false)

      const handleSubmit = () => {
            setVisible(!visible)
      }

      return (
            <div>
            <button className={`${styles[`btn`]} ${styles[`btn--${props.type}`]}`}
            onClick={props.type === "primary" || props.type === "secondary" ? handleSubmit : null}>
                  {props.type === "primary" ? "Get Started for Free" : 
                  props.type === "secondary" ? "Try It Free" : "Subscribe"}
            </button>
                        {visible && <Modal handleClick={handleSubmit}/>}
            </div>
      )
}

export default Button