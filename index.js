// Primitive Data Type

//String ("",'')
let name = "Adi";
const student = "Fadhik";
var merk = "BMW";

//Integer / Number
//Integer = Bilangan Genap
let int = 2;

//Float = Bilangan Desimal
let float = 2.5;

//Boolean = Tipe data pembanding, true / false (0 / 1)
var isSleeping = false;
var isStudying = true;

var value1 = 20,
  value2 = 30,
  value3 = 40;

//Null = Tipe data ini berfungsi untuk memberikan nilai 0
var score = null;

// var score = ""
// var score = 0
// var score = false

//Undifined = Tidak terdefinisi
var value;

document.write(typeof name === "string");
document.write("<br>");
document.write(typeof int === "number");
document.write("<br>");
document.write(typeof float === "number");

document.write("<br>");
document.write("<br>");
// ????
document.write(value1 < value2);

document.write("<br>");
// ???
document.write(value1 > value3);

document.write("<br>");
document.write("<br>");
document.write(isSleeping + "<br>");
document.write(isStudying + "<br>");

//Object
//Array
//Date

let emptyObject = {};

let car = {
  model: "Mercedess-Benz",
  color: "White",
  doors: 3,
  ProductAvail: true,
};
//   {
//     model: "BMW",
//     color: "Black",
//     doors: 3,
//     ProductAvail: true,
//   },

let students = ["Adi", "Erfan", "Dony"];

Date();
var currentDate = new Date();

console.table(emptyObject);
console.table(car);
console.table(students);
console.log(car.model);
console.log(students[1]);

console.log(currentDate);
