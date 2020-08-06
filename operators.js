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
