const getPetsInfo = async () => {
    let userId = JSON.parse(localStorage.getItem('userId'));
    const response = await fetch(`http://127.0.0.1:5502/findanimals/${userId}`);
    const data = await response.json();
    console.log(data)
}

document.addEventListener('DOMContentLoaded', getPetsInfo);