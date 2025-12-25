const buttons = document.querySelectorAll(".filters button");
const items = document.querySelectorAll(".menu-item");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;

    items.forEach((item) => {
      if (filter === "all" || item.dataset.category === filter) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    });
  });
});
q