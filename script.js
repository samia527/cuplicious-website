document.addEventListener("submit", e => {
  if (e.target.matches("form")) {
    e.preventDefault();
    alert("Message sent successfully!");
    e.target.reset();
  }
});
