function jan(weather){
    setTimeout(function() {
       weather("Cold") 
    },2000)
}
function Feb(weather){
    setTimeout(function(){
        weather("Cool")
    },1500)
}
function July(weather){
    setTimeout (function(){
        weather("Hot")
    })
}
jan(function(weather){
    console.log(weather);
});
Feb(function(weather){
    console.log(weather);
});
July(function(weather){
    console.log(weather);
});