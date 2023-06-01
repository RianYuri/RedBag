const dropdown = document.querySelectorAll(".dropdown-content");

dropdown.forEach((dropdown) => {
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelectorAll(".menu li");
  const selected = dropdown.querySelector(".selected");
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
    .then((data) => {
      const clonedElements = []; // Array para armazenar os elementos

      for (let i = 0; i < data.animals[0].length; i++) {
        const animalName = data.animals[0][i].name;
        const animalId = data.animals[0][i].animalID;
        const animalColor = data.animals[0][i].color; // Cor obtida do banco de dados
        clonedElements.push({
          color: animalColor,
          name: animalName,
          key: animalId,
        }); // Adiciona um objeto com o nome e a cor do animal ao array
      }

      // Cria os elementos do dropdown usando os dados do array
      clonedElements.forEach((elementData) => {
        const listItem = document.createElement("li");
        const svg = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        const path = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path"
        );
        let nameCat = document.createElement("p");
        nameCat.style.color = elementData.color;
        listItem.dataset.key = elementData.key;
        svg.appendChild(path);
        listItem.appendChild(svg);

        svg.setAttribute("width", "21");
        svg.setAttribute("height", "20");
        svg.setAttribute("fill", "none");
        svg.setAttribute("viewBox", "0 0 21 20");

        path.setAttribute(
          "d",
          "M5 12.014V8.74426C5.44362 8.84749 5.89975 8.90038 6.35982 8.90038H13.9596C14.4155 8.90038 14.8676 8.84845 15.3077 8.74698V11.954L12.1415 14.9312H7.97893L5 12.014Z"
        );
        path.setAttribute("stroke-width", "10");
        path.setAttribute("fill", elementData.color);
        path.setAttribute("stroke", elementData.color);

        nameCat.innerText = elementData.name;
        listItem.appendChild(nameCat);
        menu.appendChild(listItem);
        listItem.appendChild(svg);
      });
    })
    .catch((error) => {
      console.log("Ocorreu um erro:", error);
    });

  select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    caret.classList.toggle("caret-rotate");
    menu.classList.toggle("menu-open");
  });

  function addClickListener(option) {
    option.addEventListener("click", () => {
      selected.innerText = "";
      selected.appendChild(option.cloneNode(true));

      select.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate");
      menu.classList.remove("menu-open");

      menu.querySelectorAll("li").forEach((li) => {
        li.classList.remove("active");
      });

      // Adiciona a classe "active" apenas ao elemento clicado
      let keyAnimalId = option.dataset.key;
const userId = JSON.parse(localStorage.getItem("userId"));

      console.log(keyAnimalId)
      document
        .getElementById("animalForm")
        .addEventListener("submit", function (event) {
          event.preventDefault(); // Impede o envio padrão do formulário

          var form = new FormData(document.getElementById("animalForm"));
          var xhr = new XMLHttpRequest();
          xhr.open(
            "POST",
            `http://127.0.0.1:5502/storeprediagnosis/${userId}/${keyAnimalId}`,
            true
          );
          xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
              if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                console.log(response);
                rectangleTopImg.classList.toggle("loadingTop");
      rectangleBotImg.classList.toggle("loadingBot");
      iconCat.style.display = "flex";
      loading.style.display = "flex"; // Aqui você pode manipular a resposta recebida
              } else {
                console.log("Erro ao enviar o formulário");
              }
            }
          };
          xhr.send(form);
        });
      option.classList.add("active");
    });
  }

  // Observa as mudanças no DOM do dropdown
  const observer = new MutationObserver((mutationsList) => {
    for (let mutation of mutationsList) {
      if (mutation.type === "childList") {
        mutation.addedNodes.forEach((addedNode) => {
          // Verifica se o nó adicionado é um <li> (elemento do dropdown)
          if (addedNode.tagName === "LI") {
            addClickListener(addedNode);
          }
        });
      }
    }
  });

  // Configura as opções para observar adições de nós ao dropdown
  const observerConfig = { childList: true, subtree: true };

  // Observa o dropdown
  observer.observe(dropdown, observerConfig);
});
