var imgmodoescuro = document.getElementById("imgmodoescuro");

var hagaum = document.querySelectorAll("h1");

var botaosobre = document.getElementById("background-vermais");

var navegacao = document.getElementById("navegacao");

var logo = document.getElementById("imglogo");

var resumo = document.getElementById("resumo");

var articlebackgroudcolor = document.getElementById("background-color-article");

var carrosel = document.getElementById("carrosel-projetos");

var buttonnav = document.getElementsByClassName("effect");

var estado = false;

function ativarnoturno() {
  //modo escuro
  if (estado) {
    imgmodoescuro.src = "img/sunny.png";

    for (var i = 0; i < hagaum.length; i++) {
      hagaum[i].style.color = "var(--color-h1-moony)";
    }

    navegacao.style.backgroundColor = "var(--header-moony)";

    logo.src = "img/logo-moony.png";

    resumo.style.color = "whitesmoke";

    articlebackgroudcolor.style.backgroundColor = "var(--article-moony)";

    carrosel.style.backgroundColor = "var(--article-moony)";

    document.body.style.setProperty("--button-nav", "(var)--button-nav-moony");

    document.body.style.setProperty("--button-sobre", "var(--header-moony)");
    
  } else {

    imgmodoescuro.src = "img/night.png";

    for (var i = 0; i < hagaum.length; i++) {
      hagaum[i].style.color = "var(--color-h1-sunny)";
    }

    navegacao.style.backgroundColor = "var(--header-sunny)";

    logo.src = "img/logo-sunny.png";

    resumo.style.color = "black";

    articlebackgroudcolor.style.backgroundColor = "var(--article-sunny)";

    carrosel.style.backgroundColor = "var(--article-sunny)";

    document.body.style.setProperty("--button-nav", "var(--button-nav-sunny)");

    document.body.style.setProperty("--button-sobre", "var(--header-sunny)");

  }

  estado = !estado;
}
