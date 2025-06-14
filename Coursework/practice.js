console.log('hello world');
let number = 55;
console.log(number);
let a = [];
a.push(23);
a.push(65);
console.log(a);
a.unshift(90);
console.log(a);
let b = a.pop();
console.log(a);
console.log(b);
let teacher = {
    name: "ali",
    age: 30,
    subject: "english"

};
console.log(teacher);
let teachers = [];
teachers.push(teacher);
teachers.push({ name: "aina", age: 34, subject: "maths" });
teachers.push({ name: "alina", age: 35, subject: "computer" });
console.log(teachers);
teachers.forEach(element => console.log(element));
