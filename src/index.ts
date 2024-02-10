type Itype = {
    name:string,
    area:string,
    age:string,
}
// example of encoding url from an object provided
const myObjects:{[key:string]:string} = {name:"david", area:"Enugu state", age: "30years"}

const allArray = Object.keys(myObjects);
const joined  = allArray
                .filter(item=> myObjects[item] !== undefined)
                .map((item)=>(`${encodeURIComponent(item)}=${encodeURIComponent(myObjects[item])}`))
                .join("&");

console.log(joined)
// decoding url from the string provided
const parsedUrl = decodeURIComponent(joined);
console.log("the parsed url: ", parsedUrl)

// here we make use of object property to get the value of the object here
const gottenValues = Object.values(myObjects);
console.log(gottenValues)
const notFreeze = Object.isFrozen(myObjects);
console.log("not frozen: ", notFreeze)
Object.freeze(myObjects)
const checkFreeze = Object.isFrozen(myObjects);
console.log(" frozen now: ",checkFreeze);
// checking for entries here
const entries = Object.entries(myObjects);
console.log(entries.flat(1))


  