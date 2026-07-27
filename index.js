// for(let i=50;i>=20;i--){
//     // document.write(i+"</br>")
//     if(i %2===0){
// document.write(i+"is even number"+"</br>");
//     }
//     else{
//         document.write(i+"is odd number"+"</br>");
//     }
// }
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
function grade(marks){
    if(marks>=80)
    {
        return "A"
    }
    if(marks>=60){
        return "B"
    }
    if (marks>=50){
        return "C"
    }
    return ("fail")
}
let marks=parseInt(prompt("enter marks"));
document.write(grade(marks));