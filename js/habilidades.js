const elemento = document.querySelectorAll(".img-habilidades");
const descricao = document.querySelector("#textohabilidades");

const sobre = [
  "<h1>HTML</h1> <p>É uma linguagem de marcação utilizada na construção de páginas na Web.</p>",
  "<h1>CSS</h1>  <p>É um mecanismo para adicionar estilo a um documento web.</p>",
  "<h1>JavaScript</h1> <p>É uma linguagem de programação. Juntamente com HTML e CSS, é uma das três principais tecnologias da web.</p>",
  "<h1>ReactJS</h1> <p>O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.</p>",
  "<h1>NodeJS</h1> <p>Node. js é um ambiente de execução JavaScript que permite executar aplicações desenvolvidas com a linguagem de forma autônoma, sem depender de um navegador.</p>",
  "<h1>PostgreSQL</h1> <p>PostgreSQL é um sistema gerenciador de banco de dados objeto relacional.</p>",
  "<h1>C#</h1> <p>C# é uma linguagem de programação criada pela Microsoft como parte da plataforma .NET.</p>"
];

sobre.forEach((element, index) => {
  let index1 = index;

  elemento[index1].addEventListener("click", () => {
    descricao.innerHTML = `${sobre[index1]}`;
  });
});
