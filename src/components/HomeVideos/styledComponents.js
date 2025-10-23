import styled from 'styled-components'

export const DivContainer = styled.div`
  margin: 10px;
  width: 80%;
  overflow: auto;
  height: 500px;
  scrollbar-width: none;
`

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
