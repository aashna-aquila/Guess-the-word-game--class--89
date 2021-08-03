function adduser()
{
    player1_name= document.getElementById("input1").value;
    player2_name= document.getElementById("input2").value;

    localStorage.setItem("Player 1 Name",player1_name);
    localStorage.setItem("Player 2 Name",player2_name);

    window.location="game_page.html"
}