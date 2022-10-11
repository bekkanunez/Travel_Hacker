const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "29018514f3msh527e9a0f194d3a7p1c46ccjsn4a2648e61b10",
    "X-RapidAPI-Host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
  },
};

export const call = fetch(
  "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-recommendations?symbol=INTC",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
