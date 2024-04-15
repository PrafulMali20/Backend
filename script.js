

const arr = [1, 2, 3, 4];

// arr.forEach(function(val){
//     console.log(val + " hello");
// })

//map make a blank array by given array

// const ans = arr.map(function (val) { 
//     return val * 3;
// })

//filter

// const ans = arr.filter(function(val){
//     if(val >= 12) {return true;}
//     else return false;    
// })

// console.log(ans);

//find

// const  ans = arr.find(function(val){
//     if(val === 2) return val;
// })
// console.log(ans);

//indexOf

// console.log (arr.indexOf(2));

//object

// var obj ={
//     name: "praful",
//     age: 12
// }

// Object.freeze(obj);
// obj.age = 25
// console.log(obj)

// function abcd() {
//     return "hello";
// }


// var ans = abcd();
// console.log(ans);

//async
async function abcd() {
   
        const blob = await fetch("https://randomuser.me/api/");
        const ans = await blob.json();
        console.log(ans.results[0].name);
 
}

abcd();