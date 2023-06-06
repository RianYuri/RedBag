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
    
    console.log(data.animals[0].length)
    for (let i = 0; i < data.animals[0].length; i++) {
      const animalName = data.animals[0][i].name;
      const animalId = data.animals[0][i].animalID;
      const animalColor = data.animals[0][i].color;
      const image = data.animals[0][i].image;
      const healyhyPrecision = data.animals[0][0].prediagnosis[i].accuracy; 
      const isHealthy = data.animals[0][0].prediagnosis[i].health; 
      const time = data.animals[0][0].prediagnosis[i].time; 
      const dateAnalise = data.animals[0][0].prediagnosis[i].date; 

      clonedElements.push({
        color: animalColor,
        name: animalName,
        key: animalId,
        img:image,
        accuracy:Math.ceil(healyhyPrecision),
        health:isHealthy,
        time:time,
        date:dateAnalise
      
        });      
    }
    
    historicPets(clonedElements);
    
  
   
  })
  .catch((error) => {
    console.log("Ocorreu um erro:", error);
  });
  const historicPets = (elementData) => {
    const cardsContainer = document.querySelector(".cards-content");
    const cardInformationTemplate = cardsContainer.querySelector(".card-information");
  
    // Remove any existing card information elements
    cardsContainer.innerHTML = '';
  
    elementData.forEach((petsInformation) => {
      const cardInformation = cardInformationTemplate.cloneNode(true);
      const healthElement = cardInformation.querySelector(".isHealthy");
  
      cardInformation.querySelector(".name").innerHTML = petsInformation.name;
      cardInformation.querySelector(".date").innerHTML = petsInformation.date;
      cardInformation.querySelector(".imgCat-historic").src = `data:image/png;base64,${petsInformation.img}`;
      cardInformation.querySelector(".time-historico").innerHTML = petsInformation.time;
      cardInformation.querySelector(".porcentagem").innerHTML = `(${petsInformation.accuracy}%) `;
      healthElement.innerHTML = petsInformation.health === "healthy" ? "Saudável" : "Não saudável";
      healthElement.style.color = petsInformation.health === "healthy" ? "#159D20" : "red";
  
      cardsContainer.appendChild(cardInformation);
    });
  };