var eventContainer = document.getElementById("events");

var requestUrl =
  "https://app.ticketmaster.com/discovery/v2/events.json?size=20&apikey=BXvJ4aOkyAubQcnM2c60FbqlkE3Jhfcg&city=barcelona";

const ticketMaster = fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log("Ticketmaster Data \n----------");
    console.log(data._embedded.events);
    var events = data._embedded.events;
    for (var i = 0; i < events.length; i++) {
      var event = document.createElement("h3");
      var picture = document.createElement("img");
      event.textContent = events[i].name;
      picture.src = events[i].images[0].url;
      picture.setAttribute("width", "200px");
      eventContainer.append(event);
      eventContainer.append(picture);
      picture.classList.add("col");
      picture.classList.add("s1");
      event.classList.add("col");
      event.classList.add("s1");
    }
  });

export default ticketMaster;
