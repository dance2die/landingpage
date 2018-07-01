import React from 'react'
import { Link, withPrefix } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
// import BlogSvg from 'svg-react-loader?name=Icon!../svg/blog.svg';
// import ContributionsSvg from 'svg-react-loader?name=Icon!../svg/contributions.svg';
// import CreationsSvg from 'svg-react-loader?name=Icon!../svg/creations.svg';

import BlogSvg from "../svg/blog.svg";
import CreationsSvg from "../svg/creations.svg";
import ContributionsSvg from "../svg/contributions.svg";

const NameContainer = styled.h1`
  margin: 3vw auto;
  width: 100vw;
`

const LinkContainer = styled.ul`
  padding: 0;
  margin: 5vw 0;
  list-style: none;
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
  alt: props => props.alt
})`
  color: red;
  width: 300px;
  height: 300px;

  position: absolute;
  top: -9vw;
  right: 15vw;
  margin: 0;
  -webkit-transition: all .15s ease;
  transition: all .15s ease;
  pointer-events: none;
  opacity: 0;
  z-index: -1;

  
  ${ExternalLink}:hover &, ${InternalLink}:hover & {
    opacity: 1;
  }

`


const LinkDescription = styled.span``

const Emoji = styled.span`
  margin-right: 2rem;
`


const IndexPage = props => {
  return (
    <Layout>
      <NameContainer>Hi, I am Sung</NameContainer>
      <LinkContainer>
        <li>
          <ExternalLink
            style={LinkStyle}
            href="https://www.slightedgecoder.com/"
          >
            <Emoji>🚀</Emoji>
            <LinkDescription>Blog</LinkDescription>
            {/* <img src={BlogSvg} alt="BlogSVG" style={{width: "300px", height: "300px"}} /> */}
            <Figure src={BlogSvg} alt="Blog SVG" />
          </ExternalLink>
        </li>
        <li>
          <ExternalLink style={LinkStyle} href="https://github.com/dance2die/">
            <Emoji>🏭</Emoji>
            <LinkDescription>Creations</LinkDescription>
            {/* <img src={CreationsSvg} alt="Creations SVG" style={{width: "300px", height: "300px"}} /> */}
            <Figure src={CreationsSvg} alt="Creations SVG" />
          </ExternalLink>
        </li>
        <li>
          <InternalLink style={LinkStyle} to="/contributions/">
            <Emoji>😎</Emoji>
            <LinkDescription>Contributions</LinkDescription>
            {/* <img src={ContributionsSvg} alt="Contributions SVG" style={{width: "300px", height: "300px"}} /> */}
            <Figure src={ContributionsSvg} alt="Contributions SVG" />
          </InternalLink>
        </li>
      </LinkContainer>
    </Layout>
  )
}

export default IndexPage
