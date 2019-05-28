'use script';

// Arrays (Tableaux)

let username1 = "Jeremy";
let username2 = "Toto";
let username3 = "Gio";

let usernames = ["Jeremy", "Toto", "Gio"];
console.log('usernames', usernames);

usernames[1] //premier élément etc..
usernames[2]
usernames[3]
let usernamesLenght = usernames.length // 3
usernames[usernamesLenght] // undefined
usernames[usernames.lenght - 1] // troisième élément
console.log('usernamesLenght', usernames.lenght)

let myArray = [[1,2,3], null, undefined, 2, [4,2,3]];
console.log('premier el du premier el', myArray [0][0]);

// Créer un tableau qui contient 3 tableaux.
//logguez dans la console le deuxième élément du premier
//élément.
//Logguez dans la console le dernier élément du dernier élément

// TRANSFORMER LES TABLEAUX :shift, unshift, push, pop, concat
const myArr = ['Hello', 'Bonjour', 'Hola'];
console.log(myArr);

// push (ajouter un élément à la fin)
myArr.push('Hallo');
console.log('après le push', myArr);

// unshift (ajouter un élément au début d'un tableau)
myArr.unshift('Nihao');
console.log('après le unshift', myArr);

// pop (supprimer le dernier élément)
myArr.pop();

// shift (supprimer le premier élément)
myArr.shift();
console.log('RESULT: myArr', myArr);

let tab = [1,2,3,4,5,6,7];
console.log('tab', tab);
tab.shift();
tab.pop();
console.log('RESULT: tab', tab);
tab.unshift(10);
console.log('10', tab);
tab.push(100);
console.log('100', tab);

let arr1=[1,2,3]
let arr2=[4,5,6]
let result = arr1.concat(arr2);
console.log('concat result', result);

let tab1 = [1,2,3];
let tab2 = [4,5,6];
let tab3 = [7,8,9,10];
let tab4 = [11,12,13,14];
let resultat = tab1.concat(tab2, tab3, tab4);
console.log('concat resultat', resultat);

let myString = 'Bonjour!';
// split transformer string en tableau
console.log(myString.split()) //['B', 'o', 'n',...]
// reverse (sert à inverser un tableau)
let myArr3 = myString.split();
// join (transformer un tableau en une chaine de caractères)
let rest = reversedArr.join('');
console.log('rest', rest);

// enchainer les méthodes : reverseArr.reverse().join()

//PARCOURIR UN TABLEAU
//map ou forEach

let myNum = [1,2,3,4,5,6,7,8,9];
myNum.forEach((elem) => {
  console.log('my array element', elem);
});

let myTab2 = ['What', 'A', 'Wonderful', 'World'];
myNum.forEach((elem) => {
  console.log('my array element', elem);
});

let test =''; // à l'extérieur du forEach
test += 'Hello'; // à l'intérieur du forEach
