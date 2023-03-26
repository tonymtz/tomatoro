export interface TimerState {

  isRunning: boolean
  isStarted: boolean
  time: number
  totalTime: number
}

export interface TimerStore extends TimerState {
  reset(): void

  setTotalTime(param: number): void

  start(): void

  stop(): void

  tick(): void
}
