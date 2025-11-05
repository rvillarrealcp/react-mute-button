import { useState } from 'react'
import offIcon from './assets/icons/off.svg'
import onIcon from './assets/icons/on.svg'
import './App.css'

function App() {
  const [isMuted, setIsMuted] = useState(false)

  const handleToggle = () => {
    setIsMuted(!isMuted)
  }

  return (
    <>
      <div className = "app">
        <h1>Mute Button</h1>
        <img 
          src={isMuted? offIcon: onIcon}
          alt={isMuted? "Muted": "Not Muted"}
          onClick={handleToggle}
          className="mute-button"
        />
        <p>{isMuted ? "Sound is OFF" : "Sound is ON"}</p>
      </div>
    </>
  )
}

export default App
