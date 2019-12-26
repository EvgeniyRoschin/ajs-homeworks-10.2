class Team {
  constructor() {
    this.persons = {
      person1: {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10,
      },
      person2: {
        name: 'Пучник',
        type: 'Powman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10,
      },
      person3: {
        name: 'Ручник',
        type: 'Rowman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10,
      },
    };
  }

  * [Symbol.iterator]() {
    yield this.persons.person1;
    yield this.persons.person2;
    yield this.persons.person3;
    return true;
  }
}

const team = new Team();

for (const num of team) {
  console.log(num);
}
