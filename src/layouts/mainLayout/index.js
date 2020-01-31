import React from "react"
import Header from "../../containers/header"
import styles from "./index.module.scss"

export default ({ children }) => (
  <div class="page">
    <Header pageName="Ghraniko" />
    <div className={styles.container}>{children}</div>
  </div>
)
