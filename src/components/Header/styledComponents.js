import styled from 'styled-components'

export const NavBar = styled.nav`
  padding: 10px;
  display: flex;

  background-color: #f1f5f9;
  padding-left: 30px;
  padding-right: 30px;
  height: 70px;
`

export const NxtWatchImage = styled.img`
  height: 35px;
  margin: 10px;
`

export const ProfileImage = styled.img`
  height: 30px;
  margin: 10px;
  margin-left: 30px;
`

export const LogoutDivContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
