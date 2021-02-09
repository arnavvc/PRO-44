class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
                object = new Object()
            }
    player1 = createSprite(200,500, 20, 20);
    player2 = createSprite(800,500, 20, 20);
    
    object1 = createSprite(900, 300, 10)
    object2 = createSprite(100, 300, 10)
    
    players=[player1,player2];

        }
    
    play(){
        
        form.hide();

        Player.getPlayerInfo();
        //image(back_img, 0, 0, 1000, 800);
        var x =100;
        var y=200;
        var index =0;
        for (var i = 0; i < 1000; i=i+20) {
            line(500,i,500,i+10);
        
          }
        drawSprites();

        for(var plr in allPlayers){
        
            index = index+1;
            x = (350*index)-allPlayers[plr].distance;
            y=500-allPlayers[plr].distanceY;
            
            players[index -1].x = x;
            players[index - 1].y = y;

            if (index === 1){
                stroke(10);
                fill("green");
                rect(x-10,y-10,20,20);
                players[index - 1].shapeColor = "green";
              }
              if (index === 2){
                stroke(10);
                fill("red");
                rect(x-10,y-10,20,20);
                players[index - 1].shapeColor = "red";
              }
              
              if(player1.isTouching(object1)){
                fill("yellow")
                ellipse(x-5,y-5,10);
                
                object.update(1,x-5, y-5)
              }   
              if(player2.isTouching(object2)){
                fill("blue")
                ellipse(x-5,y-5,10);
                
                object.update(1,x-5, y-5)
              }  
        }


        if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
            player.distance -= 10
            player.update();
        }
        if (keyIsDown(LEFT_ARROW) && player.index !== null) {
            player.distance += 10
            player.update();
        }
        if (keyIsDown(DOWN_ARROW) && player.index !== null) {
            player.distanceY -= 10
            player.update();
        }
        if (keyIsDown(UP_ARROW) && player.index !== null) {
            player.distanceY += 10
            player.update();
        }
        
    }

    end(){
       console.log("Game Ended");
    }
}