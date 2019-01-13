function drawNet()
{
    for(var i = 0; i < canvas.height; i+=40)
    {
        canvasContext.fillRect(canvas.width/2 - 1, i, 2, 20);
    }
}

function drawHLine()
{
    for(i = 0; i < canvas.width; i+=40)
    {
        canvasContext.fillRect(i, 70, 20, 2);
        canvasContext.fillRect(i, canvas.height - 70, 20, 2)
    }
    
}
function drawParts()
    {
        // Puts blue colour in the canvas.
        canvasContext.fillStyle = 'blue';
        canvasContext.fillRect(0, 0, canvas.width, canvas.height);
       // Will fill the page with page from x = 0, y = 0
       // to the given position. Note that origin starts from the left top corner.
      
       // Calling a function which renders a circle.
       colorCircle(ballx, bally, 10,'red');
       
       // Drawing paddle-1.
       canvasContext.fillStyle = 'white';
    //   console.log(paddle1y);
       canvasContext.fillRect(0, paddle1y, thick, 100);
       // Drawing paddle-2
       canvasContext.fillRect(canvas.width - thick, paddle2y, 10, 100);
       
       canvasContext.font = "normal 40px Verdana";
       // Printing out text.
       canvasContext.fillText(player1_score, canvas.width/4, canvas.height/4)
       canvasContext.fillText(computer_score, (3*canvas.width)/4, canvas.height/4)
       canvasContext.fillText("Player", canvas.width/4 - 60, 50);
       canvasContext.fillText("Computer", (3*canvas.width)/4 - 60, 50);
       canvasContext.font = "normal 25px Verdana";
       canvasContext.fillText("Level : ", canvas.width/2 - 60,canvas.height/4)
       canvasContext.fillText(level, canvas.width/2 + 30, canvas.height/4)
    }
    function drawFirstPage()
    {
        if(beginning = true)
        {
        canvasContext.fillStyle = 'blue';
        canvasContext.fillRect(0, 0, canvas.width, canvas.height);
        canvasContext.fillStyle = 'white';
        canvasContext.font = "normal 55px Verdana";
        canvasContext.fillText("Welcome to the game! Click to begin", 90, 100);
        }
    }

function drawEverything()
{
        if(beginning == true)
        {
        drawFirstPage();
        return;
        }
        if(showingwiningscreen)
        {
            canvasContext.fillStyle = 'blue';
            canvasContext.fillRect(0, 0, canvas.width, canvas.height)
            canvasContext.fillStyle = "White";
            if(player1_score >= WIN_SCORE)
            {
                canvasContext.font = "normal 40px Verdana";
                canvasContext.fillText("Congragulation! You are the winner!", 200, 100);
               // next_game = true;
            }
            else
            {
                canvasContext.font = "normal 40px Verdana";
                canvasContext.fillText("The computer got the better of you.", 200, 100);
               // next_game = true;
            }
            canvasContext.font = "normal 30px Verdana";
            canvasContext.fillText("Click to play again!", 300, 600);
            return;
        }
        
        drawParts();
        drawNet();
        drawHLine();
}