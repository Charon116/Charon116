// console.log('hello');
// alert('hello this is Charon');

//Variables
// var b = 'smoothie';
// console.log(b);

// var someNumber = 45;
// console.log(someNumber);

// document.getElementById('someText').innerHTML = 'Hey There';

// var age =prompt('What is your age ?');
// document.getElementById('someText').innerHTML = age;

//Numbers in Javascript
// var num1 =10;
// num1--;
// console.log(num1);

//Functions
/*
1.Create a function
2.Call a function
*/

//create
// function fun(){
//     alert('this is a function')
// }
// //Call
// fun();

//example
// function call(){
//     var name = prompt('What is your name?');
//     var result = 'Hello'+' '+name;
//     console.log(result);
// }
// call();

//add 2 numbers together in a function
// function sumNumber(num1,num2){
//     var result = num1 + num2;
//     console.log(num1+num2);
// }
// sumNumber(1,2);
// sumNumber('10','10');

//While loops
// var num = 0 ;
// while(num<100){
//     num+=1;
//     console.log(num);
// }

//For loops
// for(let num=0; num<10; num++ ){
//     console.log(num);
// }

//Data types
let yourAge = 18; //numer
let yourName = 'bob'; //string
let name ={first:'Jane', last:'Doe'};//object
let truth = false; //boolean
let groceries =['apple','banana','orange']; // array
let random; // undefined
let nothing =null; // value null

//Strings in Javascript(common methods)
let fruit ='banana';
let moreFruits ='banana\napple';// new line
// console.log(fruit.length); // length
console.log(fruit.indexOf('a'));
// console.log(fruit.slice(0,2));
// console.log(fruit.replace('ban',2));
// console.log(fruit.toUpperCase());
// console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
// console.log(fruit[3]);
// console.log(fruit.split('')); //split by character
// console.log(fruit.split(',')); //split by comma

//Array
let fruits = ['banana','apple','orange','pineapples'];
fruits = new Array('banana','apple','orange','pineapples');
// console.log(fruits[3]); //access value at index 3th

fruits[0]= 'pear';
// console.log(fruits);
for(let i=0; i<fruits.length; i++){
    // console.log(fruits[i]);
}

//array common methods
// console.log('to String', fruits.toString());
// console.log(fruits.join(' + '));
// console.log(fruits, fruits.pop(), fruits);
// console.log(fruits.push('berry'),fruits);
fruits[fruits.length] = 'new fruit';//same as push
// console.log(fruits);

let vegetables = ['asparagus','tomato','brocoli'];
let allGroceries =fruits.concat(vegetables);
// console.log(allGroceries);
// console.log(allGroceries.slice(0,4));
// console.log(allGroceries.reverse());
// console.log(allGroceries.sort());

let someNumbers = [5 ,10, 2, 25, 3, 65, 130, 513, 98, 653, 121, 45]
// console.log(someNumbers.sort(function(a,b){return(a-b)})); //sorted in ascending order
// console.log(someNumbers.sort(function(a,b){return(b-a)})); //sorted in descending order

let emptyArray = new Array();
for (let num = 0; num <= 10; num++) {
    emptyArray.push(num);
}
// console.log(emptyArray);


//Objects in Javascript
//dictionaries in Python
let student ={
first:'charon',
last:'nam', 
age:25, 
height:162,
studentInfo: function(){
    return this.first + '\n' +this.last + '\n';
}
};

// console.log(student.first);
// console.log(student.last);
// student.first = 'notCharon'; //change value
// console.log(student.first);
student.age++;
// console.log(student.age);

// console.log(student.studentInfo());


//Conditionals, Control flows (if else)
//18-35 is my target demographic
// var age = prompt('what is your age ?');
// if((age >=10) && (age<=35)){
//     status ='target demo';
//     console.log(status);
// }else{
//     status ='not my audience';
//     console.log(status);
// }


/*built-in
1.Alert
2.Console
3.Confirm
4.Prompt
5.Set timeout
6.Set interval
*/

/*Object constructor
function User(firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function(){
        return '${this.firstName} ${this.lastName}'
    }
}
User.prototype.className = 'F8';//THUOC TINH
User.prototype.getClassName = function(){
    return this.className;
}
console.log(user.className);
console.log(user2.className);

author.title = 'asjdlansd';
user.comment = 'aknsdlasd';

var author = new User('Quang','Le','Avatar');
var user = new User('Nam','Nguyen','Avatar');
*/

/* Nested loop
var myArray = [
    [1, 2],
    [3, 4],
    [5, 6],
];

for(var i =0 ; i< myArray.length; i++){
    for(var j =0; j< myArray[i].length; j++){
        console.log(myArray[i][j]);
    }
}
*/

/*Array
forEach();
every();ktra tat ca dieu kien trong mang tra ve boolean
some();ktra 1 trong tat ca dat dc dieu kien tra ve boolean
find();lap qua cac phan tu, ktra den phan tu dat dieu kien se tra ve
filter(); khac voi find() ktra tat ca cac phan tu dat dieu kien in ra
*/

//alo ta thay doi dc chua
