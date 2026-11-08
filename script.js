
const upgradeButton = document.getElementById("upgradeButton");
const toast = document.getElementById("toast");

let toastTimer;

if (upgradeButton && toast) {
  upgradeButton.addEventListener("click", function() {
    toast.textContent = "Coming soon";
    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(function() {
      toast.classList.remove("show");
    }, 2000);
  });
}
