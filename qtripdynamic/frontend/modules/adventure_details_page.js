import config from "../conf/index.js";

//Implementation to extract adventure ID from query params
function getAdventureIdFromURL(search) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Get the Adventure Id from the URL
  let params = new URLSearchParams(search);
  let id = params.get("adventure");
  return id;
}
//Implementation of fetch call with a paramterized input based on adventure ID
async function fetchAdventureDetails(adventureId) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Fetch the details of the adventure by making an API call
  let url = config.backendEndpoint+'/adventures/detail?adventure='+adventureId;
  let adventureDetail = [];
  try{
    adventureDetail = await fetch(url)
      .then(response => response.json())
      .then(data => data);
  }catch(error){
    console.log(error);
    adventureDetail = null;
  }
  return adventureDetail;
}

//Implementation of DOM manipulation to add adventure details to DOM
function addAdventureDetailsToDOM(adventure) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the details of the adventure to the HTML DOM
  document.getElementById('adventure-name').innerHTML = adventure.name;
  document.getElementById('adventure-subtitle').innerHTML = adventure.subtitle;
  adventure.images.forEach((image) => {
    let adventureImageWrapper = document.createElement('div');
    let adventureImage = document.createElement('img');
    adventureImage.setAttribute('src', image);
    adventureImage.setAttribute('class', 'activity-card-image');
    adventureImageWrapper.appendChild(adventureImage);
    document.getElementById('photo-gallery').appendChild(adventureImageWrapper);
  });
  document.getElementById('adventure-content').innerHTML = adventure.content;

}

//Implementation of bootstrap gallery component
function addBootstrapPhotoGallery(images) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the bootstrap carousel to show the Adventure images
  let indicators = 0;
  let carousel = '';
  carousel += '<div id="carouselIndicators" class="carousel slide" data-ride="carousel">';
  carousel += '<ol class="carousel-indicators">';
  images.forEach((image)=>{
    carousel += `<li data-target="#carouselIndicators" data-slide-to="${indicators}" class="${indicators == 0 ? 'active' : ''}"></li>`;
    indicators += 1;
  });
  carousel += '</ol>';
  carousel += '<div class="carousel-inner">';
  let imageCount  = 0;
  images.forEach((image) => {
    carousel += `<div class="carousel-item ${imageCount == 0 ? 'active' : ''}">`;
    carousel += `<img class="d-block w-100 activity-card-image" src="${image}" alt="slide ${imageCount}">`;
    carousel += '</div>';
    imageCount += 1;
  })
  carousel += '</div>';
  carousel += '<a class="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">';
  carousel += '<span class="carousel-control-prev-icon" aria-hidden="true"></span>';
  carousel += '<span class="sr-only">Previous</span>';
  carousel += '</a>';
  carousel += '<a class="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">';
  carousel += '<span class="carousel-control-next-icon" aria-hidden="true"></span>';
  carousel += '<span class="sr-only">Next</span>';
  carousel += '</a>';
  carousel += '</div>';
  document.getElementById('photo-gallery').innerHTML = carousel;

}

//Implementation of conditional rendering of DOM based on availability
function conditionalRenderingOfReservationPanel(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If the adventure is already reserved, display the sold-out message.
  if(adventure.available){
    document.getElementById('reservation-panel-sold-out').style.display = 'none';
    document.getElementById('reservation-panel-available').style.display = 'block';
    document.getElementById('reservation-person-cost').innerHTML = adventure.costPerHead;
  }else{
    document.getElementById('reservation-panel-sold-out').style.display = 'block';
    document.getElementById('reservation-panel-available').style.display = 'none';
  }

}

//Implementation of reservation cost calculation based on persons
function calculateReservationCostAndUpdateDOM(adventure, persons) {
  // TODO: MODULE_RESERVATIONS
  // 1. Calculate the cost based on number of persons and update the reservation-cost field
  let totalCost = adventure.costPerHead * persons;
  document.getElementById('reservation-cost').innerHTML = totalCost;

}

//Implementation of reservation form submission using JQuery
function captureFormSubmitUsingJQuery(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. Capture the query details and make a POST API call using JQuery to make the reservation
  // 2. If the reservation is successful, show an alert with "Success!" and refresh the page. If the reservation fails, just show an alert with "Failed!".
  $("#myForm").on("submit", function(e) {
    e.preventDefault();
    let formData =  $("#myForm").serialize();
    formData += '&adventure='+adventure.id
    let url = config.backendEndpoint+'/reservations/new';
    $.ajax({
      url: url,
      type: 'post',
      // dataType: 'application/json',
      data: formData,
      success: function(data, status, xhr) {
          e.preventDefault()
          console.log({data, status, xhr});
          alert('Success!');
          location.reload();
      },
      error: function(xhr, status, error){
        console.log({xhr, status, error});
        alert('Failed!');
      }
    });

});
}

//Implementation of success banner after reservation
function showBannerIfAlreadyReserved(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If user has already reserved this adventure, show the reserved-banner, else don't
  if(adventure.reserved){
    document.getElementById('reserved-banner').style.display = 'block';
  }else{
    document.getElementById('reserved-banner').style.display = 'none';
  }

}

export {
  getAdventureIdFromURL,
  fetchAdventureDetails,
  addAdventureDetailsToDOM,
  addBootstrapPhotoGallery,
  conditionalRenderingOfReservationPanel,
  captureFormSubmitUsingJQuery,
  calculateReservationCostAndUpdateDOM,
  showBannerIfAlreadyReserved,
};
