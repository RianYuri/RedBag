const getPetsInfo = async () => {
    let itemCard = document.querySelector('.item-card');
    let userId = JSON.parse(localStorage.getItem('userId'));
    const response = await fetch(`http://127.0.0.1:5502/findanimals/${userId}`);
    const data = (await response.json()).animals;
    
}

document.addEventListener('DOMContentLoaded', getPetsInfo);