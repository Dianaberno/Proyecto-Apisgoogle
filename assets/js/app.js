function initMap() {
    var laboratoriaLima = { lat: -12.1191427, lng: -77.0349046 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: laboratoriaLima
    });
    var marker = new google.maps.Marker({
        position: laboratoriaLima,
        map: map
    });
}
var directionsService = new google.maps.DirectionsService;
var directionDisplay = new google.maps.DirectionsRenderer;
var calculateAndDisplayRoute = function(directionsService, directionDisplay) {
    directionsService.route({
        origin: inputPartida.value,
        destination: inputDestino.value,
        travelMode: 'DRIVING'
    }, function(reponse, status) {
        if (status === 'OK') {
            directionDisplay.setDirections(response);
        } else {
            window.alert("No encontramos una ruta.");
        }
    })
}
directionDisplay.setMap(map);
var trazarRuta = function() {
    calculateAndDisplayRoute(directionsService, directionsDisplay);
};
document.getElementById("trazar-ruta").addEventListener("click", trazarRuta);