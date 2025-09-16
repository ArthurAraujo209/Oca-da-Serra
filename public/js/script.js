const track = document.querySelector(".carousel-track");
const items = document.querySelectorAll(".carousel-item");
const nextBtn = document.querySelector(".carousel-btn.next");
const prevBtn = document.querySelector(".carousel-btn.prev");
const dotsContainer = document.querySelector(".carousel-dots");

let currentIndex = 0;

// Criar bolinhas
items.forEach((_, i) => {
  const dot = document.createElement("button");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => goToSlide(i));
  dotsContainer.appendChild(dot);
});
const dots = document.querySelectorAll(".carousel-dots button");

function updateCarousel() {
  const slideWidth = items[0].clientWidth; // largura de um slide
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  dots.forEach((dot, i) =>
    dot.classList.toggle("active", i === currentIndex)
  );
}

function goToSlide(index) {
  currentIndex = index;
  updateCarousel();
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
});

// Automático
setInterval(() => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
}, 3000);

// Atualiza quando a tela muda de tamanho
window.addEventListener("resize", updateCarousel);
