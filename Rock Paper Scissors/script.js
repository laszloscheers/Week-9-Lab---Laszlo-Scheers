function play(){
    var answer=false;
    var count=3
    do{
        count--;
        var userAnswer=prompt("Enter Rock, Paper or Scissors to play the game.");
        var randomAnswer= Math.floor((Math.random() * 3) + 1);
        //alert(randomAnswer);
        var computerOption;
        
        if(randomAnswer==1){
            computerOption="Rock";
        } else if(randomAnswer==2){
            computerOption="Paper";
        } else{
            computerOption="Scissors";
        }
        alert("The computer has choosen "+computerOption+" and you have choosen "+userAnswer+".");
    
        if(userAnswer==computerOption){
            alert("That's a draw!");
        } else if(userAnswer=="Rock"){
            if(computerOption=="Scissors"){
                alert("You win!");
            } else{
                alert("You loose!");
            }
        } else if(userAnswer=="Paper"){
            if(computerOption=="Rock"){
                alert("You win!");
            } else{
                alert("You loose!");
            }
        } else if(userAnswer=="Scissors" && computerOption=="Paper"){
            if(computerOption=="Paper"){
                alert("You win!");
            } else{
                alert("You loose!");
            }
        } else{
            alert("Please, enter a valid input.");
        }
        var answer=false;
        if(count>0){
            answer=confirm("Do you want to play again?");
        }
    } while(answer==true)


}