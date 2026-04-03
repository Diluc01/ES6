//Objects

const person = {
  name: "berlin",
  walk() {},
  talk() {},
};

person.talk();
person.name = "";

const targetMember = "name";
person[targetMember.value] = "John";
