const frm = document.querySelector("form")
const res = document.querySelector("h3")

frm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const horaBrasil = Number(frm.inHoraB.value)
    let horaFranca = horaBrasil+5
    if(horaFranca>24){
        horaFranca = horaFranca - 24
    }
    res.innerText = `Hora na franca ${horaFranca.toFixed(2)}`
})