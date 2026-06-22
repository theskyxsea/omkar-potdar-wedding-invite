const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

// ======================
// HERO CAROUSEL
// ======================

function showNextSlide() {
  slides[currentSlide].classList.remove("active");

  currentSlide = (currentSlide + 1) % slides.length;

  slides[currentSlide].classList.add("active");
}

if (slides.length > 1) {
  setInterval(showNextSlide, 3000);
}

// ======================
// WEDDING COUNTDOWN
// ======================

// Year, Month (0-indexed), Day, Hour, Minute
const weddingDate = new Date(2026, 6, 19, 12, 33, 0).getTime();

function updateCountdown() {
  const now = Date.now();
  const remaining = weddingDate - now;

  const timer = document.getElementById("timer");

  if (!timer) return;

  if (remaining <= 0) {
    timer.innerHTML = `       <div class="celebration">
        🎉 Wedding Day Has Arrived!       </div>
    `;
    return;
  }

  const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

  timer.innerHTML = ` <div class="count-box">
${days} <span>Days</span> </div>

<div class="count-box">
  ${hours.toString().padStart(2, "0")}
  <span>Hours</span>
</div>

<div class="count-box">
  ${minutes.toString().padStart(2, "0")}
  <span>Minutes</span>
</div>

<div class="count-box">
  ${seconds.toString().padStart(2, "0")}
  <span>Seconds</span>
</div>

`;
}

updateCountdown();
setInterval(updateCountdown, 1000);
