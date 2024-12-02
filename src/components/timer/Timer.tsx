import type { Dispatch, SetStateAction } from 'react'
import { useEffect, useState } from 'react'
import { useTimer } from 'react-timer-hook'
import { MdOutlineFreeBreakfast, MdTimer10Select } from 'react-icons/md'
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
  const [isPomodoro, setIsPomodoro] = useState(true)
  const { seconds, minutes, isRunning, pause, resume, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      if (isPomodoro) {
        sendNotification('세션 종료', getRandomMessage('pomodoro'))
        setIsPomodoro(false)
        initBreakTimestamp()
      } else {
        sendNotification('세션 종료', getRandomMessage('break'))
        setIsPomodoro(true)
        restartPomodoroTimestamp(true)
      }
    },
    autoStart: false,
  })

  useEffect(() => {
    const newTimestamp = generateTimestamp(
      pomodoroMinutes * 60 + pomodoroSeconds,
    )
    restart(newTimestamp, false)
  }, [pomodoroMinutes, pomodoroSeconds, restart])

  const restartPomodoroTimestamp = (autoStart: boolean) => {
    setIsPomodoro(true)
    const newTimestamp = generateTimestamp(
      pomodoroMinutes * 60 + pomodoroSeconds,
    )
    restart(newTimestamp, autoStart)
  }

  const initPomodoroTimestamp = () => {
    setPomodoroMinutes(25)
    setPomodoroSeconds(0)
    setIsPomodoro(true)
    const newTimestamp = generateTimestamp(25 * 60)
    restart(newTimestamp, false)
  }

  const initBreakTimestamp = () => {
    const newTimestamp = generateTimestamp(10 * 60)
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

  const handleToggleTimerMode = (type: 'pomodoro' | 'break') => {
    setIsPomodoro((prevState) => !prevState)
    switch (type) {
      case 'pomodoro':
        restartPomodoroTimestamp(false)
        break
      case 'break':
        initBreakTimestamp()
        break
      default:
        break
    }
  }

  return (
    <div className="w-[600px] h-screen flex flex-col justify-center items-center gap-9">
      <div
        className={`relative flex items-center gap-2 text-8xl font-degital rounded ${minutes === 0 && seconds <= 10 ? 'text-red-800' : 'text-gray-800'}`}
      >
        <div className="absolute -left-20 flex flex-col gap-2 text-4xl text-teal-800">
          <Button bgColor="bg-gray-900">
            {isPomodoro ? (
              isRunning ? (
                <FaPersonRunning />
              ) : (
                <FaPerson />
              )
            ) : (
              <MdOutlineFreeBreakfast />
            )}
          </Button>
          {isPomodoro ? (
            <Button
              bgColor="bg-red-800"
              onClick={() => handleToggleTimerMode('break')}
            >
              <MdOutlineFreeBreakfast />
            </Button>
          ) : (
            <Button
              bgColor="bg-green-700"
              onClick={() => handleToggleTimerMode('pomodoro')}
            >
              <MdTimer10Select />
            </Button>
          )}
        </div>
        <div className="w-28 h-[176px] flex flex-col gap-1 items-center justify-center">
          <FaAngleUp
            className={`text-4xl text-green-800 ${isRunning || !isPomodoro ? 'invisible' : 'visible'}`}
            onClick={handleIncreaseSessionMinute}
          />
          {formatTimeUnit(minutes)}
          <FaAngleDown
            className={`text-4xl text-green-800 ${isRunning || !isPomodoro ? 'invisible' : 'visible'}`}
            onClick={handleDecreaseSessionMinute}
          />
        </div>
        <div className={`${isRunning ? 'animate-blink' : ''}`}>:</div>
        <div className="w-28 h-[176px] flex flex-col gap-1 items-center justify-center">
          <FaAngleUp
            className={`text-4xl text-green-800 ${isRunning || !isPomodoro ? 'invisible' : 'visible'}`}
            onClick={handleIncreaseSessionSecond}
          />
          {formatTimeUnit(seconds)}
          <FaAngleDown
            className={`text-4xl text-green-800 ${isRunning || !isPomodoro ? 'invisible' : 'visible'}`}
            onClick={handleDecreaseSessionSecond}
          />
        </div>
      </div>

      <div className="flex gap-3 text-4xl">
        {isRunning ? (
          <Button bgColor="bg-red-800" onClick={pause}>
            {<VscDebugPause />}
          </Button>
        ) : (
          <Button disabled={minutes === 0 && seconds === 0} onClick={resume}>
            {<VscDebugStart />}
          </Button>
        )}
        <Button
          bgColor="bg-gray-900"
          onClick={() => restartPomodoroTimestamp(true)}
        >
          {<VscDebugRerun />}
        </Button>
        <Button bgColor="bg-gray-900" onClick={initPomodoroTimestamp}>
          {<VscDebugRestart />}
        </Button>
      </div>
    </div>
  )
}

export default Timer
