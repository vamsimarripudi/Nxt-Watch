import styled from 'styled-components'

export const VideosUnOrderList = styled.ul`
  list-style-type: none;
  display: flex; /* Make list items go side-by-side */
  flex-wrap: wrap; /* Prevent wrapping to new lines */
  overflow-x: hidden; /* Enable horizontal scroll if needed */
  overflow-y: auto; /* Hide vertical overflow */
  white-space: wrap; /* Prevent line breaks */
  scrollbar-width: none;
  height: 100%;
`

export const VideoItemContainer = styled.li`
  height: 300px;
  width: auto;
  border-width: 1px solid black;
  margin: 10px;
  padding: 0px;
  text-decoration: none;
  background-color: #f4f3f3;
  @media screen and (max-width: 768px) {
    margin: 5px;
  }
`

export const GamingTitle = styled.h1`
  margin-left: 10px;
`
export const GameVideoImage = styled.img`
  height: 250px;
  width: 100%;
`
