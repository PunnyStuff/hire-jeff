console.log("hahaha kekw")
gsap.registerPlugin(ScrollTrigger);


// functions to make the gallery work
const fade = document.querySelector('#fade')
const eboy_logo = document.querySelector('#ex_1')
const secslice_logo = document.querySelector('#ex_2')
const third_logo = document.querySelector('#ex_3')
const eboy_full = document.querySelector('#example_1_hidden')
const secslice_full = document.querySelector('#example_2_hidden')
const third_full = document.querySelector('#example_3_hidden')
const hero_jeff = document.querySelector('#hero_jeff')

function eboy_hidden_toggle() {
    eboy_full.classList.toggle('hidden')
    fade.classList.toggle('hidden')
}
function secslice_hidden_toggle(){
    secslice_full.classList.toggle('hidden')
    fade.classList.toggle('hidden')
}
function third_hidden_toggle(){
    third_full.classList.toggle('hidden')
    fade.classList.toggle('hidden')
}
function fade_on_click(){
    secslice_full.classList.add('hidden')
    eboy_full.classList.add('hidden')
    third_full.classList.add('hidden')
    fade.classList.toggle('hidden')
}

eboy_logo.addEventListener('click', function(){
    eboy_hidden_toggle()
})
secslice_logo.addEventListener('click', function(){
    secslice_hidden_toggle()
})
third_logo.addEventListener('click', function(){
    third_hidden_toggle()
})
fade.addEventListener('click', function(){
    fade_on_click()
})

//progress bar
gsap.to('progress', {
  value: 100,
  ease: 'none',
  scrollTrigger: { scrub: 0.3 }
});

//animations
gsap.from("#title_1", {
    opacity: 0,
    x: -100,
    duration: 1,
})
gsap.from("#title_2", {
    opacity: 0,
    x: 100,
    duration: 1,
})
gsap.fromTo("#hero_jeff", {
    opacity: 0,
    yPercent: 100,
    xPercent:-50,
},
{
    opacity:100,
    yPercent:0,
    xPercent:-50,
    duration:1,
})
// I chose to use fromTo here over from, because for some reason it would only work once, and refreshing the page would remove the css of transform: translate(-50%, 0); for some reason. so by defining the start xPercent and end xPercent it woudl remain centered.