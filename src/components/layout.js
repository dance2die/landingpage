import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { Link } from 'gatsby'

import './layout.css'

const HeaderContainer = styled.header`
  border-right: 1px solid #eaeaea;
  height: 100vh;
  width: 100px;
`

const Header = styled.h1`
  width: 100vw;
  font-size: 1.5rem;

  transform: rotate(-90deg) translateX(-22%) translateY(200%);
  transform-origin: bottom left;
`

const HeaderLink = styled.a.attrs({
  href: props => props.to,
})`
  text-decoration: none;
`

const Content = styled.div`
  margin: 0 auto;
  max-width: 100vw;
  width: 100%;
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
          <HeaderContainer>
            <Header>
              <HeaderLink to="/">Hi, I am Sung Kim</HeaderLink>
            </Header>
          </HeaderContainer>
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
