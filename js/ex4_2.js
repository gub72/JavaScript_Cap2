const frm = document.querySelector("form")
const res = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const nome = frm.inNome.value//Nome do usuario
    const masculino = frm.inMasculino.checked//sexo do usuario
    const altura = Number(frm.inAltura.value)//altura do usuario
    let peso//Processo de dados

    if(masculino){
        peso=22*Math.pow(altura,2)
    }else{
        peso=21*Math.pow(altura,2)
    }
    res.innerText = `${nome} seu peso ideal e ${peso.toFixed(3)}kg.`//saida de dados

})
frm.addEventListener("reset",(e)=>{
    res.innerText = ``//Botao reset
})