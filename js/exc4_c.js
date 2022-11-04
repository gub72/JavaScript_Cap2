const frm = document.querySelector("form")
let res1 = document.querySelector("#outTempo")
let res2 = document.querySelector("#outTroco")

frm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const valor = Number(frm.inValor.value)
    let valorh = Number(3.00)

    if(valor<=1.00||valor<1.75){
        res1.innerText=`Tempo: 30 min.`
        valorh=1.00
        valorh-=valor
        return res2.innerText = `Troco: R$ ${valorh.toFixed(2)}.`
    }
    if(valor<=1.75||valor<3.00){
        res1.innerText = `Tempo: 60 min.`
        valorh = 1.75
        valorh-=valor
        return res2.innerText = `Troco: R$ ${valorh.toFixed(2)}.`
    }
        valorh -= valor
        res1.innerText = `Tempo: 120 min.`
        return res2.innerText = `Troco: R$ ${valorh.toFixed(2)}.`
})