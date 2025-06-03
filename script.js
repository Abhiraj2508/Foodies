
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.querySelector('input[type="text"]').value;
  const email = this.querySelector('input[type="email"]').value;
  const message = this.querySelector('textarea').value;

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  alert("Thank you for contacting us, " + name + "! We will get back to you soon.");
  this.reset();
});


