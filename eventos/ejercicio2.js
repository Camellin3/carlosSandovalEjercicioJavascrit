let dolar = document.getElementById("dolar-input")
let peso = document.getElementById("peso-input")

dolar.addEventListener('keyup', a=>{
     peso.value = a.target.value * 3975.62
})

peso.addEventListener('keyup', a=>{
    dolar.value = a.target.value / 3975.62
})