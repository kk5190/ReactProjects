
import config from "../conf/index.js";

//Implementation to extract city from query params
function getCityFromURL(search) {
  // TODO: MODULE_ADVENTURES
  // 1. Extract the city id from the URL's Query Param and return it
  let params = new URLSearchParams(search);
  let id = params.get("city")
  return id;
}

//Implementation of fetch call with a paramterized input based on city
async function fetchAdventures(city) {
  // TODO: MODULE_ADVENTURES
  // 1. Fetch adventures using the Backend API and return the data
  let url = config.backendEndpoint+'/adventures?city='+city;
  let adventures = [];
  try{
    adventures = await fetch(url)
    .then(response => response.json())
    .then(data => data);
    return adventures;
  }catch(error){
    console.log(error);
    return null;
  }
}

//Implementation of DOM manipulation to add adventures for the given city from list of adventures
function addAdventureToDOM(adventures) {
  // TODO: MODULE_ADVENTURES
  // 1. Populate the Adventure Cards and insert those details into the DOM
  adventures.forEach((key) => {
    let card = document.createElement('div');
    card.setAttribute('class', 'col-12 col-sm-6 col-md-4 col-lg-3');
    let activityLink = document.createElement('a');
    activityLink.setAttribute('href', 'detail/?adventure='+key.id);
    activityLink.setAttribute('id', key.id);
    card.appendChild(activityLink);
    let activityCategory = document.createElement('div');
    activityCategory.setAttribute('class', 'category-banner');
    activityCategory.innerText = key.category;
    card.appendChild(activityCategory);

    let activityCard = document.createElement('div');
    activityCard.setAttribute('class', 'card activity-card my-2');

    let activityCardImage= document.createElement('img');
    activityCardImage.setAttribute('src', key.image);
    activityCardImage.setAttribute('class', 'card-img-top');
    activityCardImage.setAttribute('alt', key.name);
    activityCard.appendChild(activityCardImage);

    let activityCardBody1= document.createElement('div');
    activityCardBody1.setAttribute('class', 'card-body d-flex justify-content-between align-items-center w-100');
    let activityName = document.createElement('span');
    activityName.innerText = key.name;
    activityCardBody1.appendChild(activityName);
    let activityCostPerHead = document.createElement('span');
    activityCostPerHead.innerText = getCurrencySymbol(key.currency) + key.costPerHead;
    activityCardBody1.appendChild(activityCostPerHead);

    let activityCardBody2= document.createElement('div');
    activityCardBody2.setAttribute('class', 'card-body d-flex justify-content-between align-items-center w-100');
    let activityDurationLabel = document.createElement('span');
    activityDurationLabel.innerText = 'Duration';
    activityCardBody2.appendChild(activityDurationLabel);
    let activityDuration = document.createElement('span');
    activityDuration.innerText = key.duration + ' Hours';
    activityCardBody2.appendChild(activityDuration);

    activityCard.appendChild(activityCardBody1);
    activityCard.appendChild(activityCardBody2);
    activityLink.appendChild(activityCard);
    document.getElementById('data').appendChild(card);
  });
}

//Implementation of filtering by duration which takes in a list of adventures, the lower bound and upper bound of duration and returns a filtered list of adventures.
function filterByDuration(list, low, high) {
  // TODO: MODULE_FILTERS
  // 1. Filter adventures based on Duration and return filtered list
  let filteredList = list.filter((adventure) => adventure.duration >= low && adventure.duration <= high);
  return filteredList;

}

//Implementation of filtering by category which takes in a list of adventures, list of categories to be filtered upon and returns a filtered list of adventures.
function filterByCategory(list, categoryList) {
  // TODO: MODULE_FILTERS
  // 1. Filter adventures based on their Category and return filtered list
  let filteredList = list.filter((adventure) => {
    let f = false;
    for(let i=0; i<categoryList.length; i++){
      if(adventure.category == categoryList[i]){
        f=true;
        continue;
      }
    }
    return f;
  });
  return filteredList;
}

// filters object looks like this filters = { duration: "", category: [] };

//Implementation of combined filter function that covers the following cases :
// 1. Filter by duration only
// 2. Filter by category only
// 3. Filter by duration and category together

function filterFunction(list, filters) {
  // TODO: MODULE_FILTERS
  // 1. Handle the 3 cases detailed in the comments above and return the filtered list of adventures
  // 2. Depending on which filters are needed, invoke the filterByDuration() and/or filterByCategory() methods
  
  if(filters.duration.length > 0){
    let durationArray = filters.duration.split("-");
    let low = durationArray[0];
    let high = durationArray[1];
    list = filterByDuration(list, low, high);
  }

  if(filters.category.length > 0){
    list = filterByCategory(list, filters.category);
  }

  // Place holder for functionality to work in the Stubs
  return list;
}

//Implementation of localStorage API to save filters to local storage. This should get called everytime an onChange() happens in either of filter dropdowns
function saveFiltersToLocalStorage(filters) {
  // TODO: MODULE_FILTERS
  // 1. Store the filters to localStorage using JSON.stringify()
  localStorage.setItem("filters", JSON.stringify(filters));
  return true;
}

//Implementation of localStorage API to get filters from local storage. This should get called whenever the DOM is loaded.
function getFiltersFromLocalStorage() {
  // TODO: MODULE_FILTERS
  // 1. Get the filters from localStorage and return in JSON format
  let filters = localStorage.getItem("filters");
  // Place holder for functionality to work in the Stubs
  return JSON.parse(filters);
}

//Implementation of DOM manipulation to add the following filters to DOM :
// 1. Update duration filter with correct value
// 2. Update the category pills on the DOM

function generateFilterPillsAndUpdateDOM(filters) {
  // TODO: MODULE_FILTERS
  // 1. Use the filters given as input, update the Duration Filter and Generate Category Pills

  document.getElementById("category-list").textContent = "";
  if(filters.duration.length > 0){
    document.getElementById("duration-select").value = filters.duration;
  }
  if(filters.category.length > 0){
    filters.category.forEach((category) => {
      let categoryFilterElement = document.createElement('span');
      categoryFilterElement.setAttribute('class', 'category-filter');
      categoryFilterElement.innerHTML = category+'&nbsp;&nbsp;';
      let closeButton = document.createElement('span');
      closeButton.setAttribute('role', 'button');
      closeButton.setAttribute('aria-hidden', 'true');
      closeButton.setAttribute('id', category);
      closeButton.setAttribute('onclick', 'removeCategory(event)');
      closeButton.innerHTML = '&times;';
      categoryFilterElement.appendChild(closeButton);
      document.getElementById('category-list').appendChild(categoryFilterElement);
    });
  }
}

async function createNewAdventure(city){
  let url = config.backendEndpoint+'/adventures/new';
  let response = fetch(url, {
      method: 'POST', // or 'PUT'
      headers: {
      'Content-Type': 'application/json',
      },
  body: JSON.stringify({city:city})
  })
  .then(response => response.json())
  .then(data => {
      return data;
  })
  .catch((error) => {
      console.error(error);
      return null;
  });
  return response;
}

function getCurrencySymbol(currency){
  if(currency == 'INR'){
    return '₹';
  }else{
    return '$';
  }
}

export {
  getCityFromURL,
  fetchAdventures,
  addAdventureToDOM,
  filterByDuration,
  filterByCategory,
  filterFunction,
  saveFiltersToLocalStorage,
  getFiltersFromLocalStorage,
  generateFilterPillsAndUpdateDOM,
  createNewAdventure
};
