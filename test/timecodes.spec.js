import Timecodes from '../src/lib/timecodes';

describe('Timecode utility', () => {
  it('should convert seconds to timecode', () => {
    expect(Timecodes.secondsToTimecode(30)).toBe('00:00:30');
    expect(Timecodes.secondsToTimecode(90)).toBe('00:01:30');
    expect(Timecodes.secondsToTimecode('30')).toBe('00:00:30');
  });

  it('should convert timecode to seconds', () => {
    expect(Timecodes.timecodeToSeconds('00:00:30')).toBe(30);
    expect(Timecodes.timecodeToSeconds('00:01:30')).toBe(90);
  });

  it('should convert partial timecode to full timecode', () => {
    expect(Timecodes.timecodeToTimecode('00:30')).toBe('00:00:30');
  });
});
