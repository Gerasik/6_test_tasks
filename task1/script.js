document.getElementById("name_input").addEventListener("input", function () {
  this.classList.toggle("red", this.value != this.getAttribute("value"));
});
