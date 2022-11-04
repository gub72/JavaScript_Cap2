const frm = document.querySelector("form")
let res1 = document.querySelector("#outTri")
let res2 = document.querySelector("#outTipo")

frm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const a = Number(frm.inLadoA.value)
    const b = Number(frm.inLadoB.value)
    const c = Number(frm.inLadoC.value)

    res1.innerText = ``
    res2.innerText = ``
    if(a+b>c && b+c>a && a+c>b){

        res1.style.color = "green"
        res1.innerText = `Lados podem formar um triangulo.`
        if((a==b)&&(a==c)&&(b==c)){
            return res2.innerText = `Tipo: Equilatero`
        }
        if((a==b)||(a==c)||(b==c)){
            return res2.innerText = `Tipo: Isoceles`
        }else{
            return res2.innerText = `Tipo: Escaleno`
        }
    }
    res1.style.color = "red"
    return res1.innerText = `Lados podem nao formar um triangulo.`
})