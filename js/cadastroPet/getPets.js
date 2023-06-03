const getPetsInfo = async () => {
    let itemsList = document.querySelector('.animals__registered-list');
    let itemCard = document.querySelector('.animals__registered-list .animals__registered-list-item.notloaded');
    let userId = JSON.parse(localStorage.getItem('userId'));
    const response = await fetch(`http://127.0.0.1:5502/findanimals/${userId}`);
    const data = (await response.json()).animals;
    data.forEach(item => {
        let tempCardToAdd = itemCard.cloneNode(true);
        // tempCardToAdd.classList.remove('notloaded');
        itemsList.appendChild(tempCardToAdd);
    });
}

document.addEventListener('DOMContentLoaded', getPetsInfo);