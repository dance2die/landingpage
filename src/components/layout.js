import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled, { injectGlobal } from 'styled-components'

import { HeaderLink, ExternalLink } from '../components/Links'
import {
  CreditBlogEmoji,
  CreditCreationsEmoji,
  CreditContributionsEmoji,
} from './Emojis'

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

  @media (min-width: 700px) {
    height: 100vh;
    width: 100px;
  }

  @media (max-width: 699px) {
    border-bottom: 1px solid #eaeaea;
  }
`

const Header = styled.h1`
  padding: 1rem;

  color: #000;

  @media (max-width: 699px) {
    font-size: 1.2rem;
  }

  @media (min-width: 700px) {
    width: 100vw;
    font-size: 2rem;
    transform: rotate(-90deg) translateX(-250px) translateY(10px);
    transform-origin: top left;
  }
`

const Content = styled.div`
  margin: 0 auto;
  /* padding: 1.1rem 5vw; */

  max-width: 100vw;
  width: 100%;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  max-width: 100vw;
`

const Container = styled.div`
  display: flex;

  @media (min-width: 700px) {
    flex-direction: row;
  }

  @media (max-width: 699px) {
    flex-direction: column;
  }
`

const SocialNetworkContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  padding: 6vh 6vw;
  height: 100%;

  background-color: #f8f8f8;
  border-top: 1px solid #eaeaea;
`

const SocialNetworkItems = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const SocialNetworkItem = styled.li`
  margin-right: 2rem;
  padding: 1rem;
`

const SocialLink = styled(ExternalLink)`
  color: #666;

  &:hover {
    border-bottom: 1px dotted #000;
  }
`

const CreditContainer = styled.div`
  @media (max-width: 699px) {
    border-top: 1px solid rgb(0, 0, 0, 0.1);
  }
`

const Credits = styled.ul`
  list-style: none;
  letter-spacing: 1px;
  padding: 1rem;
`

const Credit = styled.li`
  display: flex;
  align-items: center;

  @media (min-width: 700px) {
    font-size: 0.7rem;
  }

  @media (max-width: 699px) {
    font-size: 0.45rem;
    flex-wrap: wrap;
    letter-spacing: 0;
  }
`

// const CreditTitle = styled.li`
const CreditTitle = styled(Credit)`
  @media (min-width: 700px) {
    font-size: 1rem;
  }

  @media (max-width: 699px) {
    font-size: 0.65rem;
    /* flex-direction: column; */
  }
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
            { name: 'description', content: 'Hi, I am Sung Kim' },
            { name: 'keywords', content: 'Sung, Home, Landing Page' },
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
              <SocialNetworkItems>
                <SocialNetworkItem>
                  <SocialLink href="https://twitter.com/slightedgecoder">
                    Twitter
                  </SocialLink>
                </SocialNetworkItem>
                <SocialNetworkItem>
                  <SocialLink href="https://dev.to/dance2die">
                    dev.to
                  </SocialLink>
                </SocialNetworkItem>
                <SocialNetworkItem>
                  <SocialLink href="https://stackoverflow.com/users/4035/sung?tab=profile">
                    StackOverflow
                  </SocialLink>
                </SocialNetworkItem>
              </SocialNetworkItems>
              <CreditContainer>
                <Credits>
                  <CreditTitle>SVG Image Credits</CreditTitle>
                  <Credit>
                    <CreditBlogEmoji />
                    <SocialLink href="https://thenounproject.com/search/?q=creations&i=1279581">
                      Writing by krishna from the Noun Project
                    </SocialLink>
                  </Credit>
                  <Credit>
                    <CreditCreationsEmoji />
                    <SocialLink href="https://thenounproject.com/search/?q=creations&i=516844">
                      creativity by Becris from the Noun Project
                    </SocialLink>
                  </Credit>
                  <Credit>
                    <CreditContributionsEmoji />
                    <SocialLink href="https://thenounproject.com/search/?q=contributions&i=1736176">
                      teamwork by vectoriconset10 from the Noun Project
                    </SocialLink>
                  </Credit>
                </Credits>
              </CreditContainer>
              <CreditContainer>
                <Credits>
                  <Credit>
                    {'Design ripped off from- '}
                    <SocialLink href="http://digitalpsychology.io/">
                      digitalpsychology
                    </SocialLink>
                  </Credit>
                </Credits>
              </CreditContainer>
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
