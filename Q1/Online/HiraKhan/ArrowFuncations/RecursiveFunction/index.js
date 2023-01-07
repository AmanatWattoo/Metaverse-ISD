function getRecursive (nmbr){
    console.log("Function Statd",nmbr)
    if(nmbr>1){
    getRecursive(--nmbr);
} else{
    console.log("Completed")
}
    console.log("Funcation ended", nmbr)
}
getRecursive(6);