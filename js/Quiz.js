class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements


    //write code to change the background color here


    //write code to show a heading for showing the result of Quiz

    //call getContestantInfo( ) here
    if(allContestant !== undefined){
      fill("Violet");
      textSize(16);
      text("Here Results Came. Colour Green Depiects Correct Answer,(Red Is For Wrong Answer)");
    }
     



    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
    for(var plr in allContestant){
      var correctAnswer = "3";
      if(correctAnswer === allContestant[plr].answer)
      fill("Green");
      else
      fill("Red");

      text(allContestant[plr].name+":"+allContestant[plr].answer);
      text(allContestant[plr].name+":"+allContestant[plr].answer)
    }

    }

    
  }


