const frm = document.querySelector("form")
const res1 = document.querySelector("#outResp1")
const res2 = document.querySelector("#outResp2")
const res3 = document.querySelector("#outResp3")

frm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const valor = Number(frm.inSaque.value)
    if(valor % 10 != 0){
        alert("Valor invalido para notas disponiveis (R$ 10, 50, 100)")
        frm.inSaque.focus()
        return
    }
    const notasCem = Math.floor(valor/100)
    let resto = valor % 100
    const notasCinquenta = Math.floor(resto/50)
    resto = resto % 50
    const notasDez = Math.floor(resto/10)
    if (notasCem > 0){
        res1.innerText = `Notas de R$100,00: ${notasCem}`
    }
    if (notasCinquenta > 0){
        res2.innerText = `Notas de R$50,00: ${notasCinquenta}`
    }
    if (notasDez >0){
        res3.innerText = `Notas de R$10,00: ${notasDez}`
    }

})

frm.addEventListener("reset",()=>{
    res1.innerText = ``
    res2.innerText = ``
    res3.innerText = ``
})