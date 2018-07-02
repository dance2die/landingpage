import styled from 'styled-components'
import { InternalLink } from './Links'

const PostLink = styled(InternalLink)`
  box-shadow: none;
`

const Excerpt = styled.p`
  letter-spacing: 1px;
  font-size: 0.9rem;
  line-height: 1.7rem;

  & a {
    box-shadow: none;
    border-bottom: 1px dotted #000;
  }
`

const ContributionsContainer = styled.div`
  padding: 1.1rem 5vw;
  width: 65vw;
`

export { PostLink, Excerpt, ContributionsContainer }
