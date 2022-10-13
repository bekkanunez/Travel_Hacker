let flightBtn = document.getElementById("flightbtn");
let displayFlights = document.getElementById("flightsdisplay");
let FlightSubmit = document.getElementById("flsubmit");
let SelectedFC = document.getElementById("flightcode");
let FlightsCard = document.getElementById("flights");

function displayFlight() {
  displayEvent.style.display = "none";
  submitButton.style.display = "none";
  ERSubmitButton.style.display = "none";
  displayER.style.display = "none";
  displayFlights.style.display = "block";
  FlightSubmit.style.display = "block";

  function handleSubmit() {
    let selected = SelectedFC.value;
    console.log(selected);

    //add fetch function here
    const options = {
      method: "GET",
      headers: {
        "X-Access-Token": "cef6ec20c4d1eb4234ca0de58e8bdd36",
        "X-RapidAPI-Key": "b97e4d0c93msh7f739a62f0dd943p1d8359jsn54fc14eb8b0c",
        "X-RapidAPI-Host":
          "travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com",
      },
    };

    fetch(
      `https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/city-directions?currency=USD&origin=${selected}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        let arrayData = response.data;
        let sectionTitle = document.getElementById("flights-title");
        sectionTitle.textContent = "Flights from " + SelectedFC.value;

        for (const element in arrayData) {
          let card = document.createElement("div");
          card.setAttribute("class", "card small");
          let column = document.createElement("div");
          column.setAttribute("class", "col s12 m6 l3");

          let title = document.createElement("h5");
          title.setAttribute("class", "card-title");

          let price = document.createElement("p");
          let departat = document.createElement("p");

          title.textContent = arrayData[element].destination;
          price.textContent = arrayData[element].price;
          departat.textContent = arrayData[element].departure_at;
          column.appendChild(card);
          card.appendChild(title);
          card.appendChild(price);
          card.appendChild(departat);
          FlightsCard.appendChild(column);
        }
      })
      .catch((err) => console.error(err));
  }
  FlightSubmit.addEventListener("click", handleSubmit);
}

flightBtn.addEventListener("click", displayFlight);

// const sdsdsd = {
//   myanme: {
//     name: "chiemeka",
//   },
//   mdsd: 2,
// };

// for (const element in sdsdsd) {
//   console.log(sdsdsd[element].name);
// }
