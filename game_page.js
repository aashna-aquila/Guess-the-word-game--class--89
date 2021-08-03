player_1name=localStorage.getItem("Player 1 Name");
player_2name=localStorage.getItem("Player 2 Name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player_1name+" : ";
document.getElementById("player2_name").innerHTML=player_2name+" : ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question Turn- "+player_1name;
document.getElementById("player_answer").innerHTML="Answer Turn- "+player_2name;

function send()
    {
    text_store= document.getElementById("Word").value;
    upto_down= text_store.toLowerCase();

    char_1= upto_down.charAt(1);

    divide=Math.floor(upto_down.length/2);
    char_2= upto_down.charAt(divide);

    minus= upto_down.length-1;
    char_3= upto_down. charAt(minus);

    remove_1= upto_down.replace(char_1,"_");
    remove_2= remove_1.replace(char_2,"_");
    remove_3= remove_2.replace( char_3,"_");

    question_word = "<h4 id='word_display'> Q. "+remove_3+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("Word").innerHTML="";
    }

    question_turn= "player1";
    answer_turn= "player2";

    function check()
        {
        get_answer= document.getElementById("input_check_box").value;
        answer= get_answer.toLowerCase();

        if(answer==upto_down)
        {
            if(answer_turn=="player1")
            {
            player1_score= player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
            }
            else{
                player2_score= player2_score+1;
                document.getElementById("player2_score").innerHTML= player2_score;
            }
        }
        if(question_turn=="player1")
        {
            question_turn= "player2";
            document.getElementById("player_question").innerHTML="Question turn- "+player_2name;
        }
        else{
            question_turn= "player1";
            document.getElementById("player_question").innerHTML="Question turn- "+player_1name;  
        }
        if(answer_turn=="player1")
        {
            answer_turn="player2";
            document.getElementById("player_answer").innerHTML= "Answer turn- "+player_2name;
        }
        else{
            answer_turn="player1";
            document.getElementById("player_answer").innerHTML= "Answer turn- "+player_1name;
        }
        document.getElementById("output").innerHTML="";
        }
    