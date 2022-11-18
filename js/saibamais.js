const sobretexto = document.getElementById('resumo-texto')
const botao = document.getElementById('background-vermais')
const botaotexto = document.getElementById('textovermais')
const seta = document.getElementById('imgseta')

var estado = false;

function vermais(){

    estado = !estado

    if(estado){
        sobretexto.innerHTML = "<p> Me chamo Gerson, tenho 22 anos e meu último cargo, no regime CLT, foi como professor de inovação e tecnologia. </p> <p> Em 2017 entrei para uma oficina de robótica no colégio federal onde cursava o ensino médio. Dentro da oficina, eu fazia parte de uma equipe onde desenvolvemos projetos utilizando programação na linguagem C++ e Python para automatizar robôs e projetos para participarmos de eventos ( Hackathons e torneios de robótica ) e propor inovações para solucionar uma determinada problemática. </p> <p> Minha participação na oficina foi de 2017 a 2019, recebendo reconhecimentos pelos projetos que desenvolvia e conquistando diversos méritos em torneios. </p> <p> Além de ser medalhista nesta época, recebi uma moção de aplausos pelo projeto que havia desenvolvido para cidade de Niterói, com a intenção de ajudar a mobilidade urbana. Também realizei exposições e palestras sobre o assunto e o projeto desenvolvido. </p> <p> Após terminar o colégio, recebi uma bolsa para estudar técnico em programação de jogos digitais, minha mais recente formação. Durante quase 2 anos deste técnico, criei 4 jogos utilizando a linguagem C# e a Unity3D, além de utilizar outras ferramentas como Git. </p>"

        botaotexto.innerHTML = 'Esconder'
        seta.src = 'img/setacima-sunny.png'
        botao.style.background = 'transparent'

    }else{
        sobretexto.innerHTML ='<p> Me chamo Gerson, tenho 22 anos e meu último cargo, no regime CLT, foi como professor de inovação e tecnologia. </p> <p> Em 2017 entrei para uma oficina de robótica no colégio federal onde cursava o ensino médio. Dentro da oficina, eu fazia parte de uma equipe onde desenvolvemos projetos utilizando programação na linguagem C++ e Python para automatizar robôs e projetos para participarmos de eventos ( Hackathons e torneios de robótica ) e propor inovações para solucionar uma determinada </p>'

        botaotexto.innerHTML = 'Ver mais'
        seta.src = 'img/setabaixo-sunny.png'
        botao.style.background = 'linear-gradient(180deg,hsla(0,0%,100%,0) 0,var(--button-sobre) 43%,var(--button-sobre))'
    }


}