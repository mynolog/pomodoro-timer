import type { Dispatch, SetStateAction } from 'react'
import { useEffect } from 'react'
import { useTimer } from 'react-timer-hook'
import { FaPersonRunning, FaPerson } from 'react-icons/fa6'
import { VscDebugStart, VscDebugPause, VscDebugRestart } from 'react-icons/vsc'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa'
import { formatTimeUnit } from '../../utils/formatUtils'
import { generateTimestamp } from '../../utils/generateUtils'
import { getRandomMessage } from '../../utils/getUtils'
import Button from '../common/Button/Button'

type TimerProps = {
  expiryTimestamp: Date
  sessionMinute: number
  setSessionMinute: Dispatch<SetStateAction<number>>
}

function Timer({
  expiryTimestamp,
  sessionMinute,
  setSessionMinute,
}: TimerProps) {
  const { seconds, minutes, isRunning, pause, resume, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      sendNotification('세션 종료', getRandomMessage())
    },
    autoStart: false,
  })

  useEffect(() => {
    const newTimestamp = generateTimestamp(sessionMinute * 60)
    restart(newTimestamp, false)
  }, [sessionMinute, restart])

  const initTimestamp = () => {
    const newTimestamp = generateTimestamp(sessionMinute * 60)
    restart(newTimestamp, false)
  }

  const sendNotification = (title: string, message: string) => {
    if (Notification.permission === 'granted') {
      new Notification(title, { body: message })
    } else {
      console.log('알림 권한이 거부되었습니다.')
    }
  }

  const handleIncreaseSessionMinute = () => {
    setSessionMinute((prevState) => {
      if (prevState >= 59) {
        return 0
      }
      return prevState + 1
    })
  }

  const handleDecreaseSessionMinute = () => {
    setSessionMinute((prevState) => {
      if (prevState <= 0) {
        return 59
      }
      return prevState - 1
    })
  }

  return (
    <div className="w-[600px] h-screen flex flex-col justify-center items-center gap-9">
      <div
        className={`flex items-center gap-2 text-8xl font-degital rounded ${minutes === 0 && seconds <= 10 ? 'text-red-800' : 'text-green-900'}`}
      >
        <div className="w-28 flex flex-col gap-1 items-center justify-center">
          <FaAngleUp
            className={`text-4xl text-gray-600 ${isRunning ? 'invisible' : 'visible'}`}
            onClick={handleIncreaseSessionMinute}
          />
          {formatTimeUnit(minutes)}
          <FaAngleDown
            className={`text-4xl text-gray-600 ${isRunning ? 'invisible' : 'visible'}`}
            onClick={handleDecreaseSessionMinute}
          />
        </div>
        <div className={`${isRunning ? 'animate-blink' : ''}`}>:</div>
        <div className="w-28 flex gap-1 items-center justify-center">
          {formatTimeUnit(seconds)}
        </div>
      </div>
      <p className="text-4xl">
        {isRunning ? <FaPersonRunning /> : <FaPerson />}
      </p>
      <div className="flex gap-3 text-4xl">
        {isRunning ? (
          <Button onClick={pause}>{<VscDebugPause />}</Button>
        ) : (
          <Button disabled={minutes === 0 && seconds === 0} onClick={resume}>
            {<VscDebugStart />}
          </Button>
        )}
        <Button onClick={initTimestamp}>{<VscDebugRestart />}</Button>
      </div>
    </div>
  )
}

export default Timer
