import faker from "faker";

export function getFriends() {
  let friends = [];

  for (let i = 0; i < 5; i++) {
    friends.push({
      image: faker.image.avatar(),
      name: faker.name.firstName(),
      online: faker.random.boolean(),
      active: false,
      id: faker.random.uuid()
    });
  }

  return friends;
}

export function getMessages() {
  let messages = [];

  for (let i = 0; i < 7; i++) {
    messages.push({
      text: faker.lorem.sentence(),
      isOwner: faker.random.boolean(),
      date: faker.date.recent(1),
      id: faker.random.uuid()
    });
  }

  return messages.sort((a, b) => a.date.getTime() - b.date.getTime());
}