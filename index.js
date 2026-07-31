// for(let i=50;i>=20;i--){
//     // document.write(i+"</br>")
//     if(i %2===0){
// document.write(i+"is even number"+"</br>");
//     }
//     else{
//         document.write(i+"is odd number"+"</br>");
//     }
// } 
// Write a JavaScript function named sayHello that prints “Hello, world!” when it is 
// invoked. Call the function.’ 

// function sayHello()
// {
//     document.write("Hello,world");
// }
// sayHello();
// sayHello();

// function greet(name){
//     document.write(name+"<br>");
// }
// greet("mutoni");
// greet("kalisa");

// function grade(marks){
//     if(marks>=80)
//     {
//         return "A"
//     }
//     if(marks>=60){
//         return "B"
//     }
//     if (marks>=50){
//         return "C"
//     }
//     return ("fail")
// }
// let marks=parseInt(prompt("enter marks"));
// document.write(grade(marks));

// function calculateSquare(a){
//     return a**2
// }
//     document.write(calculateSquare(4));



// function addnumber (a,b)
// {
//     return a+b;
// }
// console.log(addnumber(3,5));
// function showMessage ()
// {
//     document.write("invoke it")
// }
// showMessage();

// displaying date
// const displayDate = function()
// {
//     document.write(Date());
// }
// displayDate()

// const multiply =function (a,b)
// {
// return a*b;
// }
// document.write(multiply(3,2));
// const person={
//     name:"john",
//     age:25,
//     'favorite color':'blue'
// };
// console.log(person.name);
// console.log(person.age);
// console.log(person['favorite color']);
// const student={
//     name:"kevin",
//     age:30,
//     marks:70

// };{
// console.log(student.name);
// console.log(student.age);
// console.log(student.marks);
// }
// const product={
//     name:"banana",
//     price:600,
//     quantity:300
// };
// let totalCost = product.price* product.quantity;
// console.log(product.name);
// console.log("total cost:"+totalCost);

// exercise 3
// const employee = {
//   name: "Alice",
//   position: "Accountant",
//   salary: 10000
// };
// const increase = 50000;
// if (employee.salary <increase) {
//   employee.salary=employee.salary+increase;
// }
// console.log( employee.name);
// console.log( employee.position);
// console.log(employee.salary);
// Create a user object

// exercise 4

// const user = {
//   username: "admin",
//   password: "12345"
// };

// let EnterUsername = "admin";
// let EnterPassword = "12345";

// if (
//   EnterUsername === user.username &&
//   EnterPassword === user.password
// ) {
//   console.log("Login successful!");
// } else {
//   console.log("Invalid username or password.");
// }


// const book = {
//   title: "Things Fall Apart",
//   author: "Chinua Achebe",
//   isAvailable: true
// };

// if (book.isAvailable) {
//   console.log ("book is available ");
// } else {
//   console.log(" book is not vailable");
// // }

// const car = {
//   brand: "Toyota",
//   model: "Corolla",
//   year: 2026
// };
// console.log("This car is:","brand:"+car.brand);
// console.log()



// const contact = {
//   name: "Jane Smith",
//   phoneNumber:"07888856"
// };

// console.log(contact.name);
// console.log(contact.phoneNumber);


// const studentMarks = [85, 92, 78, 90, 88];
// let totalMarks = 0;
// console.log("Student Marks");
// for (let i = 0; i < studentMarks.length; i++) {
//   console.log(studentMarks);
//   totalMarks += studentMarks[i];
// }
// const averageMark = totalMarks / studentMarks.length;
// console.log('Average Mark');


// const numbers= new Array(5);
// numbers[0]=Number(prompt("enter first number"));
// numbers[1]=Number(prompt("enter second number"));
// numbers[2]=Number(prompt("enter third number"));
// numbers[3]=Number(prompt("enter fourth number"));
// numbers[4]=Number(prompt("enter fifth number"));
// let largest = numbers[0];
// let smallest = numbers[0];
// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > largest) {
//     largest = numbers[i];
//   }
//   if (numbers[i] < smallest) {
//     smallest = numbers[i];
//   }
// }
// console.log("Largest Number",+largest);
// // console.log("Smallest Number"+smallest);

// const numbers = new Array(6);
// numbers[0]=Number(prompt("enter  number"));
// numbers[1]=Number(prompt("enter number"));
// numbers[2]=Number(prompt("enter  number"));
// numbers[3]=Number(prompt("enter  number"));
// numbers[4]=Number(prompt("enter  number"));
// numbers[5]=Number(prompt("enter  number"));

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//    console.log("evenNumber:"+numbers[i]); 
//   }
//   else{
//     console.log("oddNumber:"+numbers[i]);
//   }
// }


// let employee={
//     name:prompt("enter employee name:"),
//     position:prompt("enter employee position"),
//     salary:Number(prompt("enter employee salary"))
// };
// let limit=Number(prompt("enter salary limit"));
// let increment=Number(prompt("enter increment amount"));
// if(employee.salary <limit){
//     employee.salary=employee.salary+increment;
// }
// console.log("employee Name:",employee.name);
// console.log("position:",employee.position);
// console.log("final salary:",employee.salary);
// const addnumber=(a,b)=>a+b
// document.write (addnumber(2,3));

