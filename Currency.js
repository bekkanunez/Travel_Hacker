let displayER = document.querySelector(".currencydisplaybox");
let ERButton = document.getElementById("erbtn");
let displayEvent = document.querySelector(".eventsdisplaybox");
let submitButton = document.getElementById("fetch-button");
let ERSubmitButton = document.getElementById("ersubmit");
let from = document.getElementById("from");
let to = document.getElementById("to");
let amount = document.getElementById("amount");

let renderAmount = document.getElementById("renderamout");
function displayBox(e) {
  displayEvent.style.display = "none";
  displayER.style.display = "block";
  submitButton.style.display = "none";
  ERSubmitButton.style.display = "block";

  displayFlights.style.display = "none";
  FlightSubmit.style.display = "none";
  function fetchData() {
    let sfrom = from.value;
    let nto = to.value;
    let aamount = amount.value;
    var requestURL = `https://api.exchangerate.host/convert?from=${sfrom}&to=${nto}&amount=${aamount}`;
    var request = new XMLHttpRequest();
    request.open("GET", requestURL);
    request.responseType = "json";
    request.send();

    request.onload = function () {
      var response = request.response;
      let result = Math.floor(response.result);
      renderAmount.textContent = nto + " " + result;
    };
  }

  ERSubmitButton.addEventListener("click", fetchData);
}
ERButton.addEventListener("focus", displayBox);
