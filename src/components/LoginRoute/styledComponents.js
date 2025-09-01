import styled from 'styled-components'

export const LoginDivContainer = styled.div`
  background-color: #ffffff;
  height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const LoginContainer = styled.div`
  width: 400px;
  padding: 32px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 8px 10px rgba(0, 0, 0, 0.1);
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const NxtWatchImage = styled.img`
  height: 45px;
`

export const Label = styled.label`
  font-size: 12px;
  color: black;
  font-family: 'roboto';
  margin: 10px;
`

export const UserInput = styled.input`
  padding-left: 10px;
  padding-right: 10px;
  padding: 10px;
  width: 250px;
  font-size: 10px;
  margin: 10px;
`

export const LoginForm = styled.form``

export const CheckBoxDivContainer = styled.div`
  margin-left: 8px;
`

export const LoginButton = styled.button`
  margin-top: 20px;
  padding-left: 70px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 70px;
  font-size: 15px;
  color: white;
  background-color: #6366f1;
  border: 0px;
  border-radius: 10px;
  cursor: pointer;
`

export const ErrorMsg = styled.p`
  color: red;
  font-size: 10px;
  font-family: 'Roboto';
  align-self: flex-start;
`
