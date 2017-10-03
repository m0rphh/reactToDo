// function add (a, b) {
//   return a+b;
// }
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
// var toAdd2 = [12, 5];
//
// console.log(add(...toAdd2));

// var groupA = ['Milica', 'Svetozar'];
// var groupB = ['Dabac', 'Radoja'];
//
// var final = [...groupB ,3, ...groupA];
//
// console.log(final);

var person = ['Milica', 25, 'Novi Becej'];
var person2 = ['Zeljko', 33, 'Novi Knezevac'];

var persons = [...person, ...person2];
function greet (name, age, town) {

      console.log('Cao ' + name +', ti si ' + age + ' iz ' + town);
}
greet(...person);
greet(...person2);









var names = ['Pavor', 'Javor'];
var final = ['Goran', ...names];

final.forEach(function(name){
  console.log('Cao' + ' ' + name);
});



console.log(final);
