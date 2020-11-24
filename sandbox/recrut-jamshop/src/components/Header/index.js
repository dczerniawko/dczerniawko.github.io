import React from "react"
import { Link } from "gatsby"

import Banner from "../Popup"
import containerStyles from "./container.module.css"

export default function Header() {
  return (
    <header className={containerStyles.header}>
      <Link className={containerStyles.link} to="/">
        <a className={containerStyles.a}>JAM SHOP</a>
      </Link>
      <div className={containerStyles.right}>
        <Banner />
        <button className={containerStyles.btn}>
          <p className={containerStyles.arrow}>&#x25BC;</p>
        </button>
      </div>
    </header>
  )
}
