const colours = ["orange", "gold", "rgba(215, 39, 145)", "#ff4500"]
const btn = document.getElementById('btn')
const colour = document.querySelector('.colour')

btn.addEventListener('click', () => {
    const randNo = getRandomNumber()
    document.body.style.backgroundColor = colours[randNo]
    colour.textContent = colours[randNo]
})

function getRandomNumber() {
    return Math.floor(Math.random() * colours.length)
}