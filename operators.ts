// Spread with array

let fruits: Array<string> = ['Apple', 'Orange', 'Banana'];
let foods: Array<string> = ['Pizza', 'Burger', 'Fry'];

let edibles: Array<string> = [... fruits,... foods];
console.log('Got the edibles as: ', edibles);

// Spread with Object

let user = {
    firstName: 'tanvir',
    lastName: 'iqbal',
    userName: 'tanviriqbal'
};

let userDetails = {
    ... user,
    email: 'tanvir@domain.com',
    address: 'Dhaka, Bangladesh'
};

console.log(userDetails);

// Spread with Function

function add(x?: number,y?: number,z?: number):number{
    return x + y + z;
}
let numbers: Array<number> = [1,2,3];
console.log(add(... numbers));


// Backticks

console.log(`FIrst Name: ${userDetails.firstName}, User Name: ${userDetails.userName}`);


// Destructure with object

let {firstName:fName,lastName:lName} = user;
console.log(fName);
console.log(lName);

// Destructure with Array

let [ Apple, Burger, Fry ] = fruits;
console.log(Apple);
console.log(Burger);

// Rest

let [justApple, ... restEdibles] = edibles;
console.log(justApple);
console.log(restEdibles);

let {firstName, ... restuserDetails} = userDetails;
console.log(firstName);
console.log(restuserDetails);

function getEdibles(apple?, ... restEdibles){
    console.log(apple);
console.log(restEdibles);
}

getEdibles(... edibles);

