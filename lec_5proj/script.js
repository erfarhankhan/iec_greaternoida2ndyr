let x = 5 ;//computer x
let input_showEl = document.getElementById("input_show");
let show_resultEl = document.getElementById("show_result");
let leftattempt_showEl = document.getElementById("leftattempt_show");
let btnEl = document.getElementById("btn");
let attempt = 3;
let resettbtnEl = document.getElementById("resettbtn");
let hidedataEl = document.getElementById("hidedata");
let mynum;

function btnHandler(){
    mynum = input_showEl.value;
    console.log("btnhandler clock");
    if (mynum== x) {
        console.log("u won the game ");
        
    } else {
        console.log("u lose the game");
        
    }
    // if (mynum == x) {
    //     show_resultEl.innerText="u won the game ";
    //     console.log("won the game");
        
    //     btnEl.disabled=true;
        
    // }else{
    //     if (input_showEl.value && mynum) {  //cond
    //         attempt--;
    //         leftattempt_showEl.innerText=attempt;
    //     }
    //     if(attempt== 0){ 
    //       show_resultEl.innerText="u lose the game ";
    //       console.log("lose the game");
          
    //          btnEl.disabled=true;
    //     }
       
    // }
}
////////////////////// reset btn //////////////////
// let a = 0; //var 

// function resetHandler(){
//     if(a==0 &&  atttempt == 0 || mynum ==x){
//         hidedataEl.classList.add("active");
//         setTimeout(()=>{
//             hidedataEl.classList.remove("active");
//             console.log("settimeout");
            
//         },2000);
//         a=1
//     }else if(a==1){
//         hidedataEl.classList.remove("active");
//         a=0;
//     }
//     show_resultEl.innerText="";
//     btnEl.disabled=false;
//     atttempt=3;
//      leftattempt_showEl.innerText=atttempt;
//     console.log("reset");
    

// }

///////////////////////////////////////////////////////////
 let a=0;
    //   function  resetHandler(){
    //     // addEventListener("click",function(){
    //             if (a==0 && attempt==0 || mynum==x ) {
    //             hidedataEl.classList.add("active")
    //            setTimeout(()=>{
    //                  hidedataEl.classList.remove("active")
    //                  console.log("settimeout");
    //            },2000)   
    //             a=1;
    //         } else if (a==1) {
    //             hidedataEl.classList.remove("active")
    //             a=0;
    //         }
    //         // input_showEl.value="";
    //         show_resultEl.innerText=""
    //         btnEl.disabled=false;
    //         attempt=3;
    //         console.log("hide");
    //     // })
    //     }