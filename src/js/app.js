/* eslint-disable no-unused-vars */
export default class Team {
  constructor() {
    this.persons = [
      {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10,
      },
      {
        name: 'Пучник',
        type: 'Powman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10,
      },
      {
        name: 'Ручник',
        type: 'Rowman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10,
      },
    ];
  }

  * [Symbol.iterator]() {
    for (const person of this.persons) {
      yield person;
    }
  }
}
