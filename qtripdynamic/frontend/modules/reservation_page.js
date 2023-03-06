import config from "../conf/index.js";

//Implementation of fetch call to fetch all reservations
async function fetchReservations() {
  // TODO: MODULE_RESERVATIONS
  // 1. Fetch Reservations by invoking the REST API and return them
  let url = config.backendEndpoint+'/reservations';
  let reservations = [];
  try{
    reservations = await fetch(url)
    .then(response => response.json())
    .then(data => data);
  }catch(error){
    console.log(error);
    reservations = null;
  }
  // Place holder for functionality to work in the Stubs
  console.log(reservations)
  return reservations;
}

//Function to add reservations to the table. Also; in case of no reservations, display the no-reservation-banner, else hide it.
function addReservationToTable(reservations) {
  // TODO: MODULE_RESERVATIONS
  // 1. Add the Reservations to the HTML DOM so that they show up in the table
  //Conditionally render the no-reservation-banner and reservation-table-parent
  /*
    Iterating over reservations, adding it to table (into div with class "reservation-table") and link it correctly to respective adventure
    The last column of the table should have a "Visit Adventure" button with id=<reservation-id>, class=reservation-visit-button and should link to respective adventure page

    Note:
    1. The date of adventure booking should appear in the format DD/MM/YYYY (en-IN format) Example:  4/11/2020 denotes 4th November, 2020
    2. The booking time should appear in a format like 4 November 2020, 9:32:31 pm
  */
  if(reservations.length == 0 || reservations == null){
    document.getElementById('no-reservation-banner').style.display = 'block';
    document.getElementById('reservation-table-parent').style.display = 'none';
  }else{
    document.getElementById('no-reservation-banner').style.display = 'none';
    document.getElementById('reservation-table-parent').style.display = 'block';

    reservations.forEach((reservation) => {
      let row = document.createElement('tr');
      let colId = document.createElement('td');
      colId.setAttribute('scope', "col");
      colId.innerHTML = reservation.id;
      row.appendChild(colId);

      let name = document.createElement('td');
      name.setAttribute('scope', "col");
      name.innerHTML = reservation.name;
      row.appendChild(name);

      let bookingName = document.createElement('td');
      bookingName.setAttribute('scope', "col");
      bookingName.innerHTML = reservation.adventureName;
      row.appendChild(bookingName);

      let persons = document.createElement('td');
      persons.setAttribute('scope', "col");
      persons.innerHTML = reservation.person;
      row.appendChild(persons);

      let dateArray = reservation.date.split("-");
      let newDate = new Date(dateArray[0], dateArray[1]-1, dateArray[2]);
      let formattedDate = newDate.toLocaleDateString('en-IN');
      let date = document.createElement('td');
      date.setAttribute('scope', "col");
      date.innerHTML = formattedDate;
      row.appendChild(date);

      let price = document.createElement('td');
      price.setAttribute('scope', "col");
      price.innerHTML = reservation.price;
      row.appendChild(price);

      let bookingTime = new Date(reservation.time);
      let datePart = bookingTime.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
      let timePart = bookingTime.toLocaleTimeString('en-IN');
      let time = document.createElement('td');
      time.setAttribute('scope', "col");
      time.innerHTML = datePart + ', ' + timePart;
      row.appendChild(time);

      let action = document.createElement('td');
      action.setAttribute('scope', "col");
      let actionWrapper = document.createElement('div');
      actionWrapper.setAttribute('id', reservation.id);
      action.appendChild(actionWrapper);
      let actionLink = document.createElement('a');
      actionLink.setAttribute('class', 'reservation-visit-button');
      actionLink.setAttribute('href', '/frontend/pages/adventures/detail/?adventure='+reservation.adventure);
      actionLink.innerHTML = 'Visit Adventure';
      action.appendChild(actionLink);
      actionWrapper.appendChild(actionLink);
      row.appendChild(action);

      document.getElementById('reservation-table').appendChild(row);
    });
  }
  
}

export { fetchReservations, addReservationToTable };
