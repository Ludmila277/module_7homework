const users = [
  { name: "Гарри Поттер", age: 11 },
  { name: "Ричард Харрис", age: 69 },
  { name: "Альбус Дамблдор", age: 110 },
];

const filteredUsers = users.filter((user) => {
  return user.age >= 18;
});

const filteredName = users.map((user) => {
  return user.name;
});

console.log(filteredName);
