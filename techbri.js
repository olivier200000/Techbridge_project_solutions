function scrollToServices() {
  document.getElementById("services").scrollIntoView({
    behavior: "smooth"
  });
}

function sendMessage(event) {
  event.preventDefault();
  alert("Thank you for contacting TechBridge Solutions. We will get back to you soon!");
}
