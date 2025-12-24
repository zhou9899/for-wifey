
const intro = document.getElementById("intro");
const letter = document.getElementById("letter");
const final = document.getElementById("final");
const btn = document.getElementById("giftBtn");
const hearts = document.getElementById("hearts");
const bg = document.getElementById("bg");
const letterText = document.getElementById("letterText");

const message = `
Hey Wifey ... 🍓

Somehow, you keep becoming more precious to me.
Even through a screen, you still manage to comfort me and I love spending time with you~.
And thank you for choosing me and for being so patient and kind.
I’m really glad I get to be here
Today isn’t just your birthday
it’s the day the world was blessed with you.
wishing you a happy birthday 🌹 🎂.
i love you so much lets stay always together happy and smiling.  🖤

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
