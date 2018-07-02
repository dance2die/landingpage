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

const BlogEmoji = () => <Emoji src={blogEmoji} alt="Blog Emoji" />
const CreationsEmoji = () => (
  <Emoji src={creationsEmoji} alt="Creations Emoji" />
)
const ContributionsEmoji = () => (
  <Emoji src={contributionsEmoji} alt="Contributions Emoji" />
)

export { BlogEmoji, CreationsEmoji, ContributionsEmoji }
