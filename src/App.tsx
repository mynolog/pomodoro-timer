import Timer from './components/timer/Timer'

function App() {
  const time = new Date()
  time.setSeconds(time.getSeconds() + 25 * 60)
  return (
    <>
      <Timer expiryTimestamp={time} />
    </>
  )
}

export default App
