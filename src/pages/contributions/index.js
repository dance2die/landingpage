import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../../components/layout'
import { HomeLink, InternalLink } from '../../components/Links'
import { Excerpt, ContributionsContainer } from '../../components/Contributions'
import ErrorBoundary from '../../components/ErrorBoundary'

const ExcerptPost = ({ node }) => {
  const slug = node.frontmatter.path
  const title = get(node, 'frontmatter.title') || slug
  return (
    <div>
      <h3 style={{ marginBottom: '1rem' }}>
        <InternalLink to={slug}>{title}</InternalLink>
      </h3>
      <small>{node.frontmatter.date}</small>
      <Excerpt dangerouslySetInnerHTML={{ __html: node.excerpt }} />
    </div>
  )
}

class BlogIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout>
        <ErrorBoundary>
          <ContributionsContainer>
            <HomeLink>Back to Home</HomeLink>
            {posts.map(({ node }) => (
              <ExcerptPost key={node.frontmatter.path} node={node} />
            ))}
          </ContributionsContainer>
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
