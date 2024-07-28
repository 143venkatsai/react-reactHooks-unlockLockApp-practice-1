import styled from 'styled-components'

export const UnlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: linear-gradient(to bottom, #161617, #0b0c1e, #3c2940);
`

export const LockContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const LockImage = styled.img`
  height: 150px;
`

export const LockText = styled.p`
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: normal;
  color: #e2e8f0;
`

export const LockButton = styled.button`
  font-family: 'Roboto';
  font-size: 14px;
  color: #ffffff;
  background-color: #06b6d4;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  margin-top: 50px;
  outline: none;
  cursor: pointer;
`
