// <--- AUS to  flight-->
flsubmit;
function displayFlight() {
	displayEvent.style.display = "none;"
	sumbitButton.style.display = "none;"
	ERSubmitButton.style.display = "none;"
	displayER.style.display = "none;"
	displayFlights.style.display = "block;"
	FlightSubmit.style.display = "block;"

	function handleSubmit() {
		let selected = SelectedFC.value;
		console.log(selected);

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
	FlightSubmit.addEventListener("click", handleSubmit)
}

flightBtn.addEventListener("click", displayFlight);

	


























		// 'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap?origin=AUS&page=None&currency=RUB&destination=DFW',
		// 'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap?origin=AUS&page=None&currency=RUB&destination=DEN',
		// 'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap?origin=AUS&page=None&currency=RUB&destination=ORD',
		// 'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap?origin=AUS&page=None&currency=RUB&destination=LAX',
		// 'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap?origin=AUS&page=None&currency=RUB&destination=CLT',
		// 'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap?origin=AUS&page=None&currency=RUB&destination=MCO',
		// 'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap?origin=AUS&page=None&currency=RUB&destination=LAS',
		// 'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap?origin=AUS&page=None&currency=RUB&destination=PHX',
		// 'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap?origin=AUS&page=None&currency=RUB&destination=MIA',
		// 'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap?origin=AUS&page=None&currency=RUB&destination=SEA',
		// 'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap?origin=AUS&page=None&currency=RUB&destination=IAH',











// <--- AUS to DFW flight-->
	
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-Access-Token': 'cef6ec20c4d1eb4234ca0de58e8bdd36',
// 		'X-RapidAPI-Key': 'a2fcaa510fmshad40401fc38d08cp10dc08jsndd45f7cf6b38',
// 		'X-RapidAPI-Host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com'
// 	}
// };

// fetch('https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap?origin=AUS&page=None&currency=RUB&destination=DFW', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

	// <--- AUS to DEN flight-->
	
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-Access-Token': 'cef6ec20c4d1eb4234ca0de58e8bdd36',
// 		'X-RapidAPI-Key': 'a2fcaa510fmshad40401fc38d08cp10dc08jsndd45f7cf6b38',
// 		'X-RapidAPI-Host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com'
// 	}
// };

// fetch('https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap?origin=AUS&page=None&currency=RUB&destination=DEN', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

	// <--- AUS to ORD flight-->
	
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-Access-Token': 'cef6ec20c4d1eb4234ca0de58e8bdd36',
// 		'X-RapidAPI-Key': 'a2fcaa510fmshad40401fc38d08cp10dc08jsndd45f7cf6b38',
// 		'X-RapidAPI-Host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com'
// 	}
// };

// fetch('https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap?origin=AUS&page=None&currency=RUB&destination=ORD', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

	// <--- AUS to LAX flight-->
	
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-Access-Token': 'cef6ec20c4d1eb4234ca0de58e8bdd36',
// 		'X-RapidAPI-Key': 'a2fcaa510fmshad40401fc38d08cp10dc08jsndd45f7cf6b38',
// 		'X-RapidAPI-Host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com'
// 	}
// };

// fetch('https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap?origin=AUS&page=None&currency=RUB&destination=LAX', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

	// <--- AUS to CLT flight-->
	
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-Access-Token': 'cef6ec20c4d1eb4234ca0de58e8bdd36',
// 		'X-RapidAPI-Key': 'a2fcaa510fmshad40401fc38d08cp10dc08jsndd45f7cf6b38',
// 		'X-RapidAPI-Host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com'
// 	}
// };

// fetch('https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap?origin=AUS&page=None&currency=RUB&destination=CLT', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

	// <--- AUS to MCO flight-->
	
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-Access-Token': 'cef6ec20c4d1eb4234ca0de58e8bdd36',
// 		'X-RapidAPI-Key': 'a2fcaa510fmshad40401fc38d08cp10dc08jsndd45f7cf6b38',
// 		'X-RapidAPI-Host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com'
// 	}
// };

// fetch('https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap?origin=AUS&page=None&currency=RUB&destination=MCO', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

	// <--- AUS to LAS flight-->
	
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-Access-Token': 'cef6ec20c4d1eb4234ca0de58e8bdd36',
// 		'X-RapidAPI-Key': 'a2fcaa510fmshad40401fc38d08cp10dc08jsndd45f7cf6b38',
// 		'X-RapidAPI-Host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com'
// 	}
// };

// fetch('https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap?origin=AUS&page=None&currency=RUB&destination=LAS', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

	// <--- AUS to PHX flight-->
	
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-Access-Token': 'cef6ec20c4d1eb4234ca0de58e8bdd36',
// 		'X-RapidAPI-Key': 'a2fcaa510fmshad40401fc38d08cp10dc08jsndd45f7cf6b38',
// 		'X-RapidAPI-Host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com'
// 	}
// };

// fetch('https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap?origin=AUS&page=None&currency=RUB&destination=PHX', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

	// <--- AUS to MIA flight-->
	
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-Access-Token': 'cef6ec20c4d1eb4234ca0de58e8bdd36',
// 		'X-RapidAPI-Key': 'a2fcaa510fmshad40401fc38d08cp10dc08jsndd45f7cf6b38',
// 		'X-RapidAPI-Host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com'
// 	}
// };

// fetch('https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap?origin=AUS&page=None&currency=RUB&destination=MIA', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

	// <--- AUS to SEA flight-->
	
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-Access-Token': 'cef6ec20c4d1eb4234ca0de58e8bdd36',
// 		'X-RapidAPI-Key': 'a2fcaa510fmshad40401fc38d08cp10dc08jsndd45f7cf6b38',
// 		'X-RapidAPI-Host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com'
// 	}
// };

// fetch('https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap?origin=AUS&page=None&currency=RUB&destination=SEA', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

	// <--- AUS to IAH flight-->
	
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-Access-Token': 'cef6ec20c4d1eb4234ca0de58e8bdd36',
// 		'X-RapidAPI-Key': 'a2fcaa510fmshad40401fc38d08cp10dc08jsndd45f7cf6b38',
// 		'X-RapidAPI-Host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com'
// 	}
// };

// fetch('https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap?origin=AUS&page=None&currency=RUB&destination=IAH', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));