
var output = [];
var count = 1;

function fizzBazz() {
    while (count<20){
        if (count % 3 === 0 && count % 5 === 0) {
            output.push("fizzBazz");
        } else if (count % 3 === 0) {
            output.push("Fizz");
        } else if (count % 5 === 0) {
            output.push("Buzz");
        } else {
            output.push(count);
        }
        count++;
    }
    
    console.log(output);
}

fizzBazz();


