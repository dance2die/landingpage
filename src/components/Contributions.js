import React from 'react'
// import styled from 'styled-components'
// import { InternalLink } from './Links'

// const PostLink = styled(InternalLink)`
//   box-shadow: none;
// `

// const Excerpt = styled.p`
//   letter-spacing: 1px;
//   font-size: 0.9rem;
//   line-height: 1.7rem;

//   & a {
//     box-shadow: none;
//     border-bottom: 1px dotted #000;
//   }
// `

// const ContributionsContainer = styled.div`
//   padding: 1.1rem 5vw;
//   width: 65vw;
// `

const Excerpt = ({ dangerouslySetInnerHTML }) => (
  <p
    style={{
      letterSpacing: 1,
      fontSize: '0.9rem',
      lineHeight: '1.7rem',
    }}
    dangerouslySetInnerHTML={dangerouslySetInnerHTML}
  />
)

const ContributionsContainer = ({ children }) => (
  <div
    style={{
      padding: '1.1rem 5vw',
      width: '65vw',
    }}
  >
    {children}
  </div>
)

// const PostLink = ({children}) => <InternalLink {...props}>{children}</InternalLink>

// export { PostLink, Excerpt, ContributionsContainer }
export { Excerpt, ContributionsContainer }
