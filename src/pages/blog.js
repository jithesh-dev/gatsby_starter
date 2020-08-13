import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout/Layout"

export default function BlogPage() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <Layout>
      <h1>Blogggg</h1>

      <ol>
        {data.allMarkdownRemark.edges.map(edge => (
          <li key={edge.node.frontmatter.title}>
            {edge.node.frontmatter.title}
          </li>
        ))}
      </ol>
    </Layout>
  )
}
