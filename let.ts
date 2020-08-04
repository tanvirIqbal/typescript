//let is not hoisted like var.
let indexOutside = 0;
for (let indexInside = 0; indexInside < 5; indexInside++) {
    console.log(`Pet in the loop: ${indexInside}`);
    
}
console.log(`Pet outside the loop: ${indexOutside}`);