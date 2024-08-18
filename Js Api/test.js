const myJsonObjectFromServer = '{"Username": "Osama", "Age": 39}';
console.log(typeof myJsonObjectFromServer);
console.log(myJsonObjectFromServer);

const myJsObject = JSON.parse(myJsonObjectFromServer);
console.log(typeof myJsObject);
console.log( myJsObject);
