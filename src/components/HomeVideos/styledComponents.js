import styled from 'styled-components'

export const DivContainer = styled.div`
  margin: 10px;
  width: 80%;
  overflow: auto;
  height: 500px;
  scrollbar-width: none;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100vh;
    margin: 0px;
  }
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

export const SearchInput = styled.input`
  width: 100%;
  padding: 8px 35px 8px 10px; /* add right padding for icon space */
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
`

export const SearchInputDiv = styled.div`
  position: relative;
  width: 250px;
  margin-left: 50px;
  margin-top: 10px;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 280px;
  }
`

export const SearchIcon = styled.div`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`
