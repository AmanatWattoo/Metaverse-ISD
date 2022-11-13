let mywork=[];
for(i=1;i<11;i++){
    let status= i%2 ? true:false;
    let temp={
        name: `Lession: ${i}`, status: status
    }
    mywork.push(temp);
}
console.log(mywork);