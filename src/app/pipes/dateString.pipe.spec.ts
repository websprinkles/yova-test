import { DateStringPipe } from './dateString.pipe';

describe('DateStringPipe', () => {
  it('create an instance', () => {
    const pipe = new DateStringPipe();
    expect(pipe).toBeTruthy();
  });
});
