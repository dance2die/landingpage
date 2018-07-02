import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import get from 'lodash/get'

import Layout from '../../components/layout'
import { HomeLink, InternalLink, ExternalLink } from '../../components/Links'
import ErrorBoundary from '../../components/ErrorBoundary'

const PostLink = styled(InternalLink)`
  box-shadow: none;
`

const Excerpt = styled.p`
  letter-spacing: 1px;
`

const BlogIndexContainer = styled.div`
  padding: 1.1rem 5vw;
  width: 65vw;
`

const ExcerptPost = ({ node }) => {
  const slug = node.frontmatter.path
  const title = get(node, 'frontmatter.title') || slug
  return (
    <div>
      <h3 style={{ marginBottom: '1rem' }}>
        <PostLink to={slug}>{title}</PostLink>
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
          <BlogIndexContainer>
            <HomeLink>Back to Home</HomeLink>
            {posts.map(({ node }) => (
              <ExcerptPost key={node.frontmatter.path} node={node} />
            ))}
          </BlogIndexContainer>
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
