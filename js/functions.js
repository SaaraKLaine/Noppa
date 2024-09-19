const diceElement = document.getElementById('dice')

diceElement.addEventListener('click', function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1
    const diceImage = diceElement.querySelector('img')
    diceImage.src = `./img/${randomNumber}.png`
})