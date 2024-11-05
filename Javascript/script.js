// function getMilk(amount){
//     var bottles=amount/1.5;
//     var change=amount%1.5;
//     console.log("You get ",Math.floor(bottles)," bottles of milk.");
//     return `Your change is ${change} `;
// }
// // BMI calculator

// function bmiCalc(weight,height){
//     console.log(Math.round(weight / height ** 2))
// }

// let a=1;
// let b="1";

// if(a=b){
//     console.log("yes")
// }else{
//     console.log("no")
// }

// var playing11=["Babar","Rizwan","Fakhar","Shan","Saim","Haris","Afridi","Naseem"]

// player=prompt("Enter your name")

// if(playing11.includes(player)===true){
//     alert("Your are in the playing 11,Good luck")
// }else{
//     alert("sorry,you are not in the playing 11,Hard luck")
// }

// var output=[];
// count=1
// function fizzBuzz() {
//     if (count % 3 === 0 && count % 5 === 0) {
//         output.push('FizzBuzz');
//     } else if (count % 3 === 0) {
//         output.push('Fizz');
//     } else if (count % 5 === 0) {
//         output.push('Buzz');
//     } else {
//         output.push(count);
//     }
//     count++;
//     console.log(output)
// }

// Whos paying for lunch

// var family=['Virat','Anushka','Babar','Vamika','Akaay','Kesrick','Naveen']

// function whosPaying(){
//     randNum=Math.floor((Math.random()*family.length));
//     console.log(family[randNum],"is paying the bill.")
//     console.log(randNum)
// }

// //FizzBuzz Game using loops
// function fizzBuzz(){
// while(count<=100){
//     if (count % 3 === 0 && count % 5 === 0) {
//         output.push('FizzBuzz');
//     } else if (count % 3 === 0) {
//         output.push('Fizz');
//     } else if (count % 5 === 0) {
//         output.push('Buzz');
//     } else {
//         output.push(count);
//     }
//     count++;
    
// }console.log(output)}

// function fizzBuss(){
//     for(i=1;i<=100;i++){
//         if (i % 3 === 0 && i % 5 === 0) {
//             output.push('FizzBuzz');
//         } else if (i % 3 === 0) {
//             output.push('Fizz');
//         } else if (i % 5 === 0) {
//             output.push('Buzz');
//         } else {
//             output.push(i);
//         }
        
//     }console.log(output)
// }



function generator(n){
    let sequence=[]
    if(n===1){
        sequence.push(0)
    }else if(n===2){
        sequence.push(0,1)
    }else{
        sequence.push(0,1);
        for(let i=2;i<n;i++){
            sequence.push(sequence[i-2]+sequence[i-1]);
        }
    }return sequence
}