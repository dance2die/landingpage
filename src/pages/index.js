import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import { ExternalLink, InternalLink } from '../components/Links'

import blogFigure from '../svg/blog.svg'
import creationsFigure from '../svg/creations.svg'
import contributionsFigure from '../svg/contributions.svg'

import blogEmoji from '../svg/blog_emoji.svg'
import creationsEmoji from '../svg/creations_emoji.svg'
import contributionsEmoji from '../svg/contributions_emoji.svg'

const LinkContainer = styled.ul`
  padding: 0;
  margin: 5vw 0;
  list-style: none;
  width: 100%;

  @media (min-width: 700px) {
    font-size: 2rem;
  }

  @media (max-width: 700px) {
    font-size: 1.2rem;
  }
`

const ListItem = styled.li`
  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`

const LinkStyle = {
  padding: '1.1rem 0',
  hoverBackgroundColor: 'rgba(0, 0, 0, 0.03)',
}

const Figure = styled.img.attrs({
  src: props => props.src,
  alt: props => props.alt,
})`
  color: red;
  width: 300px;
  height: 300px;

  position: absolute;
  right: 1rem;
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

const Emoji = styled.img.attrs({
  src: props => props.src,
  alt: props => props.alt,
})`
  height: 3rem;
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
            <Emoji src={blogEmoji} alt="Blog Emoji" />
            <LinkDescription>Blog</LinkDescription>
            <Figure src={blogFigure} alt="Blog SVG" />
          </ExternalLink>
        </ListItem>
        <ListItem>
          <ExternalLink style={LinkStyle} href="https://github.com/dance2die/">
            <Emoji src={creationsEmoji} alt="Creations Emoji" />
            <LinkDescription>Creations</LinkDescription>
            <Figure src={creationsFigure} alt="Creations SVG" />
          </ExternalLink>
        </ListItem>
        <ListItem>
          <InternalLink style={LinkStyle} to="/contributions/">
            <Emoji src={contributionsEmoji} alt="Contributions Emoji" />
            <LinkDescription>Contributions</LinkDescription>
            <Figure src={contributionsFigure} alt="Contributions SVG" />
          </InternalLink>
        </ListItem>
      </LinkContainer>
    </Layout>
  )
}

export default IndexPage
