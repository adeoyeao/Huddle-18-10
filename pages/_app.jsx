import { loadGetInitialProps } from "next/dist/next-server/lib/utils"
import React from "react"
import App from "next/app"
import "../styles/main.scss"

const MyApp = ({Component, pageProps}) => {
      return (
            <Component {...pageProps} />
      )
}

export default MyApp