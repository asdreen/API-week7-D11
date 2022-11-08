const mainDiv = document.querySelector("#metallica");
const mainDiv1 = document.querySelector("#pink");
const mainDiv2 = document.querySelector("#daft");
const metallicaList = document.querySelector("#metallicaList");
const pinkList = document.querySelector("#pinkList");
const daftList = document.querySelector("#daftList");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ec799739f9msh4604c3b9aa15bb1p15d2fdjsnb18c290b5028",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=metallica", options)
  .then((response) => response.json())
  .then((data) => {
    displayTitle(data, mainDiv);
    songsList(data, metallicaList);
  })

  .catch((err) => console.error(err));

const options1 = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ec799739f9msh4604c3b9aa15bb1p15d2fdjsnb18c290b5028",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

fetch(
  "https://deezerdevs-deezer.p.rapidapi.com/search?q=pink%20floyd",
  options1
)
  .then((response) => response.json())
  .then((data) => {
    displayTitle(data, mainDiv1);
    songsList(data, pinkList);
  })

  .catch((err) => console.error(err));

const options2 = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ec799739f9msh4604c3b9aa15bb1p15d2fdjsnb18c290b5028",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=daft%20punk", options2)
  .then((response) => response.json())
  .then((data) => {
    displayTitle(data, mainDiv2);
    songsList(data, daftList);
  })

  .catch((err) => console.error(err));

function displayTitle(data, mainDiv) {
  for (i = 0; i < data.data.length; i++) {
    let cardDiv = document.createElement("div");
    cardDiv.className = "card pl-3";
    cardDiv.style = "width: 13rem;";
    let img = document.createElement("img");
    img.src = data.data[i].album.cover_medium;
    img.className = "card-img-top";
    cardDiv.appendChild(img);
    let cardBodyDiv = document.createElement("div");
    cardBodyDiv.className = "card-body";
    cardDiv.appendChild(cardBodyDiv);
    let addH5 = document.createElement("h5");
    addH5.className = "card-title";
    addH5.innerText = data.data[i].artist.name + " " + data.data[i].title;
    cardBodyDiv.appendChild(addH5);
    let addP = document.createElement("p");
    addP.className = "card-text";
    addP.innerText = "Song ID: " + data.data[i].id;

    // cardDiv.innerText = data.data[i].title;
    mainDiv.appendChild(cardDiv);
  }
  2000;
}

let songsList = function (data, metallicaList) {
  for (i = 0; i < data.data.length; i++) {
    let createLi = document.createElement("li");
    createLi.innerText = data.data[i].title;
    metallicaList.appendChild(createLi);
  }
};
