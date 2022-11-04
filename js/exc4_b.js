const frm = document.querySelector("form")
const res = document.querySelector("h3")

frm.addEventListener("submit",(e)=>{

    e.preventDefault()
    const veloP = Number(frm.inVeloP.value)
    const veloC = Number(frm.inVeloC.value)
    const velo20 = veloP+(20*veloP)/100
   
    if(veloC<=veloP){
        res.style.color="black"
        return res.innerText = `Sem multa.`
    }
    if(!(veloC>=velo20)){
        res.style.color="#ffa500"
        return res.innerText = `Multa leve.`
    }
    res.style.color="red"
    return res.innerText = `Multa Grave.`
})