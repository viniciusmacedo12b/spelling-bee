var palavra
var jogo = []
palavra = jogo[Math.floor(Math.random() * 65)]
var correto = document.getElementById("acerto")
var erro = document.getElementById("erro")
var hipercorreto = document.getElementById("hiperacerto")
var hipererro = document.getElementById("hipererro")
var scorenumber = 0
var highscorenumber = 0
var pal = 0
var scoretext = document.getElementById("score")
var highscoretext = document.getElementById("highscore")
var desafio = document.getElementById("desafio")
var perda = document.getElementById("perda")
var spelling = document.getElementById("spelling")
var bee = document.getElementById("premio")
var numpal = 0

function proximo(){
    if (spelling.value.toUpperCase() == palavra.toUpperCase())
    {
        numpal++
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
        if (diff == 5){
            perda.style.display = "block"
            perda.style.color = "red"
            perda.style.fontSize = "2rem"
            hipererro.play()
            setTimeout(()=>{window.location.href = "index.html";}, 1000)
        }
    }
    if(diff == 1){
        palavra = jogo[Math.floor(Math.random() * jogo.length)]
    }
    else if (diff == 2)
    {
        palavra = jogo[Math.floor(Math.random() * jogo.length)]
    }
    else if (diff == 3)
    {
        palavra = jogo[Math.floor(Math.random() * jogo.length)]
    }
    else if (diff == 4){
        palavra = jogo[Math.floor(Math.random() * jogo.length)]
    }
    else{
        console.log("pal:" + pal) 
        jogo.splice(pal, 1);
        console.log("lenght:" + jogo.length)    
        pal = Math.floor(Math.random() * jogo.length)
        palavra = jogo[pal]  
        console.log("palavra:" + palavra)  

        desafio.innerHTML = "palavra:" + numpal + "/105" 
if (jogo.length == 0){
    hiperacerto.play()
    perda.innerHTML = "PARABENS. VOCE GANHOU!"
    perda.style.display = "block"
    perda.style.color = "green"
    perda.style.fontSize = "2rem"
    localStorage.setItem("vitoria", 1)
    setTimeout(()=>{window.location.href = "index.html";}, 1000)
}
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
function challenge(){
    localStorage.setItem("diff", 5)
window.location.href = "index2.html";
desafio.className = "desafiorevelado"
}
var diff = localStorage.getItem("diff")
if (diff == 1)
{
    jogo = ["Joshua", "Gideon", "Deborah", "Zealous", "Provider", "Sustainer", "Solomon", "Creator", "Elijah", "Mighty", "Isaiah", "Invisible", "Jacob", "Ezekiel", "Majestic", "Infinite", "Esther"]
    palavra = jogo[Math.floor(Math.random() * jogo.length)]
}
if (diff == 2)
    {

        jogo = ["Redemption", "Sovereign", "Nehemiah", "Immortal", "Jonathan", "Redeemer", "Truthful", "Nazareth", "Golgotha", "Deliverer", "Shepherd", "Messiah", "Gracious", "Shekinah", "justifier", "Atonement", "Merciful"]
        palavra = jogo[Math.floor(Math.random() * jogo.length)]
    }
    if (diff== 3)
        {
            jogo = ["Begotten","Incorruptible", "Righteousness", "Thessalonians", "Sanctification", "Melchizedek", "Incomparable", "Justification", "Immanent", "Transcendent", "Glorification", "Regeneration", "Omnipresent", "Compassionate", "Unfathomable", "Intercessor"]
            palavra = jogo[Math.floor(Math.random() * jogo.length)]
        }
        if (diff== 4)
            {
                jogo = ["Begotten", "Propitiation", "Imprecatory", "Septuagint", "Concupiscence", "Sovereignty", "Shalom", "Ceasing", "Incarnation", "Commandment", "Beatitudes", "Witness", "Nazarene", "Pentecost", "Pharaoh", "Scribe", "Multiply", "Remembrance", "Courageous", "Harvest", "Discernment", "Atonement", "Scepter", "Charity", "Deuteronomy","Justification", "Circumstances", "Tabernacle", "Righteousness", "Redemption", "Fruitful", "Vineyard", "Transfiguration", "Prophecy", "Forgiveness", "Messiah", "Beatification", "Chronicles", "Armageddon", "Rebellion", "Hosanna", "Servant", "Wilderness", "Inheritance", "Genesis", "Salvation", "Worship", "Parable", "Longsuffering","Blessing", "Apocalypse", "Pilgrimage", "Immanuel", "Sanctification", "Judgment", "Resurrection", "Tribulation", "Sadducee", "Knowledge", "Pentateuch", "Regeneration", "Omnipresent", "Compassionate", "Intercessor", "Unfathomable", "reconciliation", "Joshua", "Gideon", "Deborah", "Zealous", "Provider", "Sustainer", "Solomon", "Creator", "Elijah", "Mighty", "Isaiah", "Invisible", "Jacob", "Ezekiel", "Majestic", "Infinite", "Esther", "Sovereign", "Nehemiah", "Immortal", "Jonathan", "Jonathan", "Redeemer", "Truthful", "Nazareth", "Golgotha", "Deliverer", "Shepherd", "Gracious", "Shekinah", "Merciful", "Incorruptible", "Incorruptible", "Thessalonians", "Melchizedek", "Incomparable", "Immanent", "Transcendent", "Glorification"]
                palavra = jogo[Math.floor(Math.random() * jogo.length)]            
            }
            if (diff== 5)
                {
                    jogo = ["Begotten", "Propitiation", "Imprecatory", "Septuagint", "Concupiscence", "Sovereignty", "Shalom", "Ceasing", "Incarnation", "Commandment", "Beatitudes", "Witness", "Nazarene", "Pentecost", "Pharaoh", "Scribe", "Multiply", "Remembrance", "Courageous", "Harvest", "Discernment", "Atonement", "Scepter", "Charity", "Deuteronomy","Justification", "Circumstances", "Tabernacle", "Righteousness", "Redemption", "Fruitful", "Vineyard", "Transfiguration", "Prophecy", "Forgiveness", "Messiah", "Beatification", "Chronicles", "Armageddon", "Rebellion", "Hosanna", "Servant", "Wilderness", "Inheritance", "Genesis", "Salvation", "Worship", "Parable", "Longsuffering","Blessing", "Apocalypse", "Pilgrimage", "Immanuel", "Sanctification", "Judgment", "Resurrection", "Tribulation", "Sadducee", "Knowledge", "Pentateuch", "Regeneration", "Omnipresent", "Compassionate", "Intercessor", "Unfathomable", "reconciliation", "Joshua", "Gideon", "Deborah", "Zealous", "Provider", "Sustainer", "Solomon", "Creator", "Elijah", "Mighty", "Isaiah", "Invisible", "Jacob", "Ezekiel", "Majestic", "Infinite", "Esther", "Sovereign", "Nehemiah", "Immortal", "Jonathan", "Jonathan", "Redeemer","Truthful", "Nazareth", "Golgotha", "Deliverer", "Shepherd", "Gracious", "Shekinah", "Merciful", "Incorruptible", "Incorruptible", "Thessalonians", "Melchizedek", "Incomparable", "Immanent", "Transcendent", "Glorification"]
                 pal = Math.floor(Math.random() * jogo.length)
                 console.log("pal:" + pal)
                    palavra = jogo[pal]  
                        console.log("palavra:" + palavra)          
                          desafio.style.display = "block"
                          desafio.style.fontSize = "4rem"
                        scoretext.style.display = "none"
                        highscoretext.style.display = "none"
                          console.log("lenght-begin:" + jogo.length)    
                }

            document.body.addEventListener("keyup", (event)=>{
               if (event.code == "Enter")
               {
                proximo()
               }
               if (event.code == "Space")
                {
                    responsiveVoice.speak(palavra);
                  spelling.value = spelling.value.trim()
                }
                if (localStorage.getItem("vitoria") == 1){
                    bee.style.display = "block"
                }
            })