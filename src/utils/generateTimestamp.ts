export const generateTimestamp = (ms: number): Date => {
  const timestamp = new Date()
  timestamp.setSeconds(timestamp.getSeconds() + ms)
  return timestamp
}
