import styled from 'styled-components'

export const DivContainer = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden; /* keep side + main layout clean */
`

export const VideoDivContainer = styled.div`
  flex: 1;
  width: 82%;
  height: auto;
  overflow-y: auto; /* ✅ fix syntax and allow scroll */
  background-color: #fff;
  padding: 20px;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0 15px;
    height: auto;
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
