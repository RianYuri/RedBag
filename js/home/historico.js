const userId = JSON.parse(localStorage.getItem("userId"));
console.log(userId)
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
    console.log(data)
    // const clonedElements = []; // Array para armazenar os elementos

    // for (let i = 0; i < data.animals[0].length; i++) {
    //   const animalName = data.animals[0][i].name;
    //   const animalId = data.animals[0][i].animalID;
    //   const animalColor = data.animals[0][i].color; // Cor obtida do banco de dados
    //   clonedElements.push({
    //     color: animalColor,
    //     name: animalName,
    //     key: animalId,
    //   }); // Adiciona um objeto com o nome e a cor do animal ao array
    // }

    // // Cria os elementos do dropdown usando os dados do array
    // clonedElements.forEach((elementData) => {
    //   const listItem = document.createElement("li");
    //   const svg = document.createElementNS(
    //     "http://www.w3.org/2000/svg",
    //     "svg"
    //   );
    //   const path = document.createElementNS(
    //     "http://www.w3.org/2000/svg",
    //     "path"
    //   );
    //   let nameCat = document.createElement("p");
    //   nameCat.style.color = elementData.color;
    //   listItem.dataset.key = elementData.key;
    //   svg.appendChild(path);
    //   listItem.appendChild(svg);

    //   svg.setAttribute("width", "21");
    //   svg.setAttribute("height", "20");
    //   svg.setAttribute("fill", "none");
    //   svg.setAttribute("viewBox", "0 0 21 20");

    //   path.setAttribute(
    //     "d",
    //     "M5 12.014V8.74426C5.44362 8.84749 5.89975 8.90038 6.35982 8.90038H13.9596C14.4155 8.90038 14.8676 8.84845 15.3077 8.74698V11.954L12.1415 14.9312H7.97893L5 12.014Z"
    //   );
    //   path.setAttribute("stroke-width", "10");
    //   path.setAttribute("fill", elementData.color);
    //   path.setAttribute("stroke", elementData.color);

    //   nameCat.innerText = elementData.name;
    //   listItem.appendChild(nameCat);
    //   menu.appendChild(listItem);
    //   listItem.appendChild(svg);
    // });
  })
  .catch((error) => {
    console.log("Ocorreu um erro:", error);
  });