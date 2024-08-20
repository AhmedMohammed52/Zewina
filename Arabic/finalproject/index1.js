let ico = document.getElementById("signupIcon");

ico.onclick = function () {
  let formBox = document.getElementById("signupForm");
  if (formBox.style.display === "none") {
    formBox.style.display = "block";
  } else {
    formBox.style.display = "none";
  }
};

