function payBill(name){
    var name = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
    // find the number of people
    var peopleNum = name.length;
    // pick random name using ramdom func//
    var randNum = Math.floor(Math.random() * peopleNum);
    var randperson_position = name[randNum];

    return `${randperson_position} will pay the bill!`;
}
console.log(payBill());