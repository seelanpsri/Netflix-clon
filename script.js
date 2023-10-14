let email=document.querySelectorAll('.address');
let active=document.querySelectorAll('.question-active')
let input=document.querySelectorAll('input');
input.forEach(element=>{
    element.addEventListener('click',(e)=>{
        e.target.previousElementSibling.classList.add('move-up')
})
})
active.forEach(element=>{
    element.addEventListener('click',e=>{
     e.target.lastElementChild.classList.toggle('rot')
      e.target.nextElementSibling.classList.toggle('block')
    })
})