import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import './layout.css'

const SocialNetwork = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding: 2rem;

  border-right: 1px solid #eaeaea;
  width: 100px;
  height: 100vh;
`

const Content = styled.div`
  margin: 0 auto;
  max-width: 100vw;
  padding: 0 1.0875rem 1.45rem;
  padding-top:
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}

        <Container>
          <SocialNetwork>
            <p>Twitter</p>
            <p>IG</p>
            <p>dev.to</p>
          </SocialNetwork>
          <Content>{children}</Content>
        </Container>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
