

// function callback(a,b) {
//     return console.log(a+b);
    
// }

// function sum(a,b,callback) {
//     return callback(a,b);
// }
// sum(6,6,callback)

//////////////////////////////////////////////////////////////////////
// console.log("hello");
// console.log("hello");
// console.log("hello");

// setTimeout(()=>{
//  console.log("m run after above and below code");
 
// },6000)
// console.log("hello");
// console.log("hello");
// console.log("hello");
///////////////////////////////////////////////////////////////////////
// new Promise(function(res,rej){
//          if (false) {
//                res("resolve");
           
//          } else {
//              rej("rejection")
//          }
// }).then((res)=>{
//     console.log(res);
    
// }).catch((error)=>{
//     console.log(error);
    
// }).finally(()=>{
//     console.log("finally");
    
// })
// new Promise((res,rej)=>{ 
//     if (true) {
//         res("resolve36");
//     }else{
//         rej("reject")
//     }
// }).then((res)=>{
//     console.log("resolve 39 "+ res);
    
// }).catch((rej)=>{
//     console.log("reject 42 "+ rej);
    
// }).finally(()=>{
//     console.log("finally ");
    
// })
////////////////////////////////////////////////////////////////////////////////////


// let promise = new Promise((res,rej)=>{
//     if (true) {
//         res("resolve");
//     }else{
//         rej("reject")
//     }
// })
// promise.then((res)=>{
//     console.log(res);
    
// }).catch((err)=>{
//     console.log(err);
    
// })

// let promiseb  = new Promise((res,rej)=>{
//     if (true) {
//         res("resolve")
//     } else {
//         rej("reject")
//     }
// }) 

//////////////////////////////////////////////////////////////////////////
// // promise 3
// function getdata(getdata,dataId) {
//     return new Promise((res,rej)=>{
//         console.log("dataid "+ dataId);
        
//         if (true) {

//             res("resolve")
//         } else {
//             rej("reject")
//         }
//     })
// }
// getdata(1).then((res)=>{
//     console.log(res);
    
// })
// promise 4 


function getData(dataId,nextData){
return new Promise((res,rej)=>{  
   setTimeout(()=>{
    if (true) {
    console.log("dataId "+ dataId);
        res("resolve ");
    } else {
        rej("reject ");
    }
    if (nextData) {
        nextData();
    }
   },2000)
})
}

async function getAllData() {
    try {
    console.log("fetching id ...1");
     await getData(1)
     console.log("fetching id ...2");
     await getData(2)
     console.log("fetching id ...3");
     await getData(3)
    } catch (error) {
        console.log("error "+ error);
        
    }{
        console.log("fetching id..4");
        getData(4)
        
    }
}
getAllData()

/////////////////////////////////////////////////////////////////
//  let p = fetch("https://jsonplaceholder.typicode.com/posts")
//     p.then((value1)=>{
//         console.log(value1.status+" statu");
//          console.log(value1+" ok");
//         return value1.json();
//         console.log(value1+" valu1");   
//     }).then((res2)=>{
//         console.log(res2);
        
//     })
////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////
// const  URL = "https://jsonplaceholder.typicode.com/posts";
// const getFacts =async () => {
//     console.log("fetching ...");
//     let response =await fetch(URL);
//     console.log(response);// jon format
//     let data =await response.json();
//     console.log(data[2].body +" ====?>body"  );

    
// }
// // getFacts()

// function getpromisefun(){
//     fetch(URL).then((response)=>{
//         return response.json()
//     }).then((data)=>{
//             // console.log(data.body);
//             console.log(data[0].title+"=========>> body");
            
//     })
// }
//////////////////////////////////////////////////