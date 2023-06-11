const getPetsInfo = async () => {
    const itemsList = document.querySelector('.animals__registered-list');
    const itemCard = document.querySelector('.animals__registered-list .animals__registered-list-item.notloaded');
    const userId = JSON.parse(localStorage.getItem('userId'));
    const response = await fetch(`http://127.0.0.1:5502/findanimals/${userId}`);
    const data = (await response.json()).animals[0];
    itemCard.classList.add('hidden');
  
    data.forEach(item => {
      const tempCardToAdd = itemCard.cloneNode(true);
      tempCardToAdd.classList.remove('notloaded');
      tempCardToAdd.classList.remove('hidden');
      tempCardToAdd.querySelector('.name-img p').innerHTML = item.name;
      tempCardToAdd.querySelector('.name-img p').style.color = item.color;
      const catIcon = tempCardToAdd.querySelector('.name-img svg.cat__item-icon path');
      const newColor = item.color;
      catIcon.setAttribute('fill', newColor);
      catIcon.setAttribute('stroke', newColor);
    
      const analysisCount = item.prediagnosis?.length > 0 ? item.prediagnosis.length : 0;
      tempCardToAdd.querySelector('.numeros-analisados').innerHTML = `${analysisCount} Análises realizadas`;
  
      tempCardToAdd.querySelector('.cat__img-example').src = `data:image/png;base64,${item. image_placeholder_id}`;
  
      tempCardToAdd.dataset.id = item.animalID;
      tempCardToAdd.addEventListener('click', () => editPetPage(item))
      itemsList.appendChild(tempCardToAdd);
    });
  };
  
  document.addEventListener('DOMContentLoaded', getPetsInfo);
  