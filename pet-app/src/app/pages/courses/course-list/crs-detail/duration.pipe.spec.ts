import {DurationPipe} from './duration.pipe';

describe('DurationPipe', () => {
  const pipe = new DurationPipe();

  it('transforms "60" to "1h"', () => {
    expect(pipe.transform(157)).toBe('2h 37 mins');
  });

  it('transforms "120" to "2h"', () => {
    expect(pipe.transform(120)).toBe('2h ');
  });

  it('transforms "126" to "2h 06 min"', () => {
    expect(pipe.transform(126)).toBe('2h 6 mins');
  });

  it('transforms "1" to "1 min"', () => {
    expect(pipe.transform(1)).toBe('1 min');
  });
});
