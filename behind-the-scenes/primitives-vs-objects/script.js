'use strict';

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
    name:'jonas',
    age:30,
};


const friend = me;
friend.age = 27;
console.log('Friend:' , friend);
console.log('Me',me);


const jessica2 ={
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};
 const jessicaCoppy =Object.assign({},jessica2);
 jessicaCoppy.lastName ='Davis';
 console.log('Before marriage', jessica2);
 console.log('After marriage', jessicaCopy);

