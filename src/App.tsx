import { useEffect } from 'react'
import Timer from './components/timer/Timer'
import { requestNotificationPermission } from './utils/requestNotificationPermission'
import { generateTimestamp } from './utils/generateTimestamp'

function App() {
  useEffect(() => {
    requestNotificationPermission()
  }, [])

  const timestamp = generateTimestamp(25 * 60)

  return (
    <>
      <Timer expiryTimestamp={timestamp} />
    </>
  )
}

export default App
