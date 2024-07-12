const cards = document.querySelectorAll(".card-wrap");
const atcs = document.querySelectorAll(".card-atc");
const titles = document.querySelectorAll(".card-title");
// function to check cart on load to maintain cart states
const checkCart = () => {
  console.log("checked cart");
  titles.forEach((el) => {
    Object.keys(localStorage).forEach((key) => {
      if (key == el.innerText) {
        el.closest(".card-wrap").querySelector(".in-cart-badge").style.display =
          "flex";
        el.closest(".card-wrap").querySelector(".card-atc").innerText =
          "Remove From Cart";
      }
    });
  });
};
checkCart();
// event listeners for hover effects
cards.forEach((el) => {
  el.addEventListener("mouseenter", (ev) => {
    ev.target.querySelector(".img-wrap").style.opacity = "0.5";
    ev.target.querySelector(".card-atc").style.display = "block";
  });
});
cards.forEach((el) => {
  el.addEventListener("mouseleave", (ev) => {
    ev.target.querySelector(".img-wrap").style.opacity = "1";
    ev.target.querySelector(".card-atc").style.display = "none";
  });
});
// function to add cart item to local storage & add 'in cart' badge
const addItem = (ev) => {
  localStorage.setItem(
    ev.parentNode.querySelector(".card-title").innerText,
    ev.parentNode.querySelector(".card-title").innerText
  );
};
// function to remove item from local storage & remove 'in cart' badge
const removeItem = (ev) => {
  localStorage.removeItem(
    ev.parentNode.querySelector(".card-title").innerText,
    ev.parentNode.querySelector(".card-title").innerText
  );
  ev.closest(".card-wrap").querySelector(".in-cart-badge").style.display =
    "none";
  ev.closest(".card-wrap").querySelector(".card-atc").innerText = "Add to Cart";
};
// event listener for add to cart buttons
atcs.forEach((el) => {
  el.addEventListener("click", (ev) => {
    if (ev.target.innerText == "Add to Cart") {
      addItem(ev.target);
      ev.target
        .closest(".card-wrap")
        .querySelector(".in-cart-badge").style.display = "flex";
      ev.target.closest(".card-wrap").querySelector(".card-atc").innerText =
        "Remove From Cart";
    } else {
      removeItem(ev.target);
    }
  });
});
