import { useTimer } from 'react-timer-hook'
import { FaPersonRunning, FaPerson } from 'react-icons/fa6'
import {
  VscDebugStart,
  VscDebugPause,
  VscDebugRestart,
  VscEdit,
} from 'react-icons/vsc'
import { formatTimeUnit } from '../../utils/formatUtils'
import { generateTimestamp } from '../../utils/generateUtils'
import { getRandomMessage } from '../../utils/getUtils'
import Button from '../common/Button/Button'

function Timer({ expiryTimestamp }: { expiryTimestamp: Date }) {
  const { seconds, minutes, isRunning, pause, resume, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      sendNotification('세션 종료', getRandomMessage())
    },
    autoStart: false,
  })

  const initTimestamp = () => {
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

  return (
    <div className="w-[600px] h-screen flex flex-col justify-center items-center gap-5">
      <div className="text-8xl font-degital rounded text-green-900">
        <span>{formatTimeUnit(minutes)}</span>:
        <span>{formatTimeUnit(seconds)}</span>
      </div>
      <p className="text-4xl">
        {isRunning ? <FaPersonRunning /> : <FaPerson />}
      </p>
      <div className="flex gap-3 text-4xl">
        {isRunning ? (
          <Button onClick={pause}>{<VscDebugPause />}</Button>
        ) : (
          <Button onClick={resume}>{<VscDebugStart />}</Button>
        )}
        <Button onClick={initTimestamp}>{<VscDebugRestart />}</Button>
        <Button disabled={true} onClick={() => {}}>
          {<VscEdit />}
        </Button>
      </div>
    </div>
  )
}

export default Timer
