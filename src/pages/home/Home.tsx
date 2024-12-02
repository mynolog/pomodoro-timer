import { useState, useEffect } from 'react'
import Timer from '../../components/timer/Timer'
import { generateTimestamp } from '../../utils/generateUtils'

const Home = () => {
  const [pomodoroMinutes, setPomodoroMinutes] = useState(25)
  const [pomodoroSeconds, setPomodoroSeconds] = useState(0)

  const [timestamp, setTimestamp] = useState(
    generateTimestamp(pomodoroMinutes * 60 + pomodoroSeconds),
  )

  useEffect(() => {
    setTimestamp(generateTimestamp(pomodoroMinutes * 60 + pomodoroSeconds))
  }, [pomodoroMinutes, pomodoroSeconds])

  return (
    <div className="w-[600px]">
      <Timer
        expiryTimestamp={timestamp}
        pomodoroMinutes={pomodoroMinutes}
        setPomodoroMinutes={setPomodoroMinutes}
        pomodoroSeconds={pomodoroSeconds}
        setPomodoroSeconds={setPomodoroSeconds}
      />
    </div>
  )
}

export default Home
