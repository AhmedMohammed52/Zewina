// ********************* Hidden Form ************************

let ico = document.getElementById("signupIcon");

ico.onclick = function () {
  let formBox = document.getElementById("signupForm");
  if (formBox.style.display === "none") {
    formBox.style.display = "block";
  } else {
    formBox.style.display = "none";
  }
};

// ******************************************************

let btn = document.querySelector(".postBtn");

btn.onclick = function () {
  let posted = document.querySelector(".leftSideBottom");
  let input = document.querySelector("#post");
  if (input.value !== "") {
    let div = document.createElement("div");
    div.className = "boxPost";

    let mainSection = document.createElement("section");
    mainSection.className = "postedTop";

    let xBtn = document.createElement("button");
    xBtn.id = "delete";
    xBtn.textContent = "X";
    xBtn.onclick = function () {
      div.remove();
      let postBox = document.getElementsByClassName("boxPost");
      postBox.remove();
    };

    let section = document.createElement("section");
    section.className = "right";

    let name = document.createElement("h4");
    name.textContent = "Information Technology Intsitute (ITI)";

    let img = document.createElement("img");
    img.setAttribute("src", "Images/1631351788797.jfif");

    let paraSec = document.createElement("section");
    paraSec.className = "describtion";

    let para = document.createElement("p");
    para.className = "para";
    para.textContent = input.value;
    input.value = "";

    // let iconBox = document.createElement("section");
    // iconBox.className = "iconss";

    // let iconi1 = createElement("button");
    // iconi1.textContent = "Applay";

    // let iconi2 = document.createElement("button");
    // iconi2.textContent = "Massage";

    // ********************************************************

    posted.appendChild(div);

    div.appendChild(mainSection);

    div.appendChild(section);

    // div.appendChild(iconBox);

    mainSection.appendChild(section);

    section.appendChild(img);

    section.appendChild(name);

    mainSection.appendChild(xBtn);

    div.appendChild(paraSec);

    paraSec.appendChild(para);

    // iconBox.appendChild(iconi1);

    // iconBox.appendChild(iconi2);
  }
};

// **************************************************
const btnLang = document.getElementById("changeLang");
btnLang.addEventListener("click", (e) => {
  if (btnLang.dataset.lang === "arabic") {
    window.location.href =
      "file:///C:/Users/NEW%20LAP/Desktop/Tasks/Final%20Task/Arabic/CompanyPage/index.html";
  } else {
    window.location.href =
      "file:///C:/Users/NEW%20LAP/Desktop/Tasks/Final%20Task/English/CompanyPage/index.html";
  }
});
