import PromptSync from "prompt-sync"
function missingArray(arr1){
    let missingArray = [];
    let minNum=Math.min(...arr1)
    let maxNum=Math.max(...arr1)
    for(let i=minNum; i<maxNum; i++){
        if(arr1.indexof(i)<0){
            missingArray.push(i);
        }
    }
    return missingArray;
}

let arr1 = [11, 15, 17, 18, 19];
console.log(missingArraylet[11, 15, 17, 18, 19]);
console.log(missingArray([]))