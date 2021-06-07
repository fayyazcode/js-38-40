//Q1
 
// function power(a,b){
//  var res=Math.pow(a,b)
//  console.log(res)
// }
// power(2,3)

//Q2

// function checkLeapYear(year) {

//     var leap = new Date(year, 1, 29).getDate() === 29;
//     if (leap) {
//         console.log(year + ' is a leap year');
//     } else {
//         console.log(year + ' is not a leap year');
//     }
// }

// // take input
// var year = prompt('Enter a year:');

// checkLeapYear(year);

//Q3
// var a = 5; 
// var b = 6; 
// var c = 7; 


// function one(a,b,c){
//     var s=0;
//      s = (a + b + c)/2;
//      return s;
// }
// var s = one(a,b,c);
// console.log(s)

// function two(a,b,c,s){
//     var area=0;
//     area=(s*((s-a)*(s-b)*(s-c)));
//    return area;
// }
// var area=two(a,b,c,s)
// console.log(area)

//Q4


// function main(){
//     var english=+prompt("Enter English marks")
//     var maths=+prompt("Enter Maths marks")
//     var computer=+prompt("Enter Computer marks")
//     var avg=0;
//     var per=0;
//     function average(a,b,c){
//         avg=a+b+c
//         // return avg;
//     }
//     average(english,maths,computer)
//     console.log(avg)
//     function percentage(a){
//         per=(a/300)*100;
//     }
//     percentage(avg)
//     console.log(per)
// }
// main()

//Q5
// function check(){
//     var char=prompt("Enter a character")
//     var name ="abcdefghijklmnopqrstuvwxyz";
//     console.log(name.length)
//     for(var i=0;i<name.length;i++){
//         var charCheck=name[i]
//         if(char==charCheck){
//             console.log("Index is "+i)
//             break
//         }
       
//         else{
//             "invalid  input"
//         }
//     }
    
// }
// check()

//Q6
// function vowel(str) {             
//     let newString = " ";                            
//     for (let i = 0; i < str.length; i++)  
// {           
//       if (str[i] != "a" && str[i] != "e" && str[i] != "i" && str[i] != "o" && str[i] != "u")                                   
//        {           
//        newString += str[i];         
//       };   
//     };   
//     return newString;   
//   };  
//   console.log(vowel(prompt("Enter a string to remove vowels")));