import styled from 'styled-components'

export const DivContainer = styled.div`
  display: flex;
  background-color: ${props =>
    props.theme === 'dark' ? '#121212' : '#f4f4f4'};
`
