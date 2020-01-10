/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import Header from "../header/header"
import styles from "./layout.module.css"

interface LayoutProps {
  children?: React.ReactNode
}

const Layout: React.FunctionComponent = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <div className={styles["container"]}>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout