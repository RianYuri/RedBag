const historicAnimals = () =>{

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
    
    console.log("animal data",data.animals)
   
    data.animals[0].forEach(animal => {
      const animalName = animal.name;
      const animalId = animal.animalID;
      const animalColor = animal.color;
      const image = animal.image;
      const healyhyPrecision = data.animals[0][0].prediagnosis[0].accuracy; 
      const isHealthy = data.animals[0][0].prediagnosis[0].health; 
      const time = data.animals[0][0].prediagnosis[0].time; 
      const dateAnalise = data.animals[0][0].prediagnosis[0].date; 
    
      clonedElements.push({
        color: animalColor,
        name: animalName,
        key: animalId,
        img: image,
        accuracy: Math.ceil(healyhyPrecision),
        health: isHealthy,
        time: time,
        date: dateAnalise
      });
      console.log( {color: animalColor,
        name: animalName,
        key: animalId,
        img: image,
        accuracy: Math.ceil(healyhyPrecision),
        health: isHealthy,
        time: time,
        date: dateAnalise})
    });
    
    
    historicPets(clonedElements);
    
  
   
  })
  .catch((error) => {
    console.log("Ocorreu um erro:", error);
  });
  const historicPets = (elementData) => {
    const cardsContainer = document.querySelector(".cards-content");
    const cardInformationTemplate = cardsContainer.querySelector(".card-information");
  
    cardsContainer.innerHTML = '';
    
    
    elementData.forEach((petsInformation) => {
      const cardInformation = cardInformationTemplate.cloneNode(true);
      const pathElement = cardInformation.querySelector('path');
      const healthElement = cardInformation.querySelector(".isHealthy");
      pathElement.setAttribute('fill', petsInformation.color);
      pathElement.setAttribute('stroke', petsInformation.color);
      cardInformation.querySelector(".name").innerHTML = petsInformation.name;
      cardInformation.querySelector(".name").style.color = petsInformation.color;
      cardInformation.querySelector(".date").innerHTML = petsInformation.date;
      cardInformation.querySelector(".imgCat-historic").src = `data:image/png;base64,${petsInformation.img}`;
      cardInformation.querySelector(".time-historico").innerHTML = petsInformation.time.split(":",2).join(":");
      cardInformation.querySelector(".porcentagem").innerHTML = `(${petsInformation.accuracy}%) `;
      healthElement.innerHTML = petsInformation.health === "healthy" ? "Saudável" : "Não saudável";
      healthElement.style.color = petsInformation.health === "healthy" ? "#159D20" : "red";
  
      cardsContainer.appendChild(cardInformation);
    });
}
};