

const colorBtn = document.querySelector('#colorBtn')
const placeBtn = document.querySelector('#placeBtn')
const ritualBtn = document.querySelector('#ritualBtn')

colorBtn.addEventListener('click', colorFunc )
placeBtn.addEventListener('click', placeFunc)
ritualBtn.addEventListener('click', ritualFunc)


function colorFunc(){
    alert("Green")
}
function placeFunc(){
    alert("On top of a snowy mountain with a snowboard")
}
function ritualFunc(){
    alert ("Dinner")
}
