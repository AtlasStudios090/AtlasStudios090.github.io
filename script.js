ocument.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-in");

    fadeElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.animationDelay = `${index * 0.3}s`;
            element.classList.add("visible");
        }, 200);
    });

    // Acción del botón: Redirigir a YouTube
    const button = document.querySelector(".cta-button");
    button.addEventListener("click", () => {
        window.location.href = "https://www.youtube.com";
    });
});
