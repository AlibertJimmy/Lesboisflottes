import styled from 'styled-components'

const DateWrapper = styled.div`
  text-align: center;
  border-radius: 15px;
  border: 1px solid black;
`



function DateDisplay({currentDate}) {

  return (
      <DateWrapper>
        The current date is {currentDate}
      </DateWrapper>
  )
}

export default DateDisplay
