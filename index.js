
var order = [];
var user_order = [];
var started = false;
var user_index = -1;
var audio;

function startGame(){

    $(document).click(function(event){
      if (!event.target.classList.contains("btn")){
      if(!started){

        $("#level-title").text("level 1");
        user_order = [];
        order = [];
        order_index = 0;
        user_index = -1;
        started = true;
        order.push(Math.floor((Math.random() * 4)) + 1);
        show_array(0);

      }
    }});
}

function playGame(){

  $(".btn").click(function(event){

    var button = event.target.classList[2];
    clicked(button);

    user_order.push(button);
    user_index++;

    if(user_order[user_index] != order[user_index]){

      $("#level-title").text("Game Over, Click Anywhere to Restart");
      audio = new Audio("5.mp3");
      audio.play();

      $("body").addClass("game-over");
      setTimeout(function(){

        $("body").removeClass("game-over");

      }, 200);
      started = false;
    }
    else if(user_order.length === order.length && order.length !== 0){
      user_index = -1;
      user_order = [];
      $("#level-title").text("level " + (order.length + 1));
      order.push(Math.floor((Math.random() * 4)) + 1);
      show_array(0);
    }


  });
}

function show_array(order_index){

  if(order_index < order.length){

    setTimeout(function(){

      clicked(order[order_index]);

      order_index++;
      show_array(order_index);

    }, 700);
}}

function clicked(button){

  $("." + button).addClass("pressed");
  audio = new Audio(button + ".mp3");
  audio.play();
  setTimeout(function () {
    $("." + button).removeClass("pressed");
  }, 200);
}

startGame();
playGame();
