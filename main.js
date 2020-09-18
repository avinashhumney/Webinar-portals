const inputs = document.querySelector('.input-fields')
inputs.style.display = 'none'

const radio1 = document.querySelector('#individual')
radio1.addEventListener('click', () => {
    inputs.style.display = 'block'
    document.querySelector('.corporate-fields').style.display = 'none'
    document.querySelector('.individual-fields').style.display = 'block'
})
const radio2 = document.querySelector('#corporate')
radio2.addEventListener('click', () => {
    inputs.style.display = 'block'
    document.querySelector('.individual-fields').style.display = 'none'
    document.querySelector('.corporate-fields').style.display = 'block'
})