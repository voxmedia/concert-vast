export default class Timecode {
  static secondsToTimecode(maybeSeconds) {
    const seconds = Number(maybeSeconds);

    if (isNaN(seconds) || maybeSeconds.toString().indexOf('%') != -1) {
      return null;
    }

    const date = new Date(null);
    date.setSeconds(seconds);
    return date.toISOString().substr(11, 8);
  }

  static timecodeToSeconds(timecode) {
    let parts = timecode.split(':');
    let seconds = 0;
    let multiplier = 1;

    while (parts.length > 0) {
      seconds += multiplier * parseInt(parts.pop(), 10);
      multiplier *= 60;
    }
    return seconds;
  }

  static timecodeToTimecode(code) {
    const result = this.secondsToTimecode(this.timecodeToSeconds(code));
    return result;
  }
}
