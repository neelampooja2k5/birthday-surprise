
// ================================
// PAGE NAVIGATION
// ================================

const pages = document.querySelectorAll(".page");

function showPage(pageId) {
  pages.forEach(page => {
    page.classList.remove("active");
  });

  const target = document.getElementById(pageId);

  if (target) {
    target.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

// ================================
// CRICKET INTRO ANIMATION
// ================================

const startBtn = document.getElementById("startBtn");
const enterBtn = document.getElementById("enterBtn");
const ball = document.querySelector(".ball");
const celebration = document.getElementById("celebration");
const introContent = document.querySelector(".intro-content");

startBtn.addEventListener("click", () => {
  startBtn.disabled = true;
  startBtn.textContent = "🏏 SHOT IN PROGRESS...";

  ball.classList.add("hit");

  setTimeout(() => {
    introContent.style.display = "none";
    celebration.classList.remove("hidden");
    createConfetti();
  }, 2500);
});

enterBtn.addEventListener("click", () => {
  showPage("gifts");
});

// ================================
// CONFETTI EFFECT
// ================================

function createConfetti() {
  const container = document.getElementById("confetti");

  for (let i = 0; i < 70; i++) {
    const piece = document.createElement("span");

    piece.textContent = ["🎉", "✨", "💙", "💜", "🎊"][
      Math.floor(Math.random() * 5)
    ];

    piece.style.position = "fixed";
    piece.style.left = Math.random() * 100 + "%";
    piece.style.top = "-30px";
    piece.style.fontSize = (12 + Math.random() * 18) + "px";
    piece.style.zIndex = "10";
    piece.style.pointerEvents = "none";

    const duration = 2 + Math.random() * 4;
    const delay = Math.random() * 2;

    piece.animate(
      [
        {
          transform: "translateY(0) rotate(0deg)",
          opacity: 1
        },
        {
          transform: `translateY(110vh) rotate(720deg)`,
          opacity: 0.3
        }
      ],
      {
        duration: duration * 1000,
        delay: delay * 1000,
        iterations: 1,
        fill: "forwards"
      }
    );

    container.appendChild(piece);
  }
}

// ================================
// GIFT BOX NAVIGATION
// ================================

const gifts = document.querySelectorAll(".gift");

gifts.forEach(gift => {
  gift.addEventListener("click", () => {
    const targetCard = gift.dataset.card;
    showPage(targetCard);
  });
});

// ================================
// BACK BUTTONS
// ================================

const backButtons = document.querySelectorAll(".back-btn");

backButtons.forEach(button => {
  button.addEventListener("click", () => {
    const targetPage = button.dataset.back;
    showPage(targetPage);
  });
});

// ================================
// FINAL MEMORIES BUTTON
// ================================

const memoriesBtn = document.getElementById("memoriesBtn");

memoriesBtn.addEventListener("click", () => {
  showPage("memories");
});

// ================================
// STOP VIDEO WHEN LEAVING A PAGE
// ================================

const videos = document.querySelectorAll("video");

function stopAllVideos() {
  videos.forEach(video => {
    video.pause();
    video.currentTime = 0;
  });
}

backButtons.forEach(button => {
  button.addEventListener("click", stopAllVideos);
});

memoriesBtn.addEventListener("click", stopAllVideos);

console.log("🏏 Birthday Sports Website Loaded Successfully!");