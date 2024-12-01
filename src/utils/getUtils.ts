import { MESSAGES } from '../constants/messages'

export const getRandomMessage = () => {
  const index = Math.floor(Math.random() * MESSAGES.length)
  return MESSAGES[index]
}
