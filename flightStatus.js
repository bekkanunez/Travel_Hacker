let flightBtn = document.getElementById("flightbtn");
let displayFlights = document.getElementById("flightsdisplay");
let FlightSubmit = document.getElementById("flsubmit");
let SelectedFC = document.getElementById("flightcode");
flsubmit;
function displayFlight() {
  displayEvent.style.display = "none";
  sumbitButton.style.display = "none";
  ERSubmitButton.style.display = "none";
  displayER.style.display = "none";
  displayFlights.style.display = "block";
  FlightSubmit.style.display = "block";

  function handleSubmit() {
    let selected = SelectedFC.value;
    console.log(selected);

    //add fetch function here
  }
  FlightSubmit.addEventListener("click", handleSubmit);
}

flightBtn.addEventListener("click", displayFlight);
