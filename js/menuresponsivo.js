function makeResponsive() {
  // Obtém o elemento "navegação"
  var navElement = document.getElementById("navegacao");

  // Cria um novo elemento de botão
  var responsiveButton = document.createElement("button");
  responsiveButton.innerHTML = "Menu";

  // Adiciona o botão ao elemento de navegação
  navElement.appendChild(responsiveButton);

  // Adiciona um evento de clique ao botão
  responsiveButton.addEventListener("click", function() {
    // Obtém o elemento de menu
    var menuElement = document.getElementById("menu");

    // Adiciona ou remove a classe "responsive" do elemento de menu
    if (menuElement.classList.contains("responsive")) {
      menuElement.classList.remove("responsive");
    } else {
      menuElement.classList.add("responsive");
    }
  });
}
