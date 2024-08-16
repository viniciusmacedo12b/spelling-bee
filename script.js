var palavra
const jogo = ["Joshua", "Gideon", "Deborah", "Zealous", "Provider", "Sustainer", "Solomon", "Creator", "Elijah", "Mighty", "Isaiah", "Invisible", "Jacob", "Ezekiel", "Majestic", "Infinite", "Esther", "Redemption", "Sovereign", "Nehemiah", "Immortal", "Jonathan", "Jonathan", "Redeemer", "Truthful", "Nazareth", "Golgotha", "Deliverer", "Shepherd", "Messiah", "Gracious", "Shekinah", "Atonement", "Merciful", "Incorruptible", "Incorruptible", "Righteousness", "Thessalonians", "Sanctification", "Melchizedek", "Incomparable", "Justification", "Immanent", "Transcendent", "Glorification", "Regeneration", "Omnipresent", "Compassionate", "Incorrumtible", "Unfathomable"]
palavra = jogo[Math.floor(Math.random() * 51)]
console.log(palavra)
var correto = document.getElementById("acerto")
var erro = document.getElementById("erro")
var scorenumber = 0
var highscorenumber = 0
var scoretext = document.getElementById("score")
var highscoretext = document.getElementById("highscore")

function proximo(){
    var spelling = document.getElementById("spelling").value
    if (spelling.toUpperCase() == palavra.toUpperCase())
    {
        document.getElementById("card").style.backgroundColor = "green"
        spelling = ""
        setTimeout(()=>{document.getElementById("card").style.backgroundColor = "white"}, 100)
        correto.play()
        scorenumber++
        scoretext.innerHTML = "score:"+scorenumber
    }
    else{
      document.getElementById("card").style.backgroundColor = "red"
        spelling = ""
        setTimeout(()=>{document.getElementById("card").style.backgroundColor = "white"}, 100)
        erro.play()
        correcao.innerHTML = palavra
        if (scorenumber > highscorenumber)
        {
            highscorenumber = scorenumber
        }
        highscoretext.innerHTML = "high-score:"+highscorenumber
        scorenumber = 0
        scoretext.innerHTML = "score:"+scorenumber
    }
    palavra = jogo[Math.floor(Math.random() * 51)];
}
var correcao = document.createElement("p")
document.getElementById("card").appendChild(correcao)