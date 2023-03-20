const adviceId = document.getElementById('advice-id')
const adviceText = document.querySelector('.advice-text')
const Btn = document.querySelector('.icon-dice-svg')

let advices = [
    {
        advice: "the begining of wisdom is knowing who you are",
        id : 300
    },
    {
        advice: "Constantly regulate whate comes to your mind",
        id: 765
    },
    {
        advice: "Read as a man thinketh so he is and you will understand how thought works",
        id: 840
    },
    {
        advice: "Always stay humble beccause it really pays",
        id: 53
    },
    {
        advice: "Always be silent because it makes you unpredictable",
        id: 78
    },
    {
        advice: "Work smartly not hard",
        id: 230
    }
]

Btn.addEventListener('click', ()=> {
    let random = Math.floor(Math.random() * advices.length)
    
    adviceId.innerText = advices[random].id
    adviceText.innerText = advices[random].advice
})