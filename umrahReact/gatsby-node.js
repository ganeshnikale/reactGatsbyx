
exports.createPages = async ({ actions: { createPage }, graphql }) => {
    const data = await graphql(`
      {
        allMarchJson {
          edges {
            node {
              slug
            }
          }
        }
      }
    `)
  
    if (data.errors) {
      console.log("Error retrieving data", data.errors)
      return
    }
  
    const merchTemplate = require.resolve("./src/templates/MerchPage.js")
  
    data.data.allMarchJson.edges.forEach(edge => {
      createPage({
        path: `/merch/${edge.node.slug}/`,
        component: merchTemplate,
        context: {
          slug: edge.node.slug,
        },
      })
    });

    const packageDetails = await graphql(`{
      allPackagesJson {
        edges {
          node {
            destinatio
            duration {
              packageName
              details {
                hotelName
              }
            }
          }
        }
      }
    }`);
    
    packageDetails.data.allPackagesJson.edges.forEach( el => {
      createPage({
        path: `/packagePage/${el.node.destinatio}`,
        component: require.resolve('./src/components/destination.js'),
        context: {
          slug: el.node
        }

      })
    })
    

  }



  