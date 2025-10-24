import styled from 'styled-components'

export const VideoItemContainer = styled.li`
  height: auto;
  width: 300px;

  border-width: 1px solid black;
  margin: 10px;
  padding: 0px;
  text-decoration: none;
  background-color: #f4f3f3;
  @media screen and (max-width: 768px) {
    margin: 5px;
  }
`
export const VideoImage = styled.img`
  height: auto;
  width: 100%;
`

export const BottomCard = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  height: auto;
`

export const BottomLeftCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  color: #fff;
  margin: 0px;
  padding-left: 10px;
`

export const VideoTitle = styled.p`
  font-size: 15px;
  margin-bottom: 5px;
`

export const BottomViewCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 14px;
`
