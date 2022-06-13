function pMath()
{
        // Pythagoras 
    const sLength = 9;
    alert(Math.sqrt(2) * sLength);
}

function aTriad()
{

    // Herons' formula
    const tside1 = 5;
    const tside2 = 6;
    const tside3 = 7;

    const tPerimeter = (tside1 + tside2 + tside3) / 2;

    const areaT = Math.sqrt(tPerimeter * (tPerimeter - tside1) * (tPerimeter - tside2) * (tPerimeter - tside3));
    alert(areaT);
}

function aCircle()
{
    const radius = 4;
    alert((Math.PI * radius * radius));
}

function Loopint()
{

    let integer1;
    let integer2;

    integer1 = document.getElementById('txtint1').value;
    integer2 = document.getElementById('txtint2').value;

    if (integer1 > integer2)
    {
        alert(integer1);
    }
    else if (integer2 > integer1)
    {
        alert(integer2);
    }

    else
    {

        alert("Both are Equal");
    }
}

function Evenoddint()
{
    let integer3;

    integer3 = document.getElementById('txtint3').value;

    if(integer3 % 2 == 0) 
    {
        alert("Even.");
    }
    else 
    {
        alert("Odd.");
    }
}


let options = ["rock", "paper", "scissors"];

let playerSelection = function() 
{
  return prompt("Choose - rock, paper or scissors?");
};

let computerSelection = function computerPlay()
{
  return options[Math.floor(Math.random()* options.length)];
};

function playRound(playerSelection, computerSelection) 
{

  if (playerSelection.toLowerCase() == "rock") 
  {
    if (computerSelection == "rock") 
    {
      console.log( "Draw" );
      return;
    } 
    else 
    {
      if (computerSelection == "paper") 
      {
        console.log( "You lose! paper Beat rock" );
        return false;
      } 
      else 
      {
        if (computerSelection == "scissors") {
          console.log( "You win! rock beats scissors" );
          return true;
        }
      }
    }
  }

  if (playerSelection.toLowerCase() == "paper") 
  {
    if (computerSelection == "paper") 
    {
      console.log( "Draw" );
      return;
    } 
    else 
    {
      if (computerSelection == "rock") 
      {
        console.log( "You win! paper beats rock" );
        return true;
      } 
      else 
      {
        if (computerSelection == "scissors") 
        {
          console.log( "You lose! scissors beat paper" );
          return false;
        }
      }
    }
  }

  if (playerSelection.toLowerCase() == "scissors") 
  {
    if (computerSelection == "scissors") 
    {
      console.log( "Draw" );
      return;
    } 
    else 
    {
      if (computerSelection == "rock") 
      {
        console.log( "You lose! rock beat scissors" );
        return false;
      } 
      else 
      {
        if (computerSelection == "paper") 
        {
          console.log( "You win! scissors beat paper" );
          return true;
        }
      }
    }
  } 
  else 
  {
    if (playerSelection.toLowerCase() != "rock" || "paper" || "scissors") 
    {
      console.log( "Invalid Choice" );
    }
  }
}

function game() 
{
  let round = 1;
  let playerWins = 0;
  let computerWins = 0;
  let playRoundReturn = 0;

  for ( let i =0; i < 5;i++) 
  {

    playRoundReturn = playRound(playerSelection(), computerSelection());
    if ( playRoundReturn === true ) 
    {
      playerWins++;
    } 
    else 
    {
      if ( playRoundReturn === false ) 
      {
        computerWins++;
      }
    }
    round++;
  }

  if ( playerWins < computerWins ) 
  {
    console.log( "You lost to the computer!.");
  } 
  else 
  {
    if ( playerWins > computerWins) 
    {
      console.log( "You won! congrats.");
    }
  }
}

game();