// This JS page is for the scores
var highscores = JSON.parse(localStorage.getItem("highscores")) || []
var clearEl= document.getElementById("clear")
var tBodyEL= document.getElementById("score-table")

// each time a new person adds initials and score, another row is created while still keeping the previous scores
for (let i = 0; i < highscores.length; i++) {

    var initTdEL= document.createElement("td")
    var scoreTdEL=document.createElement("td")
    var trEL= document.createElement("tr")

    initTdEL.append(highscores[i].initials)
    scoreTdEL.append(highscores[i].score)
    trEL.append(initTdEL, scoreTdEL)
    tBodyEL.appendChild(trEL) 
}

clearEl.addEventListener("click", ()=>{
    localStorage.clear()
    window.location.reload()
})