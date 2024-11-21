// script.js
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const cadastroScreen = document.getElementById("cadastroScreen");
    const successScreen = document.getElementById("successScreen");
    const backButton = document.getElementById("backButton");
  
    // Gerenciar o envio do formulário
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Impede o recarregamento da página
      cadastroScreen.style.display = "none";
      successScreen.style.display = "block";
    });
  
    // Gerenciar o botão de voltar
    backButton.addEventListener("click", () => {
      successScreen.style.display = "none";
      cadastroScreen.style.display = "block";
    });
  });
  