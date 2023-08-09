/* ----------------- NAVBAR TOGGLE ----------------- */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/* ----------------- NAVBAR CLICK----------------- */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
};

/* ----------------- BACK TO TOP ----------------- */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

/* ----------------- CAROSELLO ----------------- */
const words = ["Web Developer", "Traveler", "Crypto Enthusiast", "Music Lover"];
let currentIndex = 0;

function showNextWord() {
  const wordCarousel = document.getElementById("carousel");
  const word = words[currentIndex];
  let currentCharIndex = 0;

  // Funzione per visualizzare il carattere successivo della parola
  function showNextChar() {
    const currentWord = word.slice(0, currentCharIndex + 1); 
    wordCarousel.textContent = currentWord; 

    currentCharIndex++;

    if (currentCharIndex < word.length) {
      setTimeout(showNextChar, 80);
    }
  }

  showNextChar(); 

  currentIndex = (currentIndex + 1) % words.length;
}

setInterval(showNextWord, 3000);