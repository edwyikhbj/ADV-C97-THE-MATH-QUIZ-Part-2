function addUser()
{
  document.getElementById("player1_name_input");
  document.getElementById("player2_name_input");
  localStorage.getItem("player1_name_input" , player1_name_input);
  localStorage.getItem("player2_name_input" , player2_name_input);
  window.location("game_page.html");
}

