

const dropdown = document.querySelectorAll(".dropdown-content");

dropdown.forEach((dropdown) => {
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelectorAll(".menu li");
  const selected = dropdown.querySelector(".selected");
  const selectedCat = dropdown.querySelector(".imageSelect");

  select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    caret.classList.toggle("caret-rotate");
    menu.classList.toggle("menu-open");
    const userId = JSON.parse(localStorage.getItem("userId"));
    fetch(`http://127.0.0.1:5502/findanimals/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) =>{      
const dropdownMenu = document.querySelector(".dropdown-content");

for (let i = 0; i < data.animals[0].length; i++) {
    const menuContent = document.getElementById("menuContent").cloneNode(true);
    console.log(data.animals[0][i].name);
    
    menuContent.querySelector("li").innerText = data.animals[0][i].name;

    dropdownMenu.appendChild(menuContent);
      }
      
     } )
      .catch((error) => {
        console.log("Ocorreu um erro:", error);
      });
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
        console.log(option)
      selected.innerText = option.innerText;
      console.log(option.innerHTML);
      selectedCat.src = option;
      select.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate");
      menu.classList.remove("menu-open");

      options.forEach((option) => {
        option.classList.remove("active");
      });
      option.classList.add("active");
    });
  });
});
