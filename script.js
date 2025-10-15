document.addEventListener("DOMContentLoaded", () => {
  const sectionTitle = document.querySelector(".skills h3");
  const list = document.querySelector(".skills ul");

  list.style.display = "none";

  sectionTitle.style.cursor = "pointer";

  sectionTitle.addEventListener("click", () => {
    if (list.style.display === "none") {
      list.style.display = "block";
      sectionTitle.textContent = "Скиллы (свернуть)";
    } 
    
    else {
      list.style.display = "none";
      sectionTitle.textContent = "Скиллы (раскрыть)";
    }
  });
});
