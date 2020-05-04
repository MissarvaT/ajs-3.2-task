/* eslint-disable no-undef */
import compareHealth from '../app';

test('returns correct sequence', () => {
  const result = compareHealth([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'эльф', health: 80 },
    { name: 'гном', health: 55 },
  ]);
  expect(result).toEqual([
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'эльф', health: 80 },
    { name: 'гном', health: 55 },
    { name: 'мечник', health: 10 },
  ]);
});
