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
  background-color: ${props => props.theme};
`

export const TrendingTitle = styled.h1`
  margin-left: 50px;
  color: ${props => props.color};
`
