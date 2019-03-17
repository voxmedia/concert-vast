export default class Timecode {
  /**
   * Converts seconds to a three segment timecode hh:mm:ss
   * Examples: 30 => "00:00:30"
   *           90 => "00:01:30"
   *
   * @param {String|Number} maybeSeconds
   * @returns {String} "hh:mm:ss" timecode
   */
  static secondsToTimecode(maybeSeconds) {
    const seconds = Number(maybeSeconds);

    if (isNaN(seconds) || maybeSeconds.toString().indexOf('%') != -1) {
      return null;
    }

    const date = new Date(null);
    date.setSeconds(seconds);
    return date.toISOString().substr(11, 8);
  }

  /**
   * Converts timecode hh:mm:ss to total seconds
   * Examples: "00:00:30" => 30
   *           "00:10:10" => 610
   *
   * @param {String} timecode Timecode input
   * @returns {Number} the number of seconds represented in the timecode
   */
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

  /**
   * Will properly format the timecode into three segment parts
   * Example: "01:10" => "00:01:10"
   *
   * @param {String} code input timecode
   * @returns {String} three segment timecode hh:mm:ss
   */
  static timecodeToTimecode(code) {
    const result = this.secondsToTimecode(this.timecodeToSeconds(code));
    return result;
  }
}
