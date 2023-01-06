// Daily challenge: Tell the story

// 1. Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
let form = document.forms[0]
form.addEventListener('submit', (e) => {
    e.preventDefault()
    let noun = document.querySelector('#noun').value.trim()
    let adjective = document.querySelector('#adjective').value.trim()
    let person = document.querySelector('#person').value.trim()
    let verb = document.querySelector('#verb').value.trim()
    let place = document.querySelector('#place').value.trim();
    // 3. Write a story that uses each of the values.
    let span = document.querySelector('#story')
    let words = [person, verb, noun, adjective, place]
    span.innerHTML = words.join(' ')
    // 4. Make sure you check the console for errors when playing the game.
    for (const w of words) {
        if(!w.length) {
            alert("Please fill in all the fields")
            break
        }
    }
    // 5. Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user).
    let sentences = [];
    for (let i = 0; i < 10; i++) {
        let sentence = []
        sentence.length = words.length
        sentence.fill(null)
        do {
            sentence[sentence.indexOf(null)] = words[Math.floor(Math.random() * words.length)]
        } while (sentence.includes(null));
        sentences.push(sentence)
    }
    document.getElementById("shuffle").onclick = () => {
        span.innerHTML = sentences[Math.floor(Math.random() * sentences.length)].join(" ")
    }
})