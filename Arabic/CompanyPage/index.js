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
let i = 0;
btn.onclick = function () {
  let posted = document.querySelector(".leftSideBottom");
  let input = document.querySelector("#post");
  console.log(postsContainer);
  if (input.value !== "") {
    localStorage.setItem(i++, input.value);
    const LivePost = setPostItem(i++, input.value);
    postsContainer.innerHTML += LivePost;
    /*
    let div = document.createElement("div");

    div.className = "boxPost";

    let mainSection = document.createElement("section");
    mainSection.className = "postedTop";

    let xBtn = document.createElement("button");
    xBtn.id = "delete";
    xBtn.textContent = "X";

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
*/
    // let iconBox = document.createElement("section");
    // iconBox.className = "iconss";

    // let iconi1 = createElement("button");
    // iconi1.textContent = "Applay";

    // let iconi2 = document.createElement("button");
    // iconi2.textContent = "Massage";

    /* ********************************************************

    posted.appendChild(div);

    div.appendChild(mainSection);

    div.appendChild(section);

    mainSection.appendChild(section);

    section.appendChild(img);

    section.appendChild(name);

    mainSection.appendChild(xBtn);

    div.appendChild(paraSec);

    paraSec.appendChild(para); */

    // div.appendChild(iconBox);

    // iconBox.appendChild(iconi1);

    // iconBox.appendChild(iconi2);
  }
};

// **************************************************

// *********************** //
let setPostItem = function (i, post) {
  return `
  <div class="boxPost" data-post-num="${i}">
          <section class="postedTop">
            <section class="right">
              <img src="Images/1631351788797.jfif" />
              <h4>(ITI) معهد تكنولوجيا المعلومات</h4>
            </section>
              <button id="delete" class="delete">
              <i class="fa-regular fa-circle-xmark"></i>
            </button>
          </section>
          <section class="describtion">
            <p class="para">
              ${post}
            </p>
            <img src="Images/images.png" />
          </section>
          <section class="iconss">
            <button><i class="fa-solid fa-pen-nib"></i> قدم هنا </button>
            <button><i class="fa-solid fa-paper-plane"></i> ارسل رسالة</button>
          </section>
        </div>
      </div> 
  `;
};
const postsContainer = document.getElementById("leftSideBottom");
//alert(postsContainer);
if (localStorage.length !== 0) {
  let i = localStorage.length - 1;
  while (i >= 0) {
    let oldPosts = setPostItem(i, localStorage.getItem(i));
    //console.log(oldPosts);
    postsContainer.innerHTML += oldPosts;
    i--;
  }
}

const deletBtn = document.getElementsByClassName("delete");
// const deletPost = document.getElementsByClassName("post");

if (deletBtn) {
  console.log(deletBtn.length);
  //deletBtn
}
// remove post
function removPost(i) {
  localStorage.removeItem(i);
  alert(`Post Number ${Number(i) + 1} deleted`);
  //const preDeletedPost = this.closest(".boxPost");
  alert(preDeletedPost);
}

// Select all delete buttons by their class name
const deleteButtons = document.querySelectorAll(".delete");

// Loop through each button and add an event listener
deleteButtons.forEach((button) => {
  button.addEventListener("click", function (event) {
    const postNum = this.closest(".boxPost").getAttribute("data-post-num");
    console.log(`Delete button clicked for post ${postNum}`);
    removPost(postNum);
    event.button.closest(".boxPost").remove();
    // Add your delete functionality here
  });
});
// const btnLang = document.getElementById("changeLang");
// btnLang.addEventListener("click", (e) => {
//   if (btnLang.dataset.lang === "arabic") {
//     window.location.href =
//       "file:///C:/Users/NEW%20LAP/Desktop/Tasks/Final%20Task/Arabic/CompanyPage/index.html";
//   } else {
//     window.location.href =
//       "file:///C:/Users/NEW%20LAP/Desktop/Tasks/Final%20Task/English/CompanyPage/index.html";
//   }
// });
