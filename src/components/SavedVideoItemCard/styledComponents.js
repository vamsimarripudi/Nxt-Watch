import styled from 'styled-components'

export const VideoItemContainer = styled.li`
  height: 150px;
  width: auto;
  border-width: 1px solid black;
  margin: 10px;

  padding: 0px;
  text-decoration: none;
  background-color: ${props =>
    props.theme === 'dark' ? '#121212' : '#f4f3f3'};
  @media screen and (max-width: 768px) {
    margin: 5px;
    height: 100px;
  }
`
export const VideoImage = styled.img`
  height: auto;
  width: 200px;
`

export const BottomCard = styled.div`
  display: flex;

  padding: 5px;
  height: auto;
`

export const BottomLeftCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  color: #fff;
  margin: 0px;
  padding-left: 10px;
`

export const VideoTitle = styled.p`
  font-size: 15px;
  margin-bottom: 5px;
  @media screen and (max-width: 768px) {
    font-size: 13px;
  }
`

export const BottomViewCard = styled.div`
  display: flex;
  flex-direction: 'column';

  font-size: 14px;
`

export const ProfileImage = styled.img`
  height: 50px;
  @media screen and (max-width: 768px) {
    height: 35px;
  }
`
export const NameTag = styled.p``
export const PublishedTag = styled.p``
export const ViewCount = styled.p``
