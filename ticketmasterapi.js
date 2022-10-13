var eventContainer = document.getElementById("events");
var fetchButton = document.getElementById("fetch-button");
let eventsButton = document.getElementById("ebutton");

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

function getApi(city) {
  var requestUrl =
    "https://app.ticketmaster.com/discovery/v2/events.json?size=20&apikey=BXvJ4aOkyAubQcnM2c60FbqlkE3Jhfcg&city=" +
    city;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      document.getElementById("events").innerHTML = "";
      let sectionTitle = document.getElementById("events-title");
      let capitalizedCity = toTitleCase(city);
      sectionTitle.textContent = capitalizedCity + " Local Events";

      console.log("Ticketmaster Data \n----------");
      console.log(data);
      var events = data._embedded.events;
      for (var i = 0; i < events.length; i++) {
        let column = document.createElement("div");
        column.setAttribute("class", "col s12 m6 l3");

        let card = document.createElement("div");
        card.setAttribute("class", "card small");

        let cardImage = document.createElement("div");
        cardImage.setAttribute("class", "card-image");

        let img = document.createElement("img");
        img.style = "height:100px;";
        img.src = events[i].images[0].url;
        cardImage.appendChild(img);

        let cardContent = document.createElement("div");
        cardContent.setAttribute("class", "card-content");
        cardContent.style = "display:table;";

        let title = document.createElement("h5");
        title.setAttribute("class", "card-title");
        title.style = "display:table;";
        var shortenedTitle = events[i].name;
        if (shortenedTitle.length > 43) {
          shortenedTitle = shortenedTitle.slice(0, 40).trim() + "...";
        }
        title.textContent = shortenedTitle;

        let venue = document.createElement("p");
        venue.setAttribute("class", "font-weight-italic");
        venue.style = "display:table;";
        var shortenedVenue = events[i]._embedded.venues[0].name;
        if (shortenedVenue.length > 33) {
          shortenedVenue = shortenedVenue.slice(0, 30).trim() + "...";
        }
        venue.textContent = "Venue: " + shortenedVenue;

        let cardAction = document.createElement("div");
        cardAction.setAttribute("class", "card-action");

        let button = document.createElement("a");
        // button.setAttribute("class", "btn btn-primary");
        button.textContent = "Get tickets here!";
        button.href = events[i].url;

        cardAction.appendChild(button);

        cardContent.appendChild(title);
        cardContent.appendChild(venue);

        card.appendChild(cardImage);
        card.appendChild(cardContent);
        card.appendChild(cardAction);

        column.appendChild(card);

        document.getElementById("events").appendChild(column);
      }
    });
}

fetchButton.addEventListener("click", function () {
  let city = document.getElementById("city-input").value;
  getApi(city);
});

eventsButton.addEventListener("click", function () {
  displayEvent.style.display = "block";
  sumbitButton.style.display = "block";
  ERSubmitButton.style.display = "none";
  displayER.style.display = "none";
  displayFlights.style.display = "none";
  FlightSubmit.style.display = "none";
});
