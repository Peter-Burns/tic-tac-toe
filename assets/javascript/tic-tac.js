var turnNumber = 0;
var xWins = 0;
var oWins = 0;
var gameState = {
    square1:'',
    square2:'',
    square3:'',
    square4:'',
    square5:'',
    square6:'',
    square7:'',
    square8:'',
    square9:'',
};
$('.gameSquare').on('click', function () {
    if (!$(this).text()) {
        if (turnNumber % 2 === 0) {
            $(this).html(`<p class="filledBox text-center">X</p>`);
            $('#turn').html('<h3>O</h3>');
            gameState[$(this).attr('id')]='X';
        }
        else {
            $(this).html(`<p class="filledBox text-center">O</p>`);
            $('#turn').html('<h3>X</h3>');
            gameState[$(this).attr('id')]='O';
        }
        turnNumber++;
        var result = checkGameOver();
        if (result) {
            if(result.includes('X')){
                xWins++;
            }
            else if(result.includes('O')){
                oWins++;
            }
            $('#result').html(`<h3>${result}</h3>`);
            newGame();
        }
    }
});
function newGame() {
    gameState = {
        square1:'',
        square2:'',
        square3:'',
        square4:'',
        square5:'',
        square6:'',
        square7:'',
        square8:'',
        square9:'',
    };
    $('#wins').empty();
    $('#wins').append($(`<h4>X Wins: ${xWins}</h4>`));
    $('#wins').append($(`<h4>O Wins: ${oWins}</h4>`));
    turnNumber = 0;
    $('.gameSquare').html('');
    $('#turn').html('<h3>X</h3>');
}
function checkGameOver() {
    if(gameState.square1===gameState.square2&&gameState.square2===gameState.square3&&gameState.square1){
        return gameState.square1+' Wins!';
    }
    if(gameState.square4===gameState.square5&&gameState.square5===gameState.square6&&gameState.square4){
        return gameState.square4+' Wins!';
    }
    if(gameState.square7===gameState.square8&&gameState.square8===gameState.square9&&gameState.square7){
        return gameState.square7+' Wins!';
    }
    if(gameState.square1===gameState.square4&&gameState.square4===gameState.square7&&gameState.square1){
        return gameState.square1+' Wins!';
    }
    if(gameState.square2===gameState.square5&&gameState.square5===gameState.square8&&gameState.square2){
        return gameState.square2+' Wins!';
    }
    if(gameState.square3===gameState.square6&&gameState.square6===gameState.square9&&gameState.square3){
        return gameState.square3+' Wins!';
    }
    if(gameState.square1===gameState.square5&&gameState.square5===gameState.square9&&gameState.square1){
        return gameState.square1+' Wins!';
    }
    if(gameState.square3===gameState.square5&&gameState.square5===gameState.square7&&gameState.square3){
        return gameState.square3+' Wins!';
    }
    if(turnNumber===9){
        return "Cat's Game";
    }
    return false;
}
newGame();