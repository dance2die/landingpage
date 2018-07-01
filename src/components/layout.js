import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled, { injectGlobal } from 'styled-components'

import { HeaderLink } from '../components/Links'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono');
 
  body {
    padding: 0;
    margin: 0;
    letter-spacing: 4px;
    font-family: Roboto mono, monospace;
  }

  a {
    text-decoration: none;
    color: black;
  }
`

const HeaderContainer = styled.header`
  border-right: 1px solid #eaeaea;
  height: 100vh;
  width: 100px;
`

const Header = styled.h1`
  width: 100vw;
  font-size: 2rem;
  padding: 1rem;

  color: #000

  transform: rotate(-90deg) translateX(-250px) translateY(10px);
  transform-origin: top left;
`

const Content = styled.div`
  margin: 0 auto;
  max-width: 100vw;
  width: 100%;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

const SocialNetworkContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;

  padding: 0 6vw;
`

const SocialNetworkItem = styled.li`
  margin-right: 2rem;
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
              <HeaderLink to="/">Sung Kim</HeaderLink>
            </Header>
          </HeaderContainer>
          <ContentContainer>
            <Content>{children}</Content>
            <SocialNetworkContainer>
              <SocialNetworkItem>Twitter</SocialNetworkItem>
              <SocialNetworkItem>IG</SocialNetworkItem>
              <SocialNetworkItem>dev.to</SocialNetworkItem>
            </SocialNetworkContainer>
          </ContentContainer>
        </Container>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
