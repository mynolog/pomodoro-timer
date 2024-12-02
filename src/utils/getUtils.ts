import { POMODORO_MESSAGES, BREAK_MESSAGES } from '../constants/messages'

export const getRandomMessage = (type: 'pomodoro' | 'break') => {
  let index
  switch (type) {
    case 'pomodoro':
      index = Math.floor(Math.random() * POMODORO_MESSAGES.length)
      return POMODORO_MESSAGES[index]
    case 'break':
      index = Math.floor(Math.random() * BREAK_MESSAGES.length)
      return BREAK_MESSAGES[index]
    default:
      return POMODORO_MESSAGES[0]
  }
}
