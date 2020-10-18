import React, {useState} from "react"
import styles from "../styles/components/modal.module.scss"

const Modal = (props) => {
      const [valid, setValid ] = useState({
            username: false,
            email: false
      })

      const [input, setInput] = useState({
            username: "",
            email: ""
      })

      const nameStyle = {
            border: "2px solid red"
      }

      const emailStyle = {
            border: "2px solid red"
      }

      valid.username && (nameStyle.border = "2px solid green")
      valid.email && (emailStyle.border = "2px solid green")

      const handleClick = () => {
            props.handleClick()
      }

      const handleChange = (e) => {
            const {name, value} = e.target
            const emailRegex = /\w{2,}\@\w{2,}\.\w{2,}/ig
            const regex = /\w{2,}/ig

            setInput(prev => {
                  return {
                        ...prev,
                        [name]: value
                  }
            })

            name === "username" ? (
                  regex.test(input.username) ? setValid(prev => { return {
                        ...prev,
                        username: true
                  }}) : setValid(prev => { return {
                        ...prev,
                        username: false
                  }})
            ) : (
                  emailRegex.test(input.email) ? setValid(prev => { return {
                        ...prev,
                        email: true
                  }}) : setValid(prev => {
                        return {
                              ...prev,
                              email: false
                        }
                  })
            )
      }

      const handleSubmit = (e) => {
            !valid.username || !valid.email ? e.preventDefault() : setTimeout(() => handleClick(), 1000)
      }

      return (
            <section className={styles.modal}>
                  <button onClick={handleClick} className={styles.btnclose}></button>
                  <form method="POST" action="/register">
                        <input type="text" placeholder="Phoebe Bridgers" name="username" value={input.username} onChange={handleChange}style={nameStyle}/>
                        <input type="text" placeholder="p.bridgers@music.com" name="email" value={input.email} onChange={handleChange}
                        style={emailStyle}/>
                        <div className="form__line"></div>
                        <button onClick={handleSubmit}>Register Now</button>
                  </form>
            </section>
      )
}

export default Modal