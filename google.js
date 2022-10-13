var searchBar = document.getElementById('location')
var submitBtn = document.getElementById('fetch-button')
var map;


function geocode() {
    var location = searchBar.value;
    axios('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
            address: location,
            key: 'AIzaSyAML37UWImB_IHbWXqjq5kquRAGr6HWqgc'
        }
    })
        .then(function (response) {
            console.log(response);
            var lat = response.data.results[0].geometry.location.lat;
            var lng = response.data.results[0].geometry.location.lng;
            map.setCenter({ lat: lat, lng: lng })
            return lat, lng
        })
}
submitBtn.addEventListener('click', geocode);


function initMap() {
    var options = {
        zoom: 9,
        center: { lat: 30.2672, lng: -97.7431 }
    }
    map = new google.maps.Map(document.getElementById('map'), options);
}

