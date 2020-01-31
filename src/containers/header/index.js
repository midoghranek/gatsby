import React from "react"
import styles from "./index.module.css"
import PageTitle from "../../components/pageTitle"
import Menu from "../../components/menu"

export default props => (
  <header className={styles.header}>
    <PageTitle headerText={props.pageName}></PageTitle>
    <Menu />
  </header>
)
