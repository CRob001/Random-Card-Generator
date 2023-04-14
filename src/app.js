/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let card = document.querySelector(".card");
  let rank = document.querySelector(".rank");
  const suits = ["diamonds", "spades", "hearts", "clubs"];
  const ranks = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  function getRandom(array) {
    return Math.floor(Math.random() * array.length);
  }
  card.classList.add(suits[getRandom(suits)]);
  rank.innerHTML = ranks[getRandom(ranks)];
};
