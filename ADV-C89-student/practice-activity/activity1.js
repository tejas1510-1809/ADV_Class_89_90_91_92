var score=0;
function updateScore() {
    score=score+1;
    document.getElementById("score").innerHTML="score-"+score;

}
function saveScore() {

    localStorage.setItem("score",score);

}
function NextPage() {

window.location="activity_2.html";
}