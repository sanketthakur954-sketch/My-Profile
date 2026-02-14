const btn = document.getElementById("enterBtn");
const intro = document.querySelector(".intro");
const container = document.querySelector(".container");
const overlay = document.querySelector(".bg-overlay");

btn.addEventListener("click",()=>{
  intro.style.opacity="0";
  intro.style.pointerEvents="none";

  container.style.opacity="1";
  container.style.pointerEvents="auto";
  container.style.transform="scale(1)";

  overlay.style.opacity="1";
});

/* Card animation */
const cards = document.querySelectorAll(".card");
const io = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add("show");
    }
  });
},{threshold:0.2});

cards.forEach(card=>io.observe(card));