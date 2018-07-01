import React from 'react'
import { Link, withPrefix } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'

import BlogSvg from '../svg/blog.svg'
import CreationsSvg from '../svg/creations.svg'
import ContributionsSvg from '../svg/contributions.svg'

const LinkContainer = styled.ul`
  padding: 0;
  margin: 5vw 0;
  list-style: none;
  width: 100%;
`

const ListItem = styled.li`
  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`

const LinkStyle = {
  padding: '0 5vw',
  hoverBackgroundColor: 'rgba(0, 0, 0, 0.03)',
}

const ExternalLink = styled.a.attrs({
  target: '_blank',
  href: props => props.href,
})`
  padding: ${props => props.padding};

  &:hover {
    background-color: ${props => props.hoverBackgroundColor};
  }
`

const InternalLink = styled(Link)`
  padding: ${props => props.padding};
`

const Figure = styled.img.attrs({
  src: props => props.src,
  alt: props => props.alt,
})`
  color: red;
  width: 300px;
  height: 300px;

  position: absolute;
  top: 2rem;
  right: 50%;
  margin: 0;
  -webkit-transition: all 0.15s ease;
  transition: all 0.15s ease;
  pointer-events: none;
  opacity: 0;
  z-index: -1;

  ${ExternalLink}:hover &,
  ${InternalLink}:hover & {
    opacity: 0.3;
  }
`

const LinkDescription = styled.span``

const Emoji = styled.span`
  margin-right: 2rem;
`

const IndexPage = props => {
  return (
    <Layout>
      <LinkContainer>
        <ListItem>
          <ExternalLink
            style={LinkStyle}
            href="https://www.slightedgecoder.com/"
          >
            <Emoji>🚀</Emoji>
            <LinkDescription>Blog</LinkDescription>
            <Figure src={BlogSvg} alt="Blog SVG" />
          </ExternalLink>
        </ListItem>
        <ListItem>
          <ExternalLink style={LinkStyle} href="https://github.com/dance2die/">
            <Emoji>🏭</Emoji>
            <LinkDescription>Creations</LinkDescription>
            <Figure src={CreationsSvg} alt="Creations SVG" />
          </ExternalLink>
        </ListItem>
        <ListItem>
          <InternalLink style={LinkStyle} to="/contributions/">
            <Emoji>😎</Emoji>
            <LinkDescription>Contributions</LinkDescription>
            <Figure src={ContributionsSvg} alt="Contributions SVG" />
          </InternalLink>
        </ListItem>
      </LinkContainer>
    </Layout>
  )
}

export default IndexPage
