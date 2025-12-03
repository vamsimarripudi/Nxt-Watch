import styled from 'styled-components'

export const NavBar = styled.nav`
  height: 20vh;
  background-color: ${props =>
    props.theme === 'dark' ? '#212121' : '#cbd5e1'};
  padding: 5px;
  @media screen and (min-width: 768px) {
    height: 15vh;
    padding-left: 30px;
    padding-right: 30px;
  }
`

export const NxtWatchImage = styled.img`
  height: 30px;
  margin: 5px;
  @media screen and (min-width: 768px) {
    height: 40px;
  }
`

export const ProfileImage = styled.img`
  height: 30px;
  margin: 10px;
  margin-left: 10px;
  margin-right: 15px;
`

export const LogoutDivContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
`

export const LogoutButton = styled.button`
  background-color: transparent;
  border: 2px solid skyblue;
  padding: 10px;
  padding-left: 25px;
  padding-right: 25px;
  font-weight: bold;
  cursor: pointer;
`

export const LogoutMobileContainer = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f1f5f9;
  height: 70px;
  width: auto;
  @media screen and (min-width: 768px) {
    display: none;
  }
  background-color: ${props =>
    props.theme === 'dark' ? '#212121' : '#f4f4f4'};
`

export const NavBarDesktopVersion = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const IconDivContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const IconButton = styled.button`
  background-color: transparent;
  border: none;
  margin-left: 5px;
  margin-right: 5px;
`
