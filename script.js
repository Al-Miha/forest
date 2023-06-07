$(document).ready(function () {
  // $(".nav-button").click(function () {
  //   $(".nav-button").toggleClass("change");
  // });

  // Hide nav on click
  $(".navbar-nav li a").click(function (event) {
    // check if window is small enough so dropdown is created
    $(".navbar-collapse").collapse("hide");
    // var toggle = $(".navbar-toggle").is(":visible");
    // if (toggle) {
    // }
  });

  lightbox.option({
    wrapAround: true,
  });

  $(window).scroll(function () {
    let position = $(this).scrollTop();

    if (position >= 350) {
      $(".gallery").addClass("change");
    } else {
      $(".gallery").removeClass("change");
    }
  });
  $(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 200) {
      $(".nav-menu").addClass("custom-navbar");
    } else {
      $(".nav-menu").removeClass("custom-navbar");
    }
  });

  // $(window).scroll(function () {
  //   let position = $(this).scrollTop();
  //   if (position >= 650) {
  //     $(".camera-img").addClass("fromLeft");
  //     $(".mission-text").addClass("fromRight");
  //   } else {
  //     $(".camera-img").removeClass("fromLeft");
  //     $(".mission-text").removeClass("fromRight");
  //   }
  // });

  $(".gallery-list-item").click(function () {
    let value = $(this).attr("data-bs-filter");
    if (value === "all") {
      $(".filter").show(300);
    } else {
      $(".filter")
        .not("." + value)
        .hide(300);
      $(".filter")
        .filter("." + value)
        .show(300);
    }
  });

  $(".gallery-list-item").click(function () {
    $(this).addClass("active-item").siblings().removeClass("active-item");
  });

  $(window).scroll(function () {
    let position = $(this).scrollTop();
    // console.log(position);
    if (position >= 4300) {
      $(".card-1").addClass("moveFromLeft");
      $(".card-2").addClass("moveFromBottom");
      $(".card-3").addClass("moveFromRight");
    } else {
      $(".card-1").removeClass("moveFromLeft");
      $(".card-2").removeClass("moveFromBottom");
      $(".card-3").removeClass("moveFromRight");
    }
  });
});

///////////////////////////////////////
// Reveal sections
const allSections = document.querySelectorAll(".section-title");

const revealSection = function (entries, observer) {
  //console.log(entries);
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.2,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

// const navLinks = document.querySelectorAll(".nav-item");
// const menuToggle = document.getElementById("myNavbar");
//const navBtn = document.querySelector(".nav-button");
// const bsCollapse = new bootstrap.Collapse(menuToggle);
// navLinks.forEach((l) => {
//   l.addEventListener("click", () => {
//     bsCollapse.toggle();
//   });
// });

// navBtn.addEventListener("click", () => {
//   if (navBtn.classList.contains("change")) {
//     console.log("contains change");
//     navBtn.classList.remove("change");
//   } else {
//     // console.log("works contains");
//     navBtn.classList.add("change");
//   }
// });

// const navLinks = document.querySelectorAll(".nav-item");
// const menuToggle = document.getElementById("myNavbar");
// const bsCollapse = new bootstrap.Collapse(menuToggle);
// navLinks.forEach((l) => {
//   l.addEventListener("click", () => {
//     bsCollapse.toggle();
//   });
// });

// const navButton = document.querySelector(".nav-button");
// navButton.addEventListener("click", () => {
//   navButton.classList.toggle("change");
// });

// const navLinks = document.querySelectorAll(".nav-item:not(.dropdown)");
// const menuToggle = document.getElementById("navbarSupportedContent");
// const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
// navLinks.forEach(function (l) {
//   l.addEventListener("click", function () {
//     // avoid flickering on desktop
//     if (menuToggle.classList.contains("show")) {
//       bsCollapse.toggle();
//     }
//   });
// });
