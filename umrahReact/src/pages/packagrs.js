import React from "react"
import {useStaticQuery, graphql } from "gatsby"




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
        <h1>abc</h1>
    )
}


export default Packagrs;