export function formatTime (time: number) {
  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  return `${ padNumber(minutes) }:${ padNumber(seconds) }`
}

function padNumber (number: number) {
  return number < 10 ? `0${ number }` : number
}
