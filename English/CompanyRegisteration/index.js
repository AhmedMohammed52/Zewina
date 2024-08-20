let ico = document.getElementById("signupIcon");

ico.onclick = function () {
  let formBox = document.getElementById("signupForm");
  if (formBox.style.display === "none") {
    formBox.style.display = "block";
  } else {
    formBox.style.display = "none";
  }
};
// ***********************
const btnLang = document.getElementById("changeLang");
btnLang.addEventListener("click", (e) => {
  if (btnLang.dataset.lang === "arabic") {
    window.location.href =
      "file:///C:/Users/NEW%20LAP/Desktop/Tasks/Final%20Task/Arabic/home/index.html";
  } else {
    window.location.href =
      "file:///C:/Users/NEW%20LAP/Desktop/Tasks/Final%20Task/English/home/index.html";
  }
});
