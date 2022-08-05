// Variables

let btn = document.getElementById('container')
let box = document.getElementById('modal-container')
let dlt = document.getElementById('delete')

btn.addEventListener('click', ()=>{
    box.style.display = 'block'
})

dlt.addEventListener('click', ()=>{
    box.style.display = 'none'
})

window.addEventListener('click', (e)=>{
    if(e.target === box){
        box.style.display = 'none'
    }
})