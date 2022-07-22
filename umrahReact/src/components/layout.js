import React from "react"
import Header from "./Header"
import Footer from "./Footer"
// import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <Header/>
      <main className="container" style={{height: "80vh"}}>
        {children}
      </main>
      <Footer/>
    </>
  )
}



export default Layout