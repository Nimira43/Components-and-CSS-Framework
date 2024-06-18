const getElement = (selector) => {
    const el = document.querySelector(selector)
    if (el) return el
    throw new Error(`Check classes : ${selector} does not exist`)
}

const navToggle = getElement('.nav-toggle')
const links = getElement('.links')
navToggle.addEventListener('click', () => {
    links.classList.toggle('show-links')
})