import React from "react"
import { Link } from "gatsby"
import styles from "./index.module.scss"

export default () => (
  <ul className={styles.menu}>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
  </ul>
)
