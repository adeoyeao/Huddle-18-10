import React from "react"
import Button from "./Button"
import Logo from "./Logo"

import styles from "../styles/layouts/navbar.module.scss"

const Navbar = () => {
      return (
            <nav className={styles.navbar}>
            <Logo type="primary"/>
            <Button type="secondary"/>
            </nav>
      )
}

export default Navbar