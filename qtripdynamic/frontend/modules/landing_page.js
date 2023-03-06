import config from "../conf/index.js";

async function init() {
  //Fetches list of all cities along with their images and description
  let cities = await fetchCities();
  //Updates the DOM with the cities
  cities.forEach((key) => {
    addCityToDOM(key.id, key.city, key.description, key.image);
  });
}

//Implementation of fetch call
async function fetchCities() {
  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data
  let cities = []
  try{
    cities = await fetch(config.backendEndpoint+'/cities')
    .then(response => response.json())
    .then(data => data);
    return cities;
  }catch(error){
    console.log(error);
    return null;
  }
}

//Implementation of DOM manipulation to add cities
function addCityToDOM(id, city, description, image) {
  // TODO: MODULE_CITIES
  // 1. Populate the City details and insert those details into the DOM
  let cardWrapper = document.createElement('div');
  cardWrapper.setAttribute('class', 'col-12 col-sm-6 col-md-4 col-lg-3');
  let cardInnerWrapper = document.createElement('div');
  cardInnerWrapper.setAttribute('class', 'tile p-2')
  let imageElement = document.createElement('img');
  imageElement.setAttribute('src', image);
  cardInnerWrapper.appendChild(imageElement);
  let tileTextWrapper = document.createElement('div');
  tileTextWrapper.setAttribute('class', 'tile-text')
  let cityTitle = document.createElement('h5');
  cityTitle.innerText = city;
  let cityDescription = document.createElement('p');
  cityDescription.innerText = description;
  tileTextWrapper.appendChild(cityTitle);
  tileTextWrapper.appendChild(cityDescription);
  cardInnerWrapper.appendChild(tileTextWrapper);
  let linkElement = document.createElement('a');
  linkElement.setAttribute('href', 'pages/adventures/?city='+id)
  linkElement.setAttribute('id', id);
  linkElement.appendChild(cardInnerWrapper);
  cardWrapper.appendChild(linkElement);
  document.getElementById('data').appendChild(cardWrapper);

}

export { init, fetchCities, addCityToDOM };
