import React from "react"
import layoutStyle from "./Layout.module.scss"
import Header from "../Header/Header"

export default function Layout(props) {
  return (
    <div className={layoutStyle.container}>
      <Header />
      {props.children}
    </div>
  )
}
