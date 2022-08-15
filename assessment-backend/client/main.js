//const { default: axios } = require("axios");

const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("randomFortune")
const addIdeaBtn = document.getElementById("submitForm")
const updateIdeaBtn = document.getElementById("updateForm")
const deleteIdeaBtn = document.getElementById("deleteForm")

const newIdea = document.getElementById("idea")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const addIdea = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:4000/api/idea/${newIdea.value}`)
        .then(res => {
            const data = res.data;
            document.getElementById("ideas").innerHTML = data
            .map(function (idea, index) {
                return `<li class="row" id="${index}">` + idea + '</li>' 
                + `<button id="alertForm" onclick="alertIdea(${index})">Alert</button>`
                + `<button id="deleteForm" onclick="deleteIdea(${index})">Delete</button>`;
            })
            .join("");
            //alert(data);
    });
};

const updateIdea = () => {
    axios.put(`http://localhost:4000/api/idea/${newIdea.value}`)
        .then(res => {
            const data = res.data;
            document.getElementById("ideas").innerHTML = data
            .map(function (idea, index) {
                return `<li class="row" id="${index}">` + idea + '</li>'
                + `<button id="alertForm" onclick="alertIdea(${index})">Alert</button>`
                + `<button id="deleteForm" onclick="deleteIdea(${index})">Delete</button>`;
            })
            .join("");
    });
    alert('The idea has been updated!')
};

const deleteIdea = (index) => {
    axios.delete(`http://localhost:4000/api/idea/${index}`)
    .then(res => {
        const data = res.data;
        document.getElementById(`${index}`).innerHTML = data;
    });
    alert('The idea has been deleted!')
};

const alertIdea = (index) => {
    axios.get(`http://localhost:4000/api/idea/${index}`)
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
addIdeaBtn.addEventListener('click', addIdea)
updateIdeaBtn.addEventListener('click', updateIdea)
deleteIdeaBtn.addEventListener('click', deleteIdea)