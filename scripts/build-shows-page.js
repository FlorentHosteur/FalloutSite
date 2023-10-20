"use strict";

const showList = document.getElementById("showList");

const concerts = 
[
  {
    date: "27-10-2023",
    place: "<a href='https://www.facebook.com/leklubparis/' class='show__venue'>Le Klub</a>",
    location: "Paris (France)"
  },
  {
    date: "04-11-2023",
    place: "<a href='https://www.facebook.com/laMHmarseille/' class='show__venue'>La Maison Hantée</a>",
    location: "Marseille (France)"
  },
  {
    date: "01-12-2023",
    place: "<a href='https://www.facebook.com/LeKJBI/' class='show__venue'>Le KJBI</a>",
    location: "Montpellier (France)"
  },
  {
    date: "27-01-2024",
    place: "<a href='https://www.notikumi.com/2024/1/27/extreme-core-fest' class='show__venue'>ExtremeCore Fest</a>",
    location: "Murcia (Espagne)"
  },
  {
    date: "02-2024",
    place: "<a href='https://www.facebook.com/people/JasRod/100057636302207/' class='show__venue'>Jas Rod</a>",
    location: "Pennes-Mirabeau (France)"
  }
];

function displayShows() {
    appendShowList(concerts);
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
    venue.innerHTML = showObj.place;

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

    // create dvider line
    const myLine = document.createElement("div");
    myLine.classList.add("show__divider");
    // create li
    const showItem = document.createElement("li");
    showItem.classList.add("show__item");

    showItem.appendChild(dateDiv);

    showItem.appendChild(venueDiv);

    showItem.appendChild(locationDiv);

    showList.appendChild(showItem);
  });
}
displayShows();
