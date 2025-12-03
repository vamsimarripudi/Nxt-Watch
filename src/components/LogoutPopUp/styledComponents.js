import styled from 'styled-components'

export const PopUpDivContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const PopUpMobileContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const PopupCard = styled.div`
  width: 480px;
  background-color: ${props =>
    props.theme === 'dark' ? '#121212' : '#f4f4f4'};
  padding: 30px 35px;
  border-radius: 6px;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  gap: 25px;

  p {
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    margin: 0;
    color: ${props => (props.theme === 'dark' ? '#f4f4f4' : '#111')};
    line-height: 1.3;
  }

  @media screen and (max-width: 768px) {
    width: auto;
  }
`

export const CloseButton = styled.button`
  background-color: #8a5cff;
  color: #ffffff;
  padding: 12px 24px;
  font-size: 15px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  width: 120px;

  &:hover {
    opacity: 0.9;
  }
`

export const LogoutButton = styled.button`
  background-color: ${props =>
    props.theme === 'dark' ? '#121212' : '#f4f4f4'};
  border: 2px solid skyblue;
  padding: 10px;
  padding-left: 25px;
  padding-right: 25px;
  font-weight: bold;
  cursor: pointer;
  color: ${props => (props.color === 'white' ? '#f4f4f4' : '#121212')};
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const CancelButton = styled.button`
  background-color: #ffffff;
  color: #121212;
  padding: 10px 22px;
  font-size: 15px;
  border: 1.5px solid #8a5cff;
  border-radius: 10px;
  cursor: pointer;
  width: 120px;
  margin-right: 10px;

  &:hover {
    opacity: 0.9;
  }
`
