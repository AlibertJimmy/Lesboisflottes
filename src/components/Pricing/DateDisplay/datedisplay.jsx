import styled from 'styled-components'
import { borderWidth } from '../../../utils/style/jsx/border'

const DateWrapper = styled.div`
  text-align: center;
  border-radius: 15px;
  border: ${borderWidth}px solid black;
`



function DateDisplay({currentDate}) {

  return (
      <DateWrapper>
        The current date is {currentDate}
      </DateWrapper>
  )
}

export default DateDisplay
