$(document).ready(function() {
  setInterval(function(){
    $('#team1Name').html(localStorage.getItem('team1Name'));
    $('#team1Points').html(localStorage.getItem('team1Points'));
    $('#team2Name').html(localStorage.getItem('team2Name'));
    $('#team2Points').html(localStorage.getItem('team2Points'));
    $('#timer').html(localStorage.getItem('timer'));
    $('#gameTimer').html(localStorage.getItem('gameTimer'));
  }, 100);
});