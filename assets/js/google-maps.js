function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 23.8041, lng: 90.4152};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Dhaka, Bd' // Title Location
    });
}