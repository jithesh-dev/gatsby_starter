import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import style from "./Header.module.scss"

export default function Header() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header className={style.header}>
      <h3 className={style.logo}>{data.site.siteMetadata.title}</h3>
      <nav className={style.nav}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  )
}
