import { useEffect } from 'react'
import { requestNotificationPermission } from './utils/requestUtils'
import Router from './routes/'

function App() {
  useEffect(() => {
    requestNotificationPermission()
  }, [])

  return (
    <>
      <Router />
    </>
  )
}

export default App
