    const aboutButton = document.getElementById("aboutButton");
    const aboutContent = document.getElementById("aboutContent");

    aboutButton.addEventListener("click", function () {

        const isOpen = aboutButton.getAttribute("aria-expanded") === "true";

        if (isOpen) {
            aboutContent.style.maxHeight = "0";
            aboutContent.style.opacity = "0";

            aboutButton.setAttribute("aria-expanded", "false");
            aboutContent.setAttribute("aria-hidden", "true");
            aboutButton.classList.remove("active");

            aboutButton.innerHTML =
                'Sobre <i class="fa-solid fa-chevron-down"></i>';

        } else {
            aboutContent.style.maxHeight =
                aboutContent.scrollHeight + "px";

            aboutContent.style.opacity = "1";

            aboutButton.setAttribute("aria-expanded", "true");
            aboutContent.setAttribute("aria-hidden", "false");
            aboutButton.classList.add("active");

            aboutButton.innerHTML =
                'Fechar <i class="fa-solid fa-chevron-down"></i>';
        }

    });
    
const botaoGarantia = document.getElementById("mostrarGarantia");
const conteudoGarantia = document.getElementById("garantiaConteudo");

botaoGarantia.addEventListener("click", function () {
    conteudoGarantia.hidden = !conteudoGarantia.hidden;

    botaoGarantia.textContent = conteudoGarantia.hidden
        ? "Saiba mais sobre as aulas"
        : "Ocultar informações";
});