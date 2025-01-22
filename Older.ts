type User = {
  name: string;
  age: number;
};

const getOlderUser = (user: User, otherUser: User) => {
  if (user.age > otherUser.age) {
    return user;
  } else {
    return otherUser;
  }
};

console.log(getOlderUser({ name: "John", age: 30 }, { name: "Jane", age: 25 }));
