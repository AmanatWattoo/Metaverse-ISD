import PromptSync from "prompt-sync";
let prompt=PromptSync();
let answer=[];
let wrong=[];
const title=("Pick the correct one form given options and write the answer");
console.log(title);
let q1=prompt("Islamabad is capital of which country?   a. Pakistan     b.  China      c.   Iran   ");
let q2=prompt("How many provinces are there in pakistan?   a. 1     b.  2      c.   5   ");
let q3=prompt("Variables are?   a. Fix     b.  Changable      c.   Both   ");
let q4=prompt("First Browser was?   a. Mozaiq     b.  Safari      c.   None of These.   ");
let q5=prompt("With respect to Area which is the largest Province of Pakistan ?   a. Punjab     b.  Sindh      c.   Balochistan   ");
let q6=prompt("Javasript invented by?   a. Billgate     b.  Brendan Eich      c.   Brendan Tailor   ");
let q7=prompt("Javasript invtented in year ?   a. 1995     b. 1990       c.   1993  ");
let q8=prompt("Inventor of Javascript belong to which country?   a. Rusia     b.  China      c.   Amarica   ");
let q9=prompt("Founder of Netscape ?   a. James H-clark     b.  Mark Andreessen      c.   both   ");
let q10=prompt("JavaScript is a ?  a. high-level     b. low-level      c.   both ")
for(let i=0;i<=10;i++){
    console.log(q1);
    console.log(q2);
    console.log(q3);
    console.log(q4);
    console.log(q5);
    console.log(q6);
    console.log(q7);
    console.log(q8);
    console.log(q9);
    console.log(q10);
}
if(q1==="Pakistan"|| q1==="a"){
    answer.push(q1);    
}
else{
    wrong.push(q1);
}
 if(q2==="5"|| q2=="c"){
    answer.push(q2);    
}
else{
    wrong.push(q2);
}
if(q3==="Changable"|| q3=="b"){
    answer.push(q3);    
}
else{
    wrong.push(q3);
}
 if(q4==="Mozaiq"|| q4=="a"){
    answer.push(q4);    
}
else{
    wrong.push(q4);
}
if(q5==="Balochistan"|| q5=="c"){
    answer.push(q5);    
}
else{
    wrong.push(q5);
}
 if(q6==="Brendan Eich"|| q6=="b"){
    answer.push(q6);    
}
else{
    wrong.push(q6);
}
if(q7==="1995"|| q7=="a"){
    answer.push(q7);    
}
else{
    wrong.push(q7);
}
 if(q8==="Amarica"|| q8=="c"){
    answer.push(q8);    
}
else{
    wrong.push(q8);
}
if(q9==="both"|| q9=="c"){
    answer.push(q9);    
}
else{
    wrong.push(q9);
}
 if(q10==="high-level"|| q10=="a"){
    answer.push(q10);    
}
else{
    wrong.push(q10);
}
if(answer.length>=5){
    console.log("Congrats you have cleared the quiz test & Your Marks out 10 are =",answer.length)
}
else{
    console.log("Failed best of luck for next time", wrong.length); 
}
// result status 
let status=("Result status is as")
console.log(status); 
console.log("Your Correct are =", answer, " & " ," Your wrong answer are=",wrong);