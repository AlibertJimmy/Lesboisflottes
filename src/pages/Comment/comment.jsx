import styled from 'styled-components'


const CommentsWrapper = styled.div`
  text-align: center;
`


function Comment() {
  return (
      <CommentsWrapper>
        <p>My Comments</p>
      </CommentsWrapper>
  )
}

export default Comment
