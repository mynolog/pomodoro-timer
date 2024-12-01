import { useEffect } from 'react'
import Timer from './components/timer/Timer'
import { requestNotificationPermission } from './utils/requestUtils'
import { generateTimestamp } from './utils/generateUtils'

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
