import { useState, useEffect } from 'react'
import Timer from './components/timer/Timer'
import { requestNotificationPermission } from './utils/requestUtils'
import { generateTimestamp } from './utils/generateUtils'

function App() {
  const [sessionMinute, setSessionMinute] = useState(25)
  const [timestamp, setTimestamp] = useState(
    generateTimestamp(sessionMinute * 60),
  )

  useEffect(() => {
    requestNotificationPermission()
  }, [])

  useEffect(() => {
    setTimestamp(generateTimestamp(sessionMinute * 60))
  }, [sessionMinute])

  return (
    <>
      <Timer
        expiryTimestamp={timestamp}
        sessionMinute={sessionMinute}
        setSessionMinute={setSessionMinute}
      />
    </>
  )
}

export default App
