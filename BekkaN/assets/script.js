// // var geocoder;
// // var map;
// var searchBar = document.getElementById('destination')
// var submitBtn = document.getElementById('submit')



// function geocode(){ 
//     var location = searchBar.value;
// axios('https://maps.googleapis.com/maps/api/geocode/json',{
//     params:{
//         address:location,
//         key:'AIzaSyAML37UWImB_IHbWXqjq5kquRAGr6HWqgc'
//     }
// })
// .then(function(response){
//     console.log(response);
// })
// } 
// geocode();


// function initMap() {
//     var options = {
//         zoom:9,
//         center: {lat:30.2672,lng:0}
//     }
 

//    var map = new google.maps.Map(document.getElementById('map'), options);
// }  

// initMap();

// // var geocoder; 
// // var map;


// // function initialize() {
// //   geocoder = new google.maps.Geocoder();
// //   var latlng = new google.maps.LatLng(-34.397, 150.644);
// //   var mapOptions = {
// //     zoom: 8,
// //     center: latlng
// //   }
// //   map = new google.maps.Map(document.getElementById('map'), mapOptions);
// // }


// // function codeAddress() {
// //     var address = searchBar.textContent();
// //     geocoder.geocode( { 'address': address}, function(results, status) {
// //       if (status == 'OK') {
// //         map.setCenter(results[0].geometry.location);
// //         var marker = new google.maps.Marker({
// //             map: map,
// //             position: results[0].geometry.location
// //         });
// //       } else {
// //         alert('Geocode was not successful for the following reason: ' + status);
// //       }
// //     });
// // }

// submitBtn.addEventListener('click', geocode);
// // initialize();


// // geocode(); 

// // var destintion = document.getElementById('#destination-input');
// // var btnDestination = document.getElementById('submit')


// // function getAPI() {
// //     var requestUrl = 'https://maps.googleapis.com/maps/api/geocode/json';


// // fetch(requestUrl)
// //     .then(function (response){
// //         return response.json();
// //     })
// //     .then(function (data){
// //         console.log(data)

// //     })
// // }    
// // function initMap() {
// //     var options = {
// //         zoom:9,
// //         center: {lat:30.2672,lng:-97.7431}
// //     }

// //    var map = new google.maps.Map(document.getElementById('map'), options);
// // }    

//  // params:{
//     //     address:destination,
//     //     key:'AIzaSyAML37UWImB_IHbWXqjq5kquRAGr6HWqgc'



