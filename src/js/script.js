"use strict";
//---------------------------------- Initialize and add the map ---------------------------------------
function initMap() {
    // The location of Poltava Sobornosti 44
    var axiomaProject = {lat: 49.5918184, lng: 34.5467874};

    // The map, centered at Axioma Projects
    var map = new google.maps.Map(
        document.getElementById('js-maps'), {
            zoom: 16,
            center: axiomaProject,
            disableDefaultUI: true,
            mapTypeId: 'roadmap'
        });

    // The marker, positioned at Axioma
    var marker = new google.maps.Marker({
        position: axiomaProject,
        map: map,
        // icon: myIcon,
    });

    map.setMapTypeId('terrain');
}
