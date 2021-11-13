import React, { useState, useEffect } from 'react'
import './Konami.scss'

const listenToKeys = [
  { keyCode: 37, keyName: 'left' },
  { keyCode: 38, keyName: 'up' },
  { keyCode: 39, keyName: 'right' },
  { keyCode: 40, keyName: 'down' },
  { keyCode: 65, keyName: 'a' },
  { keyCode: 66, keyName: 'b' }
]

// Konami Code sequence
const konamiCode = [ 'up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a' ]

const Konami: React.FunctionComponent = () => {
  const [ codePosition, setCodePosition ] = useState<number>(0)
  const [ showEasterEgg, setShowEasterEgg ] = useState<boolean>(false)

  const handleKeyDown = (event: KeyboardEvent) => {
    setShowEasterEgg(false) // Escape anyways

    const matchKey = listenToKeys.find(k => k.keyCode === event.keyCode)
    const requiredKey = konamiCode[codePosition]

    if (matchKey !== undefined && matchKey.keyName === requiredKey) {
      // if the last key is reached, activate cheats
      console.log(codePosition, konamiCode.length);
      if (codePosition + 1 === konamiCode.length) {
        handleKonamiComplete()
        setCodePosition(0)
      } else {
        // move to the next key in the Konami code sequence
        setCodePosition(codePosition + 1)
      }
    } else {
      setCodePosition(0)
    }
  };

  const handleKonamiComplete = () => {
    // Anything surprise here
    setShowEasterEgg(true)
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    // cleanup this component
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [ codePosition ]);
  return showEasterEgg
    ? (
      <div id="konami" className="d-flex w-100 h-100 justify-content-center align-items-center">
        <div className="h-100 w-100 embed-responsive">
          <iframe className="w-100 h-100" src="https://www.youtube-nocookie.com/embed/mHONNcZbwDY?controls=0&autoplay=1"
                  title="YouTube video player" frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen/>
          <div className="konami-layer"/>
        </div>
      </div>
    )
    : <React.Fragment/>
}

export default Konami
