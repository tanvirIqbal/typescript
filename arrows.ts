// Normal Function
function greetUser(name: string){
    console.log(`Hello there, ${name}`);
}

// Annonymous Function
const greetUserByName = function(name: string){
    console.log(`Hello there, ${name}`);
}

greetUser('Tanvir');
greetUserByName('Hafsa');

// Arrow Function
const greetUserByNameArrow = (name : string) => console.log(`Hello there, ${name}`);


greetUserByNameArrow('Tafhim');


const edibles = [
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
console.log(
    edibles.filter(
        function(item){
            return item.isVegan;
        }
    )
);
// Arrow function on array
console.log(
    edibles.filter(
        item => item.isVegan
    )
);

// Arrow function solves the problem 'this' rescoping

const user = {
    firstName: `John`,
    lastName: 'Doe',
    lazyGreet: function(){
        const that = this;
        setTimeout(function() {
            console.log(`Hey there, ${that.firstName}`); // You cannot use this.firstName here directly
        }, 1000);
    }
};

user.lazyGreet();

const user1 = {
    firstName: `John`,
    lastName: 'Doe',
    lazyGreet: function(){
        setTimeout(() =>
            console.log(`Hey there, ${this.firstName}`) // You can use this.firstName here directly using arrow function
        , 1000);
    }
};

user1.lazyGreet();


