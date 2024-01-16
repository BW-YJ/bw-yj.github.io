export const dayCounter = (timeStamp: any) => {
  const days = Math.floor(timeStamp / (1000 * 60 * 60 * 24))
  if (days < 0) return '00'
  if (days < 10) return `0${days}`
  return days
}

export const hourCounter = (timeStamp: any) => {
  const hours = Math.floor((timeStamp % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  if (hours < 0) return '00'
  if (hours < 10) return `0${hours}`
  return hours
}

export const minuteCounter = (timeStamp: any) => {
  const minutes = Math.floor((timeStamp % (1000 * 60 * 60)) / (1000 * 60))
  if (minutes < 0) return '00'
  if (minutes < 10) return `0${minutes}`
  return minutes
}

export const secondCounter = (timeStamp: any) => {
  const seconds = Math.floor((timeStamp % (1000 * 60)) / 1000)
  if (seconds < 0) return '00'
  if (seconds < 10) return `0${seconds}`
  return seconds
}
