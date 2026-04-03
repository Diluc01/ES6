// var -> function scope
// let -> block scope
// const -> block scope also

function sayHello() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }

  console.log(i);
}

sayHello();

function sayHello2() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }

  console.log(i);
}

sayHello2();

const x = 1;
x = 2;
