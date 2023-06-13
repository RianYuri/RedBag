document.querySelector('.profile-user .hello-user').innerHTML = `Olá, ${JSON.parse(localStorage.getItem('userName'))}`

const containerPageRegistered = document.querySelector(
  ".petCadastrados-container"
);
const containerToRegister = document.querySelector(".toRegister-container");
const addPetPage = () => {
  containerPageRegistered.style.display = "none";
  containerToRegister.style.display = "flex";
};

const editPetPage = (animal) => {
  document.querySelector('.delete__pet-button').classList.remove('inactive')
  containerToRegister.dataset.id = animal.animalID;
  containerPageRegistered.style.display = "none";
  containerToRegister.style.display = "flex";
  containerToRegister.querySelector(".content-image .image-p").innerHTML = ''
  containerToRegister.querySelector("h1").innerHTML = 'Editar Pet'
  containerToRegister.querySelector(".content-image #previewImage").src = ''
  containerToRegister.querySelector("#previewImage").src = `data:image/png;base64,${animal.image}`
  
  const catIcon = containerToRegister.querySelector('.color-pet svg path');
  const newColor = animal.color;
  catIcon.setAttribute('fill', newColor);
  catIcon.setAttribute('stroke', newColor);
  containerToRegister.querySelector(".search-input[name='name']").value = animal.name
  containerToRegister.querySelector("#colorPicker").value = animal.color
  containerToRegister.querySelector(".cadastrar-btn").innerHTML = 'Salvar'
  // console.log('editPetPage')
};


const deletePetFromEditPage = () => {
  const animalID = containerToRegister.dataset.id;
  const userId = JSON.parse(localStorage.getItem('userId'));
  fetch(`http://127.0.0.1:5502/delete/${userId}/${animalID}`, {
    method: 'DELETE',
  }).then(() => {
    backHIstoric()
  })
}
const backHIstoric = () =>{
  // console.log('backHIstoricback')
    document.querySelector('.delete__pet-button').classList.add('inactive')
    containerPageRegistered.style.display = "flex";
    containerToRegister.style.display = "none";
    containerToRegister.dataset.id = '';
    containerToRegister.querySelector("h1").innerHTML = 'Novo Pet'
    containerToRegister.querySelector(".content-image .image-p").innerHTML = 'Faça um upload'
    containerToRegister.querySelector(".content-image #previewImage").src = '../img/home/catCamera.svg'
    containerToRegister.querySelector(".content-image").style.backgroundImage = `none`
    const catIcon = containerToRegister.querySelector('.color-pet svg path');
    const newColor = '#3D85E3';
    catIcon.setAttribute('fill', newColor);
    catIcon.setAttribute('stroke', newColor);
    containerToRegister.querySelector(".search-input[name='name']").value = ''
    containerToRegister.querySelector("#colorPicker").value = newColor
    containerToRegister.querySelector(".cadastrar-btn").innerHTML = '<img src="../img/CadastroPet/addPet.svg" alt=""> Adicionar pet'
    document.querySelectorAll('.animals__registered-list .animals__registered-list-item:not(.notloaded)').forEach(item => item.remove())
    getPetsInfo()
}

const backHome = () => {
    window.location.href = "../../frontend/pages/home.html";
}

const userId = JSON.parse(localStorage.getItem("userId"));
document
  .getElementById("animalForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let animalID = containerToRegister.dataset?.id.length > 0 || containerToRegister.dataset?.id  ? containerToRegister.dataset.id : false;
    // console.log(animalID)
    if(animalID){
      var form = new FormData(document.getElementById("animalForm"));
      var xhr = new XMLHttpRequest();
      let url = `http://127.0.0.1:5502/updateanimal/${userId}/${animalID}`
      xhr.open("PUT", url, true);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            
          } else {
            // console.log("Erro ao enviar o formulário");
          }
        }
      };
      xhr.send(form);
    }else{
      var form = new FormData(document.getElementById("animalForm"));
      var xhr = new XMLHttpRequest();
      xhr.open("POST", `http://127.0.0.1:5502/newanimal/${userId}`, true);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            
            // console.log(response);
          } else {
            // console.log("Erro ao enviar o formulário");
          }
        }
      };
      xhr.send(form);
    }
  });

//   preview
const inputFileHome = document.getElementById("inputCadastroFile");
const previewImage = document.getElementById("previewImage");
inputFileHome.addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      previewImage.src = '';
      containerToRegister.querySelector(".content-image .image-p").innerHTML = ''
      containerToRegister.querySelector(".content-image").style.backgroundImage = `url(${e.target.result})`
    };

    reader.readAsDataURL(file);
  }
});
