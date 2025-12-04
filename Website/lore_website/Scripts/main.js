// Simple interactivity for The Endless Chasm

document.addEventListener("DOMContentLoaded", () => {
  const enterBtn = document.getElementById("enterBtn");
  const depthValue = document.querySelector(".depth-value");
  const usernameModal = document.getElementById("usernameModal");
  const usernameForm = document.getElementById("usernameForm");
  const usernameInput = document.getElementById("usernameInput");

  enterBtn.addEventListener("click", () => {
    console.log("[v0] Begin Descent button clicked - showing username modal");
    usernameModal.classList.add("active");
    // Focus on input after a brief delay for animation
    setTimeout(() => {
      usernameInput.focus();
    }, 300);
  });

  usernameForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = usernameInput.value.trim();

    if (username) {
      console.log("[v0] Username entered:", username);
      // Store username in localStorage for use in game
      localStorage.setItem("chasmUsername", username);
      // Navigate to location page
      window.location.href = "./Website/lore_website/start.html";
    }
  });

  usernameModal.addEventListener("click", (e) => {
    if (e.target === usernameModal) {
      usernameModal.classList.remove("active");
      usernameInput.value = "";
    }
  });

});
