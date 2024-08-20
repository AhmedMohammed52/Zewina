let ico = document.getElementById("signupIcon");

ico.onclick = function () {
  let formBox = document.getElementById("signupForm");
  if (formBox.style.display === "none") {
    formBox.style.display = "block";
  } else {
    formBox.style.display = "none";
  }
};

let post = document.getElementById("post");

// ***********************************************let container = document.querySelector(".container");
// let form = document.querySelector(".form");
let btn = document.querySelector(".postBtn");

btn.onclick = function () {
  let posted = document.querySelector(".posted");
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
    name.textContent = "Ahmed Mohammed";

    let img = document.createElement("img");
    img.setAttribute("src", "Images/IMG_20240727_172714_716.jpg");

    let paraSec = document.createElement("section");
    paraSec.className = "describtion";

    let para = document.createElement("p");
    para.className = "para";
    para.textContent = input.value;
    input.value = "";

    // let iconBox = document.createElement("section");
    // iconBox.className = "iconss";

    // let iconi1 = createElement("button");
    // iconi1.textContent = "+ Follow";

    // let iconi2 = document.createElement("button");
    // iconi2.textContent = "Massage";

    // ********************************************************

    posted.appendChild(div);

    // posted.appendChild(postBox);

    div.appendChild(mainSection);

    div.appendChild(section);

    mainSection.appendChild(section);

    section.appendChild(img);

    section.appendChild(name);

    mainSection.appendChild(xBtn);

    div.appendChild(paraSec);

    paraSec.appendChild(para);

    // div.appendChild(iconBox);

    // iconBox.appendChild(iconi1);

    // iconBox.appendChild(iconi2);
  }
};

// ****************************************
// const btnLang = document.getElementById("changeLang");
// btnLang.addEventListener("click", (e) => {
//   if (btnLang.dataset.lang === "arabic") {
//     window.location.href =
//       "file:///C:/Users/NEW%20LAP/Desktop/Tasks/Final%20Task/Arabic/home/index.html";
//   } else {
//     window.location.href =
//       "file:///C:/Users/NEW%20LAP/Desktop/Tasks/Final%20Task/English/home/index.html";
//   }
// });
