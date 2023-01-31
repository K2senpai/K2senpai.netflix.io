let cursor_community = document.querySelector(".cursor_community")

communaute.addEventListener("mousemove",(e)=>{
    let moveX = e.offsetX
    let moveY = e.offsetY
    cursor_community.style.left = (e.clientX-cursor_community.clientWidth/2) + "px"
    cursor_community.style.top = (e.clientY-cursor_community.clientHeight) + "px"
  })
  
  document.addEventListener("mousemove", (e) => {
    let moveX = e.offsetX
    let moveY = e.offsetY
    cursor.style.left = (e.clientX-10) + "px"
    cursor.style.top = (e.clientY -10) + "px"
    // shake_button.forEach(function (element) {
    //   let boutton = element.querySelector("button")
    //   let Ymove
    //   element.addEventListener("mousemove", () => {
    //     let Xmove = (moveX / 500) * (25 * 2) - 10
    //     if (moveY > 50) {
    //       Ymove = (moveY / 500) * (25 * 2) - 10
    //     }
    //     else if (moveY < 50) {
    //       Ymove = (moveY / 500) * (25 * 2) + 10
    //     }
    //     else if (moveY > 300 || moveX > 300) {
    //       moveX = 30
    //       moveY = 30
    //     }
    //     boutton.style.transform = `translate(${Xmove}px,${Ymove}px)`
    //   })
    //   element.addEventListener("mouseleave", () => {
    //     boutton.style.transform = `translate(0)`
    //   })
    // })
  })