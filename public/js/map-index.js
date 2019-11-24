function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(51.508742, -0.120850),
        zoom: 9,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
function getLocation (){
    var locateMe = document.getElementById('demo')
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(location => {
            console.log(location)
        }, () => 'Cannot Retrive Location')
    }
}