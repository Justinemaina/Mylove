"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

const questions = [
  { q: "Do you love me Kate🥺?", yes: "Yes" },
  { q: "Are you sure you don't love me?🥹", yes: "I love you❤️" },
  { q: "Really? Not even a little bit?", yes: "A liitle bit!" },
  { q: "Really😭?", yes: "Naah:)" },
  { q: "You're joking right?", yes: "Yeah💞"},
  { q: "Last chance! Do you love me?", yes: "I LOVE YOU!!" },
];

function updateSection(noCount) {
  const section = questions[noCount] || questions[questions.length - 1];
  titleElement.innerHTML = section.q;
  yesButton.innerHTML = section.yes;
}

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    updateSection(noCount);
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "Yayyy!! I knew it :3";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");

  // Show the envelope button
  document.getElementById("envelopeBtn").classList.remove("hidden");
}

// Add this outside any function, at the top level:
document.getElementById("envelopeBtn").onclick = function () {
  window.location.href = "index2.html";
};

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.5;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "Yes I'm sure😩💔",
    "Not even a little bit",
    "Yeah really:(",
    "Nope💀",
    "I'm gonna cry😭...",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}

setInterval(() => {
  const heart = document.createElement('span');
  heart.innerHTML = '❤';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (4 + Math.random() * 2) + 's';
  document.querySelector('.floating-hearts').appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 500);