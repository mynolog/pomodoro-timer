import { useState } from 'react'
import Clock from '../../components/clock/Clock'

export type ClockMode = '12' | '24'

const LiveClock = () => {
  const [clockMode, setClockMode] = useState<ClockMode>('12')
  return <Clock clockMode={clockMode} setClockMode={setClockMode} />
}

export default LiveClock
