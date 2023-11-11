$(document).ready(function () {
  $(".toggle").click(function () {
    $("#main_nav").toggleClass("active");
  });

  $(window).scroll(function () {
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });
});
function myFunction() {
  let menutoggle = document.querySelector(".toggle");
  menutoggle.classList.toggle("active");
}

var typed = new Typed(".animate", {
  strings: ["Developer", "Designer", "Marketer"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});
var typed2 = new Typed(".animate2", {
  strings: ["Developer", "Designer", "Marketer"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});
/////////// Modal ////////////
const modal = document.querySelector(".modal-1");
const overlay = document.querySelector(".overlay");
const body = document.body;
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
   body.classList.add("dont_scroll");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
   body.classList.remove("dont_scroll");
};

btnsOpenModal.forEach((btn) => {
  btn.addEventListener("click", openModal);
});

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

// btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

