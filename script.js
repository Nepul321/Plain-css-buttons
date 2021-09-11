const btn_black = document.querySelector('.btn-black')
const btn_blue = document.querySelector('.btn-blue')
const btn_green = document.querySelector('.btn-green')

btn_black.addEventListener('mouseover', () => {
      btn_black.style.backgroundColor = "black"
      btn_black.style.transition = "all 0.35s linear"
})

btn_black.addEventListener('mouseout', () => {
    btn_black.style.backgroundColor = "grey"
    btn_black.style.transition = "all 0.35s linear"
})

btn_blue.addEventListener('mouseover', () => {
    btn_blue.style.backgroundColor = "rgb(20, 140, 195)"
    btn_blue.style.transition = "all 0.35s linear"
})

btn_blue.addEventListener('mouseout', () => {
    btn_blue.style.backgroundColor = "grey"
    btn_blue.style.transition = "all 0.35s linear"
})

btn_green.addEventListener('mouseover', () => {
    btn_green.style.backgroundColor = "rgb(24, 226, 24)"
    btn_green.style.transition = "all 0.35s linear"
})

btn_green.addEventListener('mouseout', () => {
    btn_green.style.backgroundColor = "grey"
    btn_green.style.transition = "all 0.35s linear"
})