const leftSideButton = document.getElementById("leftSideButton");
const rightSideButton = document.getElementById("rightSideButton");
const imageSilder = document.querySelector(".layout .home img");
const header = document.querySelector(".layout .shop .text h1");
const text = document.querySelector(".layout .shop .text p");

const images = [
  {
    src: "./images/desktop-image-hero-1.jpg",
    header: "Discover innovative ways to decorate",
    text: "We provide unmatched quality, comfort, and style for property owners across the country.Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    src: "./images/desktop-image-hero-2.jpg",
    header: "We are available all across the globe",
    text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    src: "./images/desktop-image-hero-3.jpg",
    header: "Manufactured with the best materials",
    text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

let i = 0;

leftSideButton.addEventListener("click", () => {
  i == 0 ? (i = images.length - 1) : i--;
  display(i);
});

rightSideButton.addEventListener("click", () => {
  i = (i + 1) % images.length;
  display(i);
});

function display(i) {
  imageSilder.src = images[i].src;
  header.innerHTML = images[i].header;
  text.innerHTML = images[i].text;
}

const openMenuButton = document.getElementById("openButton");
const closeMenuButton = document.getElementById("closeButton");

openMenuButton.addEventListener("click", () => {
  document.querySelector(".layout .home .nav ul").classList.add("open-menu");
});
closeMenuButton.addEventListener("click", () => {
  document.querySelector(".layout .home .nav ul").classList.remove("open-menu");
});
