const QUARTILES = [
  [0.0, 'start'],
  [0.25, 'firstQuartile'],
  [0.5, 'midpoint'],
  [0.75, 'thirdQuartile'],
  [0.99, 'complete'],
]

export default class QuartileSupport {
  constructor() {
    this.seenQuartiles = []
    this.callbacks = []
    this.currentTime = 0
    this.duration = Infinity
  }

  setDuration(time) {
    if (time != 0) {
      this.duration = time
    }
    this.checkForQuartileEvent()
  }

  onQuartileChange(func) {
    this.callbacks.push(func)
  }

  setCurrentTime(currentTime) {
    this.currentTime = currentTime
    this.checkForQuartileEvent()
  }

  // private

  checkForQuartileEvent() {
    const percentComplete = this.currentTime / this.duration
    const matchingQuartiles = QUARTILES.filter(quartile => {
      return quartile[0] < percentComplete
    })

    matchingQuartiles.forEach(quartile => {
      const [percent, name] = quartile
      if (!this.seenQuartiles.includes(percent)) {
        this.seenQuartiles.push(percent)
        this.quartileChangeCallback(name)
      }
    })
  }

  quartileChangeCallback(quartileName) {
    this.callbacks.forEach(fn => fn.call(null, quartileName))
  }
}
