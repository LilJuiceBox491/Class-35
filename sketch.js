var gameState, playerCount, database, form, player, game;

function setup(){
    createCanvas(400,400);
    database = firebase.database();
    gameState = 0;

    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background('white');
}