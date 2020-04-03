//by definition reduce is used to condense an array to a single value
// function reducer(accumulator, currentValue, currentIndex, array){}
// accumulator = (mandatory argument) initialized as arr[0] , returned at the end of the loop
//currentValue  = (mandatory argument) initialized as arr[1] ,  increments after each loop i.e, arr[2],arr[3]...arr[arr.length - 1]
//currentIndex = (optional argument) returns the loop count or index as in a native for loop.
//array = (optional argument) retuns the array itself.


let a =[1,2,3,4];
//console.log(a.reduce((total,current, a,b) => {console.log(total,current); return total+current})); //es6 
//console.log(a.reduce(function(total,current){ console.log(total,current); return total + current; })); //es5

//initial value 
console.log(a.reduce((total,current) => {console.log(total,current) ; return total+current},10)); //es6 

//initial value can also be an array
console.log(a.reduce((total,current) => {total.push(current*2); return total},[]));

//initial value can also be an object
fruit=['apple','apple','banana','banana'];
console.log(fruit.reduce((tally,fruit) =>{ if(!tally[fruit]){tally[fruit]=1} else { tally[fruit]+=1}; return tally;},{} ));

//flatenning an array
let arr=[[1,2],[3,4],[5,6],[7,8]];
console.log(arr.reduce((total,current) => {return total.concat(current); },[]));