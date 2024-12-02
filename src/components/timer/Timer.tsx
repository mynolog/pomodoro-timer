import type { Dispatch, SetStateAction } from 'react'
import { useEffect } from 'react'
import { useTimer } from 'react-timer-hook'
import { FaPersonRunning, FaPerson } from 'react-icons/fa6'
import {
  VscDebugStart,
  VscDebugPause,
  VscDebugRestart,
  VscDebugRerun,
} from 'react-icons/vsc'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa'
import { formatTimeUnit } from '../../utils/formatUtils'
import { generateTimestamp } from '../../utils/generateUtils'
import { getRandomMessage } from '../../utils/getUtils'
import Button from '../common/Button/Button'

type TimerProps = {
  expiryTimestamp: Date
  pomodoroMinutes: number
  setPomodoroMinutes: Dispatch<SetStateAction<number>>
  pomodoroSeconds: number
  setPomodoroSeconds: Dispatch<SetStateAction<number>>
}

const Timer = ({
  expiryTimestamp,
  pomodoroMinutes,
  setPomodoroMinutes,
  pomodoroSeconds,
  setPomodoroSeconds,
}: TimerProps) => {
  const { seconds, minutes, isRunning, pause, resume, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      sendNotification('세션 종료', getRandomMessage())
    },
    autoStart: false,
  })

  useEffect(() => {
    const newTimestamp = generateTimestamp(
      pomodoroMinutes * 60 + pomodoroSeconds,
    )
    restart(newTimestamp, false)
  }, [pomodoroMinutes, pomodoroSeconds, restart])

  const restartTimestamp = () => {
    const newTimestamp = generateTimestamp(
      pomodoroMinutes * 60 + pomodoroSeconds,
    )
    restart(newTimestamp, true)
  }

  const initTimestamp = () => {
    setPomodoroMinutes(25)
    setPomodoroSeconds(0)
    const newTimestamp = generateTimestamp(25 * 60)
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
    setPomodoroMinutes((prevState) => {
      if (prevState >= 59) {
        return 0
      }
      return prevState + 1
    })
  }

  const handleDecreaseSessionMinute = () => {
    setPomodoroMinutes((prevState) => {
      if (prevState <= 0) {
        return 59
      }
      return prevState - 1
    })
  }

  const handleIncreaseSessionSecond = () => {
    setPomodoroSeconds((prevState) => {
      if (prevState >= 59) {
        return 0
      }
      return prevState + 1
    })
  }

  const handleDecreaseSessionSecond = () => {
    setPomodoroSeconds((prevState) => {
      if (prevState <= 0) {
        return 59
      }
      return prevState - 1
    })
  }

  return (
    <div className="w-[600px] h-screen flex flex-col justify-center items-center gap-9">
      <div
        className={`relative flex items-center gap-2 text-8xl font-degital rounded ${minutes === 0 && seconds <= 10 ? 'text-red-800' : 'text-gray-800'}`}
      >
        <p className="absolute -left-20 text-6xl text-teal-800">
          {isRunning ? <FaPersonRunning /> : <FaPerson />}
        </p>
        <div className="w-28 h-[176px] flex flex-col gap-1 items-center justify-center">
          <FaAngleUp
            className={`text-4xl text-green-800 ${isRunning ? 'invisible' : 'visible'}`}
            onClick={handleIncreaseSessionMinute}
          />
          {formatTimeUnit(minutes)}
          <FaAngleDown
            className={`text-4xl text-green-800 ${isRunning ? 'invisible' : 'visible'}`}
            onClick={handleDecreaseSessionMinute}
          />
        </div>
        <div className={`${isRunning ? 'animate-blink' : ''}`}>:</div>
        <div className="w-28 h-[176px] flex flex-col gap-1 items-center justify-center">
          <FaAngleUp
            className={`text-4xl text-green-800 ${isRunning ? 'invisible' : 'visible'}`}
            onClick={handleIncreaseSessionSecond}
          />
          {formatTimeUnit(seconds)}
          <FaAngleDown
            className={`text-4xl text-green-800 ${isRunning ? 'invisible' : 'visible'}`}
            onClick={handleDecreaseSessionSecond}
          />
        </div>
      </div>

      <div className="flex gap-3 text-4xl">
        {isRunning ? (
          <Button onClick={pause}>{<VscDebugPause />}</Button>
        ) : (
          <Button disabled={minutes === 0 && seconds === 0} onClick={resume}>
            {<VscDebugStart />}
          </Button>
        )}
        <Button onClick={restartTimestamp}>{<VscDebugRerun />}</Button>
        <Button onClick={initTimestamp}>{<VscDebugRestart />}</Button>
      </div>
    </div>
  )
}

export default Timer
