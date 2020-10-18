import React from "react"
import Newsletter from "./Newsletter"
import Logo from "./Logo"
import Contact from "./Contact"
import styles from "../styles/layouts/footer.module.scss"

const Footer = () => {
      const currentYear = new Date().getFullYear()
      return (
            <footer className={styles.footer}>
                  <Newsletter />
                  <div>
                  <Logo type="secondary" />
                  <p style={{color: "white"}}>Copyright &#169; {currentYear}</p>
                  </div>
                  <Contact type="phone" />
                  <Contact type="email" />
            </footer>
      )
}

export default Footer