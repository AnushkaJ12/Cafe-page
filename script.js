document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thanks for your review! We'll get back to you soon 💛");
    form.reset();
  });
});
