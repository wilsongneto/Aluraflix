document.getElementById("toggle-button").addEventListener("click", function() {
    const filmes = document.querySelector(".categoria-filmes");
    if (filmes.style.display === "none") {
        filmes.style.display = "flex";
    } else {
        filmes.style.display = "none";
        }
    });
