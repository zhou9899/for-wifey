const intro = document.getElementById("intro");
const letter = document.getElementById("letter");
const final = document.getElementById("final");
const btn = document.getElementById("giftBtn");
const hearts = document.getElementById("hearts");
const bg = document.getElementById("bg");
const letterText = document.getElementById("letterText");

const message = `
My Strawberry 🍓, my wifey, my Ryuberry…

Another year older, yet somehow you keep becoming more precious to me.
Even through a screen, you manage to be my comfort, my chaos, my smile.

Today isn’t just your birthday.
It’s the day the world was blessed with you.

Thank you for existing.
Thank you for choosing me.
I love you, always.
`;

let i = 0;

btn.onclick = () => {
  intro.classList.remove("active");
  letter.classList.add("active");
  typeText();
};

function typeText() {
  if (i < message.length) {
    letterText.textContent += message.charAt(i);
    i++;
    setTimeout(typeText, 40);
  } else {
    setTimeout(() => {
      letter.classList.remove("active");
      final.classList.add("active");
    }, 2500);
  }
}

/* Floating hearts */
setInterval(() => {
  const heart = document.createElement("span");
  heart.textContent = "🖤";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 6 + Math.random() * 5 + "s";
  hearts.appendChild(heart);

  setTimeout(() => heart.remove(), 12000);
}, 300);

/* Mouse parallax */
document.addEventListener("mousemove", e => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  bg.style.transform = `translate(${x}px, ${y}px)`;
});
