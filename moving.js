function moveEverything()
{
    // When the game end scene is showed, there is no requirement from this function.
    if(showingwiningscreen)
    {
        return;
    }
    computerMovement(); // This movement moves the paddle.
    ballx = ballx + ballspeedx;
    bally = bally + ballspeedy;
    if(ballx < 0)
    {
        // Condition for paddle touching ball.
        if(bally > paddle1y && bally < (paddle1y + PADDLE_HEIGHT))
        {

            ballspeedx = -ballspeedx;
            deltaY = bally - (paddle1y + PADDLE_HEIGHT/2);
            ballspeedy = deltaY*0.35;
            playAudio();
        }
        // Point lost. Resetting ball.
        else
        {
            computer_score += 1;
            ballReset();
        }
    }
    else if(bally < 0 || bally > canvas.height)
    {
        ballspeedy = -ballspeedy;
    }
    else if(ballx > canvas.width)
    {
        if(bally > paddle2y && bally < (paddle2y + PADDLE_HEIGHT)) // Indicates that paddle has blocked the ball.
        {
            ballspeedx = -ballspeedx;
            deltaY = bally - (paddle2y + PADDLE_HEIGHT/2);
            ballspeedy = deltaY*0.35;
            playAudio();
        }
        // Point lost. Resetting ball.
        else
        {
            player1_score += 1;
            ballReset();
        }
    }
    
}

function computerMovement()
{
    var move_paddle = localStorage.getItem("var_move")
    paddle2ycenter = paddle2y + PADDLE_HEIGHT/2; // Calculating the center y coordinate of paddle 2.
    if(paddle2ycenter < bally - 35) // If paddle 2 is above the ball then,
    {
        paddle2y = paddle2y + Number(move_paddle);
    } 
    else if(paddle2ycenter > bally + 35)
    {
      // console.log(move_paddle)

        paddle2y = paddle2y - Number(move_paddle);
    }
}