// Spread with array
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var fruits = ['Apple', 'Orange', 'Banana'];
var foods = ['Pizza', 'Burger', 'Fry'];
var edibles = fruits.concat(foods);
console.log('Got the edibles as: ', edibles);
// Spread with Object
var user = {
    firstName: 'tanvir',
    lastName: 'iqbal',
    userName: 'tanviriqbal'
};
var userDetails = __assign({}, user, { email: 'tanvir@domain.com', address: 'Dhaka, Bangladesh' });
console.log(userDetails);
// Spread with Function
function add(x, y, z) {
    return x + y + z;
}
var numbers = [1, 2, 3];
console.log(add.apply(void 0, numbers));
// Backticks
console.log("FIrst Name: " + userDetails.firstName + ", User Name: " + userDetails.userName);
// Destructure with object
var fName = user.firstName, lName = user.lastName;
console.log(fName);
console.log(lName);
// Destructure with Array
var Apple = fruits[0], Burger = fruits[1], Fry = fruits[2];
console.log(Apple);
console.log(Burger);
// Rest
var justApple = edibles[0], restEdibles = edibles.slice(1);
console.log(justApple);
console.log(restEdibles);
var firstName = userDetails.firstName, restuserDetails = __rest(userDetails, ["firstName"]);
console.log(firstName);
console.log(restuserDetails);
function getEdibles(apple) {
    var restEdibles = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restEdibles[_i - 1] = arguments[_i];
    }
    console.log(apple);
    console.log(restEdibles);
}
getEdibles.apply(void 0, edibles);
