import { useState, useEffect } from 'react'
import Timer from '../../components/timer/Timer'
import { generateTimestamp } from '../../utils/generateUtils'

const Home = () => {
  const [sessionMinute, setSessionMinute] = useState(25)
  const [timestamp, setTimestamp] = useState(
    generateTimestamp(sessionMinute * 60),
  )

  useEffect(() => {
    setTimestamp(generateTimestamp(sessionMinute * 60))
  }, [sessionMinute])

  return (
    <Timer
      expiryTimestamp={timestamp}
      sessionMinute={sessionMinute}
      setSessionMinute={setSessionMinute}
    />
  )
}

export default Home
