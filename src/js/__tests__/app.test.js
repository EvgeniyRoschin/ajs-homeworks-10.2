/* eslint-disable linebreak-style */
import Team from '../app';

const team = new Team();
const iterator = team[Symbol.iterator]();

test('First', () => {
  expect(iterator.next().value).toEqual({
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('Second', () => {
  expect(iterator.next().value).toEqual({
    name: 'Пучник',
    type: 'Powman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('Third', () => {
  expect(iterator.next().value).toEqual({
    name: 'Ручник',
    type: 'Rowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('Done', () => {
  expect(iterator.next().done).toBe(true);
});
