let raj  = "line number 1";

function outer (){
    let raj = " line 4 ";
    function innerOne(){
        let raj ="line 6    "
        console.log("m from inner one "+ raj);
        
    }
    function innertwo(){
        console.log("m from inner two "+ raj);
        
    }
    innerOne();
    innertwo();
}
 
outer();