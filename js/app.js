const menu = document.querySelector("#menu")
const close_menu = document.querySelector("#close_menu")
const cursor = document.querySelector("#cursor")
// let cursor_menu = document.querySelector(".cursor_menu")
// let cursor_close = document.querySelector(".cursor_close")
let communaute = document.querySelector(".communaute")
let shake_button = document.querySelectorAll(".shake_button")
let title_film_header_container = document.querySelector(".title_film_header_container")
let body = document.querySelector("body")
let section_start = document.querySelector(".section_start")
let element = document.querySelectorAll(".element")
let faq_item_title = document.querySelectorAll(".faq_item")

faq_item_title.forEach(function(element){
  element.addEventListener("click",()=>{
    let courant = element.querySelector(".faq_item_content")
    let before = element.querySelector(".close_faq")
    courant.classList.toggle("show_faq")
    before.classList.toggle("show_close_faq")
  })
})
var span
element.forEach(function(a){
  a.addEventListener("mouseover",(e)=>{
    e.preventDefault()
    cursor.classList.add("hide_cursor")
  })
  a.addEventListener("mouseleave",()=>{
    cursor.classList.remove("hide_cursor")
  })
})
  menu.addEventListener("click", () => {
    menu_expand.classList.toggle("active_menu")
    close_menu.classList.add("show_button")
  })
  close_menu.addEventListener("click", (e) => {
    e.preventDefault()
    close_menu.classList.remove("show_button")
    menu_expand.classList.remove("active_menu")
  })
  // title_film_header_container.addEventListener("mouseover", () => {
  //     cursor.classList.remove("cursor_active")
  //     cursor.classList.add("cursor_design")
  // })
  // title_film_header_container.addEventListener("mouseleave", () => {
  //     cursor.classList.remove("cursor_design")
  //     cursor.classList.add("cursor_active")
  // })