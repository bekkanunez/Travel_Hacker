//variables for html elements with references
var fetchButton = document.getElementById("fetch-button");

/// show tickets/events
function ticketMaster(e) {
  import("./components/Ticket_Master/script.js");
}

fetchButton.addEventListener("click", ticketMaster);
console.log("hellow");
