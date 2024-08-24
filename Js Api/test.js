// const myJsonObjectFromServer = '{"Username": "Osama", "Age": 39}';
// console.log(typeof myJsonObjectFromServer);
// console.log(myJsonObjectFromServer);

// const myJsObject = JSON.parse(myJsonObjectFromServer);
// console.log(typeof myJsObject);
// console.log( myJsObject);

// let myRequest = new XMLHttpRequest();
// console.log(myRequest);

// myRequest.open("GET","https://api.github.com/users/elzerowebschool/repos" ,true);
// myRequest.send();
// myRequest.onreadystatechange = function () {
//     // console.log(myRequest.readyState);
//     // console.log(myRequest.status);
//     if (this.readyState === 4 && this.status === 200) {
//     //  console.log(this.responseText);
//       let jsData = JSON.parse(this.responseText);
//       for(let i = 0 ; i< jsData.length ; i++){
//         let div = document.createElement("div");
//         let repoName = document.createTextNode(jsData[i].full_name);
//         div.appendChild(repoName);
//         document.body.appendChild(div);
    
//       }
//     }
//   };

function makeItRed(e){
    e.target.style.color = "red";
}
let p = document.querySelector(".test");
p.addEventListener("click",makeItRed);

// const myPromise = new Promise((resolveFunction,rejectFunction) =>{
// let connect = true ;
// if(connect){
//     resolveFunction("Connection Established ");
// }else{
//     rejectFunction(Error("Connection failed"));
// }
// }).then(
//     (resolveValue) => console.log(`Good ${resolveValue}`),
//     (rejectValue) => console.log(`Bad ${rejectValue}`)
// );
const myPromise = new Promise((resolveFunction,rejectFunction) =>{
    let connect = true ;
    if(connect){
        resolveFunction("Connection Established ");
    }else{
        rejectFunction(Error("Connection failed"));
    }
    });
console.log(myPromise);
myPromise.then(
    (resolveValue) => console.log(`Good ${resolveValue}`),
    (rejectValue) => console.log(`Bad ${rejectValue}`)
);


const getData = (apiLink) => {
    return new Promise((resolve,reject) =>{
        let myRequest = new XMLHttpRequest();
   
myRequest.onload = function () {
    // console.log(myRequest.readyState);
    // console.log(myRequest.status);
    if (this.readyState === 4 && this.status === 200) {
    //  console.log(this.responseText);
     resolve(JSON.parse(this.responseText));
    
      }else{
        reject(Error("no Data Found Api "));
      }
    
  };
  myRequest.open("GET", apiLink,true);
  myRequest.send();

    })
}

//"https://api.github.com/users/elzerowebschool/repos"

// let jsData = JSON.parse(this.responseText);
// for(let i = 0 ; i< jsData.length ; i++){
//   let div = document.createElement("div");
//   let repoName = document.createTextNode(jsData[i].full_name);
//   div.appendChild(repoName);
//   document.body.appendChild(div);

// getData("https://api.github.com/users/elzerowebschool/repos")
// .then((result) => {
   
//     result.length = 10;
//     return result;
// })

fetch("https://api.github.com/users/elzerowebschool/repos").then((result)=>{
    console.log(result);
    let myData = result.json();
    console.log(myData);
    return myData;

}
).then((myData) => {
    myData.length = 10;
    return myData;
}).then((myData)=>{
    console.log(myData[0].name)
})
