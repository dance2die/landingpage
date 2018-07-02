import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import get from 'lodash/get'

import Layout from '../../components/layout'
import { HomeLink } from '../../components/Links'
import ErrorBoundary from '../../components/ErrorBoundary'

const ExcerptPost = ({ node }) => {
  const slug = node.frontmatter.path
  const title = get(node, 'frontmatter.title') || slug
  return (
    <div key={slug}>
      <h3 style={{ marginBottom: '1rem' }}>
        <Link style={{ boxShadow: 'none' }} to={slug}>
          {title}
        </Link>
      </h3>
      <small>{node.frontmatter.date}</small>
      <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
      <hr />
    </div>
  )
}

const StyledExcerptPost = styled(ExcerptPost)`
  letter-spacing: 1px;
`

class BlogIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout>
        <ErrorBoundary>
          <HomeLink>Back to Home</HomeLink>
          {posts.map(({ node }) => (
            <StyledExcerptPost key={node.frontmatter.path} node={node} />
          ))}
        </ErrorBoundary>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
