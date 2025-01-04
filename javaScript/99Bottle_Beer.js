var beer = 0;
function beer_bottle(){
    while (100>=beer>=1){

        console.log(`${100-beer} bottles of beer on the wall, ${100-beer} bottles of beer.
    Take one down and pass it around, ${99-beer} bottles of beer on the wall.`);
         beer++;
        
    }
   

}

console.log(beer_bottle())