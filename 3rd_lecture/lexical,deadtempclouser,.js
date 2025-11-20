let raj = "m from global";

function outers(){
    let raj  = "m from iuterinside line number 4";
    function innerfun_One(){
         let raj  = "m from iuterinside line number 6";
        console.log("m from fun one "+ raj);
        
    }
    function innerfun_Two(){

        console.log("m from inner two "+ raj);
        
    }
    innerfun_One();
    innerfun_Two();
}
outers();