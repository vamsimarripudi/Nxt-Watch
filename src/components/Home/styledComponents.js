import styled from 'styled-components'

export const DivContainer = styled.div`
  display: flex;
  background-color: ${props =>
    props.theme === 'dark' ? '#181818' : '#f9f9f9'};
`
