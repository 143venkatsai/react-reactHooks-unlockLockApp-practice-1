import {useState} from 'react'

import {
  UnlockContainer,
  LockContainer,
  LockImage,
  LockText,
  LockButton,
} from './styledComponents'

const Unlock = () => {
  const [locked, setLock] = useState(true)

  const onClickButton = () => {
    setLock(prevState => !prevState)
  }

  const buttonText = locked ? 'Unlock' : 'Lock'
  return (
    <UnlockContainer>
      <LockContainer>
        {locked ? (
          <LockImage
            src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
            alt="lock"
          />
        ) : (
          <LockImage
            src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
            alt="unlock"
          />
        )}
        {locked ? (
          <LockText>Your Device is Locked</LockText>
        ) : (
          <LockText>Your Device is Unlocked</LockText>
        )}
        <LockButton type="button" onClick={onClickButton}>
          {buttonText}
        </LockButton>
      </LockContainer>
    </UnlockContainer>
  )
}

export default Unlock
