alert("seja bem vindo ao Quiz")

//criando as perguntas
const perguntas =[
    {
        pergunta:"Pergunta numero 1 ?\n a) Opcao A \n b) Opcao B \n c) Opcao C ",
        resposta:"A"
    },
    {
        pergunta:"Pergunta numero 2 ?\n a) Opcao A \n b) Opcao B \n c) Opcao C ",
        resposta:"A"
    },
    {
        pergunta:"Pergunta numero 3 ?\n a) Opcao A \n b) Opcao B \n c) Opcao C ",
        resposta:"A"
    },
    {
        pergunta:"Pergunta numero 4 ?\n a) Opcao A \n b) Opcao B \n c) Opcao C ",
        resposta:"B"
    },
]

//declarando a variavel acerto
let acertos =0;

//percorrendo as perguntas
for (let i =0; i <perguntas.length; i++){
    const respostaUsuario =prompt(perguntas[i].pergunta)
    
if(respostaUsuario.toLowerCase()===perguntas[i].resposta.toLowerCase()){
    acertos++;
}
}
//mostrando o resultado na pagina quiz
document.getElementById("msg").innerHTML = (`Você acertou ${acertos} de ${perguntas.length} perguntas`)
