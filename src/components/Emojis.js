import React from 'react'
import styled from 'styled-components'

import blogEmoji from '../svg/blog_emoji.svg'
import creationsEmoji from '../svg/creations_emoji.svg'
import contributionsEmoji from '../svg/contributions_emoji.svg'

const Emoji = styled.img.attrs({
  src: props => props.src,
  alt: props => props.alt,
})`
  height: 3rem;
  margin-right: 2rem;
`

const CreditEmoji = styled.img.attrs({
  src: props => props.src,
  alt: props => props.alt,
})`
  @media (min-width: 700px) {
    height: 1.75rem;
    &::after {
      content: '-';
      color: red;
    }
  }

  @media (max-width: 699px) {
    height: 1rem;
  }
`

const CreditBlogEmoji = () => <CreditEmoji src={blogEmoji} alt="Blog Emoji" />
const CreditCreationsEmoji = () => (
  <CreditEmoji src={creationsEmoji} alt="Creations Emoji" />
)
const CreditContributionsEmoji = () => (
  <CreditEmoji src={contributionsEmoji} alt="Contributions Emoji" />
)

const BlogEmoji = () => <Emoji src={blogEmoji} alt="Blog Emoji" />
const CreationsEmoji = () => (
  <Emoji src={creationsEmoji} alt="Creations Emoji" />
)
const ContributionsEmoji = () => (
  <Emoji src={contributionsEmoji} alt="Contributions Emoji" />
)

export {
  BlogEmoji,
  CreationsEmoji,
  ContributionsEmoji,
  CreditBlogEmoji,
  CreditCreationsEmoji,
  CreditContributionsEmoji,
}
