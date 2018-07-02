import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const HeaderLink = styled(Link).attrs({
  href: props => props.to,
})`
  text-decoration: none;
`

const ExternalLink = styled.a.attrs({
  target: '_blank',
  href: props => props.href,
})`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;

  padding: ${props => props.padding};

  &:hover {
    background-color: ${props => props.hoverBackgroundColor};
  }
`

const InternalLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;

  padding: ${props => props.padding};
`

const ContributionsLink = styled(Link).attrs({
  to: `/contributions`,
})`
  color: #0000ff;
`

const HomeLink = styled(Link).attrs({
  to: `/`,
})`
  color: #0000ff;
`

export { HeaderLink, ExternalLink, InternalLink, ContributionsLink, HomeLink }
