let flightBtn = document.getElementById("flightbtn");
let displayFlights = document.getElementById("flightsdisplay");
let FlightSubmit = document.getElementById("flsubmit");
let SelectedFC = document.getElementById("flightcode");

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
      "https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/city-directions?currency=USD&origin=LAX",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.error(err));
  }
  FlightSubmit.addEventListener("click", handleSubmit);
}

flightBtn.addEventListener("click", displayFlight);
