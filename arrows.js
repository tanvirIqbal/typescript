// Normal Function
function greetUser(name) {
    console.log("Hello there, " + name);
}
// Annonymous Function
var greetUserByName = function (name) {
    console.log("Hello there, " + name);
};
greetUser('Tanvir');
greetUserByName('Hafsa');
// Arrow Function
var greetUserByNameArrow = function (name) { return console.log("Hello there, " + name); };
greetUserByNameArrow('Tafhim');
var edibles = [
    {
        edible: 'Meat',
        isVegan: true
    },
    {
        edible: 'Pomelo',
        isVegan: false
    }
];
// Normal Function on array
console.log(edibles.filter(function (item) {
    return item.isVegan;
}));
// Arrow function on array
console.log(edibles.filter(function (item) { return item.isVegan; }));
// Arrow function solves the problem 'this' rescoping
var user = {
    firstName: "John",
    lastName: 'Doe',
    lazyGreet: function () {
        var that = this;
        setTimeout(function () {
            console.log("Hey there, " + that.firstName); // You cannot use this.firstName here directly
        }, 1000);
    }
};
user.lazyGreet();
var user1 = {
    firstName: "John",
    lastName: 'Doe',
    lazyGreet: function () {
        var _this = this;
        setTimeout(function () {
            return console.log("Hey there, " + _this.firstName);
        } // You can use this.firstName here directly using arrow function
        , 1000);
    }
};
user1.lazyGreet();
