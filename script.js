function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

function closeNavbar() {
  const navbar = document.getElementById("navbarNav");
  navbar.classList.remove("show");
}

document.querySelector(".send-button").addEventListener("click", function () {
  let name = document.querySelector(".contact-input-name").value;
  let email = "jonathan.hall5800@gmail.com";
  let message = document.querySelector(".contact-input-message").value;

  let subject = encodeURIComponent("Hi I'm " + name + ", I saw your portfolio");
  let body = encodeURIComponent(
    "Hi Jonny,\n\n" + message + "\n\nBest regards, \n\n" + name
  );

  let mailtoLink = "mailto:" + email + "?subject=" + subject + "&body=" + body;
  window.location.href = mailtoLink;

  document.querySelector(".contact-input-name").value = "";
  document.querySelector(".contact-input-message").value = "";
  document.querySelector(".contact-input-email").value = "";
});

let navbarContent = document.getElementById("navbarNav");
function toggleNavbar() {
  navbarContent.classList.toggle("show");
}
function handleNavbarTogglerClick() {
  toggleNavbar();
}
function closeNavbar() {
  if (navbarContent.classList.contains("show")) {
    toggleNavbar();
  }
}
const navbarLinks = document.querySelectorAll(".navbar-nav .nav-link");
navbarLinks.forEach(function (link) {
  link.addEventListener("click", closeNavbar);
});

function sendEmail() {
  var emailHeader = document.getElementById("emailHeader");
  emailHeader.classList.add("flash-animation");

  setTimeout(function () {
    emailHeader.classList.remove("flash-animation");
  }, 9000);
}
