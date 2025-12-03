import styled from 'styled-components'

export const SideDivContainer = styled.div`
  padding: 10px;
  background-color: ${props =>
    props.theme === 'dark' ? '#121212' : '#cbd5e1'};
  height: 100vh;
  width: 20%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const TopCardContainer = styled.div``
export const BottomCardContainer = styled.div`
  height: 240px;
  width: auto;
`

export const IconDivContainer = styled.div`
  display: flex;

  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  width: auto;
`

export const ContactTitle = styled.h1`
  font-size: 20px;
  font-family: 'Roboto';
`

export const BottomPara = styled.p`
  color: #1e293b;
  font-weight: bold;
`

export const TopPara = styled.p`
  display: flex;
  align-items: center;
`

export const SectionDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`
