"use strict";

const showList = document.getElementById("showList");

const myKey = "53870676-ced4-4dbd-9e31-675986686347";
const API = "https://project-1-api.herokuapp.com";

function displayShows() {
  axios
    .get(`${API}/showdates?api_key=${myKey}`)
    .then(function (response) {
      appendShowList(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function appendShowList(response) {
  response.forEach((showObj) => {
    //create date label
    const dateLabel = document.createElement("h5");
    dateLabel.classList.add("show__labelD");
    dateLabel.innerText = "DATE";
    // add data to date label
    const date = document.createElement("h6");
    date.classList.add("show__date");
    date.innerText = showObj.date;

    const dateDiv = document.createElement("div");
    dateDiv.classList.add("show__dateDiv");
    dateDiv.appendChild(dateLabel);
    dateDiv.appendChild(date);

    //create venue label
    const venueLabel = document.createElement("h5");
    venueLabel.classList.add("show__labelV");
    venueLabel.innerText = "VENUE";
    // add data to venue label
    const venue = document.createElement("h6");
    venue.classList.add("show__venue");
    venue.innerText = showObj.place;

    const venueDiv = document.createElement("div");
    venueDiv.classList.add("show__venueDiv");
    venueDiv.appendChild(venueLabel);
    venueDiv.appendChild(venue);

    //create location lable
    const locationLabel = document.createElement("h5");
    locationLabel.classList.add("show__labelL");
    locationLabel.innerText = "LOCATION";
    // add data to location lable
    const location = document.createElement("h6");
    location.classList.add("show__location");
    location.innerText = showObj.location;

    const locationDiv = document.createElement("div");
    locationDiv.classList.add("show__locationDiv");
    locationDiv.appendChild(locationLabel);
    locationDiv.appendChild(location);

    // creat button
    const myButton = document.createElement("button");
    myButton.classList.add("show__button");
    myButton.innerText = "BUY TICKETS";

    // create dvider line
    const myLine = document.createElement("div");
    myLine.classList.add("show__divider");
    // create li
    const showItem = document.createElement("li");
    showItem.classList.add("show__item");

    showItem.appendChild(dateDiv);

    showItem.appendChild(venueDiv);

    showItem.appendChild(locationDiv);
    showItem.appendChild(myButton);

    showList.appendChild(showItem);
  });
}
displayShows();
