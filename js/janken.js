

let choice_img = "";
let judgement = ""
let judgement_img = "";
let your_choice = "";
let y_score = "";
let C_score = "";

your_choice = null;
y_score = 0;
c_score = 0;

$("#gu_btn").on("click", function() {
    
  $("#you_choice_text").text("your choice is");
  $("#you_choice_img").html('<img src="img/janken_gu.png">');
  $("#com_choice_img").html('<img src="img/janken.png">');
  $("#com_choice_text").text("↓com's choice?");
  your_choice = 0
  
})

$("#cho_btn").on("click", function() {
    
  $("#you_choice_text").text("your choice is");
  $("#you_choice_img").html('<img src="img/janken_cho.png">');
  $("#com_choice_img").html('<img src="img/janken.png">');
  $("#com_choice_text").text("↓com's choice?");
  your_choice = 1
})

$("#pa_btn").on("click", function() {
    
  $("#you_choice_text").text("your choice is");
  $("#you_choice_img").html('<img src="img/janken_pa.png">');
  $("#com_choice_img").html('<img src="img/janken.png">');
  $("#com_choice_text").text("↓com's choice?");
  your_choice = 2
})  

function start() {
    const random = Math.floor(Math.random() * 3)
    console.log(your_choice);
    console.log(random);
    $("#com_choice_text").text("com's choice is");

// プレイヤーがgu

    if(your_choice == 0 && random == 0){
    
        choice_img = '<img src="img/janken_gu.png" >';
        judgement = "draw";
        judgement_img = '<img src="img/pose_draw.png" >';
        document.getElementById('audio0').currentTime = 0; //連続クリックに対応
        document.getElementById('audio0').play();
        
      }
      else if(your_choice == 0 && random == 1){
      
        choice_img = '<img src="img/janken_cho.png" >'; 
        judgement = "you win";
        judgement_img = '<img src="img/pose_win.png" >';
        document.getElementById('audio1').currentTime = 0; //連続クリックに対応
        document.getElementById('audio1').play();
        y_score = y_score+1
      }
      else if(your_choice == 0 && random == 2){
      
        choice_img = '<img src="img/janken_pa.png" >';
        judgement = "you lose";
        judgement_img = '<img src="img/pose_lose.png" >';
        document.getElementById('audio2').currentTime = 0; //連続クリックに対応
        document.getElementById('audio2').play();
        c_score = c_score+1
      }

 // プレイヤーがcho 

    else if(your_choice == 1 && random == 1){
      
        choice_img = '<img src="img/janken_cho.png" >';
        judgement = "draw";
        judgement_img = '<img src="img/pose_draw.png" >';
        document.getElementById('audio0').currentTime = 0; //連続クリックに対応
        document.getElementById('audio0').play();
    }
    else if(your_choice == 1 && random == 2){

        choice_img = '<img src="img/janken_pa.png" >'; 
        judgement = "you win";
        judgement_img = '<img src="img/pose_win.png" >';
        document.getElementById('audio1').currentTime = 0; //連続クリックに対応
        document.getElementById('audio1').play();
        y_score = y_score+1
    }
    else if(your_choice == 1 && random == 0){

        choice_img = '<img src="img/janken_gu.png" >';
        judgement = "you lose";
        judgement_img = '<img src="img/pose_lose.png" >';
        document.getElementById('audio2').currentTime = 0; //連続クリックに対応
        document.getElementById('audio2').play();
        c_score = c_score+1
    }

 // プレイヤーがpa 
    
    else if(your_choice == 2 && random == 2){
      
        choice_img = '<img src="img/janken_pa.png" >';
        judgement = "draw";
        judgement_img = '<img src="img/pose_draw.png" >';
        document.getElementById('audio0').currentTime = 0; //連続クリックに対応
        document.getElementById('audio0').play();
    }
    else if(your_choice == 2 && random == 0){

        choice_img = '<img src="img/janken_gu.png" >'; 
        judgement = "you win";
        judgement_img = '<img src="img/pose_win.png" >';
        document.getElementById('audio1').currentTime = 0; //連続クリックに対応
        document.getElementById('audio1').play();
        y_score = y_score+1
    }
    else if(your_choice == 2 && random == 1){

        choice_img = '<img src="img/janken_cho.png" >';
        judgement = "you lose";
        judgement_img = '<img src="img/pose_lose.png" >';
        document.getElementById('audio2').currentTime = 0; //連続クリックに対応
        document.getElementById('audio2').play();
        c_score = c_score+1
    }
    else {
      $("#com_choice_text").text("先に選んでください");
    }

 // 結果表示

  $("#com_choice_img").html(choice_img);
  $("#judgement").text(judgement);
  $("#judgement_img").html(judgement_img);
  $("#your_score").text(y_score);
  $("#com_score").text(c_score);


}