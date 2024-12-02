import { useState, useEffect } from 'react'
import Timer from '../../components/timer/Timer'
import { generateTimestamp } from '../../utils/generateUtils'

const Home = () => {
  const [sessionMinute, setSessionMinute] = useState(25)
  const [sessionSecond, setSessionSecond] = useState(0)
  const [timestamp, setTimestamp] = useState(
    generateTimestamp(sessionMinute * 60 + sessionSecond),
  )

  useEffect(() => {
    setTimestamp(generateTimestamp(sessionMinute * 60 + sessionSecond))
  }, [sessionMinute, sessionSecond])

  return (
    <div className="w-[600px]">
      <Timer
        expiryTimestamp={timestamp}
        sessionMinute={sessionMinute}
        setSessionMinute={setSessionMinute}
        sessionSecond={sessionSecond}
        setSessionSecond={setSessionSecond}
      />
    </div>
  )
}

export default Home
