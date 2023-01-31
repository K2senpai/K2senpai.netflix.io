let showOff = document.querySelector(".hide-mdp")
let showOn = document.querySelector(".show-mdp")
let password = document.querySelector("#motPasse")

showOff.addEventListener('click', () => {
    showOff.style.display = "none"
    showOn.style.display = "inline-block"
    password.setAttribute("type", 'text')
  })
  showOn.addEventListener('click', () => {
    showOn.style.display = "none"
    showOff.style.display = "inline-block"
    password.setAttribute("type", 'password')
  })
  