const phoneCall = (phoneNumber) => {
  const link = document.createElement("a");
  link.setAttribute("href", `tel:${phoneNumber}`);
  link.click();
};

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

let collapsibleContent = document.getElementById("navbarNav");
window.addEventListener("resize", function () {
  if (window.innerWidth <= 700) {
    collapsibleContent.classList.add("show");
  } else {
    collapsibleContent.classList.remove("show");
  }
});
