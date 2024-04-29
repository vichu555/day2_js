// conditional statements
/*
//odd/even
let num=9;
if(num%2===0){
    console.log(`given number ${num} is even`)
}
else{
    console.log(`given number ${num} is odd`)
}
*/
//leap year/not a leap year
/*
let yr=2028;
if(yr%4===0){
    console.log(`given year ${yr} is leap year`)
}
else if(yr%100===0){
    console.log(`given year ${yr} is leap year`)
}
else if(yr%400===0){
    console.log(`given year ${yr} is leap year`)
}
else{
    console.log(`given year ${yr} is not leap year`)
}
*/
// 3.largest two numbers
/*
let num1=5;
let num2=8;
let large=(num1 > num2) ? num1 :num2;
console.log(`largest number ${large}`)
*/
//4.student pass/fail 
/*
let mark=65;
if(mark > 35){
    console.log(`student passed the exam with ${mark} marks`)
}
else{
    console.log(`student failed the exam with ${mark} marks`)
}
*/
//5.student grade system
/*
let mark=75;
if(mark > 90){
    console.log(`student secured 'S' grade`)
}
else if(mark > 80){
    console.log(`student secured 'A' grade`)
}
else if(mark > 70){
    console.log(`student secured 'B' grade`)
}
else if(mark > 60){
    console.log(`student secured 'C' grade`)
}
else if(mark > 50){
    console.log(`student secured 'D' grade`)
}
else if(mark > 40){
    console.log(`student secured 'E' grade`)
}
else{
    console.log(`student secured 'F' grade`)
}
*/
//6.largest three numbers
/*
let a=15;
let b=6;
let c=18;
let temp=a > b ? a :b;
let largest=temp > c ? temp:c;
console.log(`The largest number among three numbers is ${largest}`)
*/
//7.positive/negative/nor
/*
let number=0;
if(number >0){
    console.log(`given number ${number} is positive`)
}
 else if(number < 0){
    console.log(`given number ${number} is negative`)
}
else{
    console.log(`given number ${number} is neither positive nor negative`)
}
*/
//8.vowels /not a vowels
/*
let letter='y';
if(letter==='a' || letter==='e' || letter==='i' || letter==='o' || letter==='u'){
    console.log(`given character ${letter} is vowel`)
}
else{
    console.log(`Given character ${letter} is not a vowel`)
}
*/
//9.number /not a number
/*
let num="9876";
if(!isNaN(num)){
console.log(`${num} is a number`)
}
else{
    console.log(`${num} is not a number`)
}
*/

//10.alphabet/not an alphabet
/*
let alpha="V";
if(alpha >= 'a' && alpha <='z' || alpha >='A' && alpha <= 'Z'){
    console.log(`given letter ${alpha} is alphabet`)
}
else{
    console.log(`given letter ${alpha} is  not an alphabet`)
}
*/

//11.arithmetic calculator(using switch case)
/*
let symbol='%';
let a=5;
let b=4;
switch(symbol){
    case '+':{
            console.log(a+b);
            break;}
        case '-':{
                console.log(a-b);
                break;}
            case '*':{
                    console.log(a*b);
                    break;}
            case '/':{
                console.log(a/b);
                break;}
            case '%':{
                    console.log(a%b);
                    break;}
                default:
                    break;

}
*/
//12.week(switch case)
/*
let day="saturday";
switch(day){
    case 'sunday':{
            console.log("today is sunday");
            break; }
        case 'monday': {
            console.log("today is monday");
            break;}
        case 'tuesday':{
            console.log("today is tuesday");
            break;}
        case 'wednesday':{
            console.log("today is wednesday");
            break;}
        case 'thursday':{
            console.log("today is thursday");
            break; }
        case 'friday':{
            console.log("today is friday");
            break;}
        case 'saturday':{
            console.log("today is saturday");
            break; }
        default:{
              break;}
}
*/
