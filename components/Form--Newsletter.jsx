import React, {useState} from "react"
import Button from "./Button"
import styles from "../styles/components/form--newsletter.module.scss"

const FormNewsletter = () => {
      const [ valid, setValid ] = useState(false)
      const [ input, setInput ] = useState("")

      const inputStyle = {
            border: "2px solid red"
      }
      valid && (inputStyle.border = "2px solid green")

      const handleChange = (e) => {
            const value = e.target.value
            const regex = /\w{2,}\@\w{2,}\./ig
            setInput(value)
            regex.test(value) ? setValid(true) : setValid(false)
      }

      const handleSubmit = (e) => {
            !valid && e.preventDefault()
      }

      return (
            <form method="POST" action="/email" className={styles.form} onSubmit={handleSubmit}> 
                  <input type="text" value={input} onChange={handleChange} placeholder="elon.musk@gmail.com" style={inputStyle} name="email"/>
                  <Button type="tertiary" />
            </form>
      )
}

export default FormNewsletter