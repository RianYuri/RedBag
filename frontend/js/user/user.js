const editDataContainer = document.querySelector(".myData-edit__container");
const myDataContainer = document.querySelector(".myData-container");
const editBtn = document.querySelector(".edit-button");
const voltar = document.querySelector(".voltar");
const formEdit = document.querySelector(".form-edit__content");
document.querySelector(".hello-user").innerHTML = `Olá, ${JSON.parse(localStorage.getItem("userName"))}!`;

editBtn.addEventListener("click",()=>{

    editDataContainer.style.display = "flex";
    myDataContainer.style.display = "none";
});
voltar.addEventListener("click",()=>{
    
    editDataContainer.style.display = "none";
    myDataContainer.style.display = "flex";
});

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
        console.log(data.animals[0].length)
        document.querySelector(".pets-registered").innerHTML = `${data.animals[0].length } Pets`
   })
    .catch((error) => {
      console.log("Ocorreu um erro:", error);
    });

document.querySelector(".name-user").innerHTML = JSON.parse(localStorage.getItem("userName"));
document.querySelector(".email-user").innerHTML = JSON.parse(localStorage.getItem("userEmail"));
formEdit.addEventListener("submit",(e)=>{
    const nameInput = document.getElementById("nameInput").value;
    const emailInput = document.getElementById("emailInput").value;
    const senhaInput = document.getElementById("senhaInput").value;
    let data = {
        name: nameInput,
        email: emailInput,
        password: senhaInput,
      };
      localStorage.setItem("userName", JSON.stringify(data.name));
      localStorage.setItem("userEmail", JSON.stringify(data.email));

e.preventDefault();
    const userId = JSON.parse(localStorage.getItem("userId"));
    fetch(`http://127.0.0.1:5502/updateuser/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
console.log(data)
window.location.reload(true);

     })
    .catch((error) => {
        console.log("Ocorreu um erro:", error);
      });


})