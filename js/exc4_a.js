const frm = document.querySelector("form")
const res = document.querySelector("h3")

frm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const num = Number(frm.inNum.value)
    if((num % 2)!=0){
        return res.innerText = `${num} e impar.`
    }
    return res.innerText = `${num} e par.`
})