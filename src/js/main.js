const apiKey = document.querySelector("#apiKey");
const gameSelect = document.querySelector("#gameSelect");
const questionInput = document.querySelector("#questionInput");
const askButton = document.querySelector("#askButton");

const form = document.querySelector("#form");
const aiResponse = document.querySelector("#aiResponse");


const enviarFormulario = (event) => {
    event.preventDefault();
};


form.addEventListener('submit', enviarFormulario)