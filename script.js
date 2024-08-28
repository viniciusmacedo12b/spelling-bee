var palavra
var jogo = []
palavra = jogo[Math.floor(Math.random() * 50)]
console.log(palavra)
var correto = document.getElementById("acerto")
var erro = document.getElementById("erro")
var scorenumber = 0
var highscorenumber = 0
var scoretext = document.getElementById("score")
var highscoretext = document.getElementById("highscore")
var spelling = document.getElementById("spelling")

function proximo(){
    if (spelling.value.toUpperCase() == palavra.toUpperCase())
    {
    
        document.getElementById("card").style.backgroundColor = "green"
        spelling.value = ""
        setTimeout(()=>{document.getElementById("card").style.backgroundColor = "white"}, 100)
        correto.play()
        scorenumber++
        scoretext.innerHTML = "score:"+scorenumber
    }
    else{
      document.getElementById("card").style.backgroundColor = "red"
        spelling.value = ""
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
    if(diff == 1){
        palavra = jogo[Math.floor(Math.random() * 16)]
    }
    else if (diff == 2)
    {
        palavra = jogo[Math.floor(Math.random() * 16)]
    }
    else if (diff == 3)
    {
        palavra = jogo[Math.floor(Math.random() * 15)]
    }
    else{
        palavra = jogo[Math.floor(Math.random() * 50)]
    }
}
var correcao = document.createElement("p")
document.getElementById("card").appendChild(correcao)

function facil(){
    localStorage.setItem("diff", 1)
    window.location.href = "index2.html";
}
function medio(){
    localStorage.setItem("diff", 2)
    window.location.href = "index2.html";
}
function dificil(){
    localStorage.setItem("diff", 3)
    window.location.href = "index2.html";
}
function aleatorio(){
    localStorage.setItem("diff", 4)
window.location.href = "index2.html";
}
var diff = localStorage.getItem("diff")
if (diff == 1)
{
    jogo = ["Joshua", "Gideon", "Deborah", "Zealous", "Provider", "Sustainer", "Solomon", "Creator", "Elijah", "Mighty", "Isaiah", "Invisible", "Jacob", "Ezekiel", "Majestic", "Infinite", "Esther"]
    palavra = jogo[Math.floor(Math.random() * 16)]
}
if (diff == 2)
    {

        jogo = ["Redemption", "Sovereign", "Nehemiah", "Immortal", "Jonathan", "Jonathan", "Redeemer", "Truthful", "Nazareth", "Golgotha", "Deliverer", "Shepherd", "Messiah", "Gracious", "Shekinah", "Atonement", "Merciful"]
        palavra = jogo[Math.floor(Math.random() * 16)]
    }
    if (diff== 3)
        {
            jogo = ["Incorruptible", "Incorruptible", "Righteousness", "Thessalonians", "Sanctification", "Melchizedek", "Incomparable", "Justification", "Immanent", "Transcendent", "Glorification", "Regeneration", "Omnipresent", "Compassionate", "Unfathomable", "Intercessor"]
            palavra = jogo[Math.floor(Math.random() * 15)]
        }
        if (diff== 4)
            {
                jogo = ["Joshua", "Gideon", "Deborah", "Zealous", "Provider", "Sustainer", "Solomon", "Creator", "Elijah", "Mighty", "Isaiah", "Invisible", "Jacob", "Ezekiel", "Majestic", "Infinite", "Esther", "Redemption", "Sovereign", "Nehemiah", "Immortal", "Jonathan", "Jonathan", "Redeemer","Intercessor","Truthful", "Nazareth", "Golgotha", "Deliverer", "Shepherd", "Messiah", "Gracious", "Shekinah", "Atonement", "Merciful", "Incorruptible", "Incorruptible", "Righteousness", "Thessalonians", "Sanctification", "Melchizedek", "Incomparable", "Justification", "Immanent", "Transcendent", "Glorification", "Regeneration", "Omnipresent", "Compassionate","Unfathomable"]
                palavra = jogo[Math.floor(Math.random() * 50)]            
            }

            document.body.addEventListener("keyup", (event)=>{
               if (event.code == "Enter")
               {
                proximo()
               }
               if (event.code == "Space")
                {
                    responsiveVoice.speak(palavra);
                    console.log(spelling.value)
                    console.log(palavra)
                  spelling.value = spelling.value.trim()
                }
            })