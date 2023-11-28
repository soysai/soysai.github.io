var hello = "hello world";
var int = 9;
var bool = true;

//var means variable 
// variables store values 
//basic values 
//string - text
// integer - number
// boolean - true/false 

console.log(hello);

//higher level data structures 
//array 
var fruits = ["apple","pear", "mango"];
console.log(fruits);
//console.log(fruits[0]); // get fruit 1

var randomFruitnumber = Math.floor(Math.random() * fruits.length);
document.body.innerText = fruits[randomFruitnumber];
// 0.1 * 3
console.log(fruits[randomFruitnumber]);
//helps create random fuit picker

var colors =["coral", "dodgerblue", "lime"];

var randomColornumber = Math.floor(Math.random() * colors.length);

document.body.style.backgroundColor = colors[randomColornumber];
//objects

var bookshelf = {
    "shlefOne" : {
    "books": ["book1","book 2"]
    "figurines": ["thing"],
    },
    "shelfTwo":"empty",
    "shelfThree": "big stuff"
}