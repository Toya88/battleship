/* 
You should add the tiles of gameboard to the dom
The ai must select a reandom tile on the gameboard
You will select tiles and the game will indicate a Hit or Miss
on hit the game is over
add a button to start a new game

add x amount of tiles to gameboard
add event listener to each tile

listener 
check if this is ai block
if it is you win and end game
else you miss
keep going

button listener
reset gameboard and have ai choose new tile
*/
// create button with javascript
let reset = document.getElementById('reset'); // create onlick function
let gameBoard = document.getElementById('gameBoard');
let boardsize = 9;
let game = [];     //put all the tile numbers in an array at one time - done
let newGame = [];
let onClick = true;

for (let index = 0; index < boardsize; index++) {
    let tile = document.createElement('div');
    tile.classList.add('box');
    tile.setAttribute('data-id', index);
    gameBoard.appendChild(tile);
    game.push(tile.getAttribute('data-id'));
    // console.log(game);
    tile.addEventListener('click', gameLogic);
        
    
}
// nest the 


function gameLogic() {
    if (onClick == true) {
        let tiles = this.getAttribute('data-id'); // = box clicked
    console.log(this.getAttribute('data-id'));
    console.log(tiles);
    
    //ai pick a random tile
    // arr[Math.floor(Math.random() * arr.length)]; 
    let random  = game[Math.floor(Math.random() * game.length)];
    // let random = Math.floor(Math.random() * Math.floor(game.length)); // choosing by the lenght of the array
        console.log('random #', random); // = box ai picked
        console.log(game.length);
        

    //  remove the clicked box from the array
    //  then decrease the array

    console.log(game);
    function removeTile(arr, value) {
        return arr.filter(function(ele){
            return ele != value;
        });
     }
     
     var result = removeTile(game, tiles);
     game = result;
    //  newGame = game;
    //  newGame.push(result);
    console.log('new game', game); // here game is the array without the clicked tiles
    
    // define hit or miss
     let hit = ''; // needs to be a match the clicked button and the random button - to end click 
     let miss = true; // needs to remove the clicked tile and shorten the array
     //random to choose number from new game array - win function?
    
    //create win - function
     if (miss == true) {
        this.style.background = 'orangered';
     
    }
     
    if (tiles == random) {
        this.style.background = 'green';
        console.log('hit');
        onClick = false;
        return ;
         
    } 
    } else {
        return onClick = false;
    }
}

reset.addEventListener('click', resetGame);
function resetGame() {
    window.location.reload(false);
};



//empty = innterText = " "- empty string

// var random = Math.floor(Math.random() * 100) % 2;

    // function getRandomInt(max) {
    //     var random = Math.floor(Math.random() * Math.floor(max));
    //     console.log('random #',random); 
    //     if (tiles == random) {
    //         this.style.background = 'green';
    //         console.log('here');
            
    //     } else {
    //         game.pop();
    //         console.log(game);
            
    //     }
    //     return random; // = box ai picked
    //     }
    //     getRandomInt(game.length - 1);

    //put all the tile numbers in an array at one time - done
    // remove clicked box from array  
    // compare the box clicked to box ai picked
    // Array.splice(position,num);

    //remove a number from the array - top or end
    //decrease the array the random 

        // if (tiles == random) {
        //     this.style.background = 'green';
        //     console.log('here');
            
        // } else {
        //     random--;
        //     game.pop();
        //     console.log(game);
            
        // }

    // need the color to remain red if missed
    // if not win color red
    /* define miss condition 

    
    */
