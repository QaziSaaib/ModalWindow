"use strict";

const btnEl = document.querySelector(".btn");
const overlayEl = document.querySelector(".overlay");

const openModal = () => overlayEl.classList.add("hidden");
const closeModal = () => overlayEl.classList.remove("hidden");

btnEl.addEventListener("click", closeModal);

overlayEl.addEventListener("click", openModal);
