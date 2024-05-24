//const arr = [1, 2, 3, 4, 9, 6, 8];
/* 
      Array Map Function

function double(x){
    return x*2;
}

function binary(x){
    return x.toString(2);
}
const output = arr.map(double);
const output2 = arr.map(binary);
console.log(output2)
console.log(output) */


// Array filter function

// filter odd values

/* function isOdd(x){
    return x%2;
}

function isEven(x){
    return x%2 === 0;
}


const odd = arr.filter(isOdd);
const even = arr.filter(isEven)
console.log(even)
console.log(odd) */





//      Array Reduce Funciton

// sum or max

/* const arr1 = [1,2,3,4];

function findMax(arr1) { 
    let max = 0;
    for(let i = 0; i<arr1.lenght; i++){
        if(arr1[i]>max){
            max = arr1[i];
        }
    }
   return max;
}
console.log(findMax(arr1));

const output2 = arr1.reduce(function(max, curr){
    if(curr>max){
        max = curr;
    }
    return max;
},0);

console.log(output2) */

/* const output = arr.reduce(function(acc, curr){
    acc = acc+curr;
    return acc;
},0);

console.log(output) */














// real world example

const users = [
    {firstName : "Ankita", lastName : "Singh" , age : 12},
    {firstName : "srs", lastName : "Singh" , age : 18},
    {firstName : "nike", lastName : "Singh" , age : 22},
    {firstName : "deepika", lastName : "Singh" , age : 12}

]

const output = users.filter((x) => x.age>12).map((x) => x.firstName);
console.log(output)

//  acc = [12:2 , 18:1 , 22:1]
/* const output = users.reduce(function(acc, curr){
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }else{
         
        acc[curr.age] = 1;
    }

    return acc;

},{});

console.log(output);
 */
// find list of full name users
//const output = users.map( (x) => x.firstName +" "+ x.lastName);
//console.log(output)

//const output1 = users.filter((x) => x.age === 12);
//console.log(output1)



