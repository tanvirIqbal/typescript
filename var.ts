var pet = 'dog';

function setPet() {
    var pet = 'cat';
    console.log(`Pet in the house: ${pet}`)
}

setPet();
console.log(`Pet outside the house: ${pet}`)

var index = 0;
for (var index = 0; index < 5; index++) {
    console.log(`Pet in the loop: ${index}`);
    
}
console.log(`Pet outside the loop: ${index}`);