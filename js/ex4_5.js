const frm = document.querySelector("form")
const res = document.querySelector("h3")

frm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const num = Number(frm.inNumero.value)
    const raiz = Math.sqrt(num)
    if(Number.isInteger(raiz)){
        res.innerText = `Raiz: ${raiz}`
    }else{
        res.innerText = `Nao a raiz exata para ${num}, mas ela e ${raiz.toFixed(2)}.`
    }
})