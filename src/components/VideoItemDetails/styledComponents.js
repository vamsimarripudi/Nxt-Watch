import styled from 'styled-components'

export const DivContainer = styled.div`
  display: flex;
  min-height: 100vh;
  max-height: auto;

  width: auto;
  background-color: ${props =>
    props.theme === 'dark' ? '#121212' : '#f4f4f4'};
  color: ${props => props.color};
  overflow: hidden; /* keep side + main layout clean */
`

export const VideoDivContainer = styled.div`
  flex-grow: 1;
  width: 82%;
  height: 90vh;
  overflow-x: auto; /* ✅ fix syntax and allow scroll */
  background-color: red;
  padding: 20px;
  color: ${props => props.color};
  background-color: ${props =>
    props.theme === 'dark' ? '#121212' : '#f4f4f4'};
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0 15px;
    height: 90vh;
  }
`

export const VideoViewPara = styled.p`
  margin: 10px;
  margin-right: 15px;
`

export const PublishedTime = styled.p`
  margin: 10px;
  margin-right: 15px;
`
export const VideoDetailsContainer = styled.div`
  height: 100%;
`
export const VideoContainer = styled.div`
  height: 60%;
  @media screen and (min-width: 768px) {
    height: 80%;
    padding: 20px 20px 0px 20px;
  }
`

export const BottomCardContainer = styled.div``

export const VideoTitle = styled.p`
  color: ${props => props.color};
`

export const Button = styled.button`
  margin-right: 10px;
  color: ${props => (props.theme === 'active' ? '#2563eb' : '#64748b')};
  border: 0px;
  font-weight: bold;
  background-color: transparent;
`
