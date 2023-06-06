function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

document.querySelector(".send-button").addEventListener("click", function () {
  var name = document.querySelector(".contact-input-name").value;
  var email = "jonathan.hall5800@gmail.com";
  var message = document.querySelector(".contact-input-message").value;

  var subject = encodeURIComponent("Hi I'm " + name + ", I saw your portfolio");
  var body = encodeURIComponent(
    "Hi Jonny,\n\n" + message + "\n\nBest regards, \n\n" + name
  );

  var mailtoLink = "mailto:" + email + "?subject=" + subject + "&body=" + body;
  window.location.href = mailtoLink;

  document.querySelector(".contact-input-name").value = "";
  document.querySelector(".contact-input-message").value = "";
  document.querySelector(".contact-input-email").value = "";
});
