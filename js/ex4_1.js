const frm = document.querySelector("form")
let res1 = document.querySelector("h4")
let res2 = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const nomeA = frm.inNome.value //Entrada de dados para o processamento(Nome do aluno)
    const nota1 = Number(frm.inNota1.value) //Entrada de dados para o processamento(Nota 1 do aluno)
    const nota2 = Number(frm.inNota2.value) //Entrada de dados para o processamento(Nota 2 do aluno)
    const media = (nota1+nota2)/2 //Processamento para media
    res1.innerText = `Media das notas ${media}` //Saida de Dados Media e nome do aluno
    if (media>=7){
        res2.innerText = `Parabens ${nomeA}! Voce foi aprovado(a)!`//Saida de Dados resultado
        res2.style.color = "blue"
    }else{
        res2.innerText = `Ops ${nomeA}... Voce foi reprovado(a)`//Saida de Dados resultado
        res2.style.color = "red"
    }
})