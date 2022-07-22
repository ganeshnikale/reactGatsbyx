import React from "react"
import {useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout";




const Packagrs = (props) => {
    const packageQuery = useStaticQuery(graphql `{
        allPackagesJson {
            edges {
              node {
                destinatio {
                  mumbai {
                    kawwal {
                      duration
                    }
                    sawwal {
                      duration
                    }
                  }
                  banglore {
                    kawwal {
                      duration
                    }
                    sawwal {
                      duration
                    }
                  }
                }
              }
            }
          }
    }`)
    
packageQuery.allPackagesJson.edges.forEach(element => {
    console.log(element.node.destinatio);
});

    return(
      <Layout>
        <h1>This is the About page</h1>
      </Layout>
    )
}


export default Packagrs;