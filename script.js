document.getElementById("year").textContent = new Date().getFullYear();
const detailsButton = document.getElementById("detailsButton");
const detailsNote = document.getElementById("detailsNote");
detailsButton.addEventListener("click", () => {
  detailsNote.hidden = !detailsNote.hidden;
  detailsButton.textContent = detailsNote.hidden ? "Ver detalles" : "Ocultar detalles";
});
