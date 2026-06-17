const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.boxShadow =
        "0 0 30px rgba(0,229,255,0.7)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.boxShadow = "none";
    });
});

document.querySelector("form")
.addEventListener("submit", e => {
    e.preventDefault();
    alert("Thanks for contacting me!");
});
