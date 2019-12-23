function initMap() {
    const loc = { lat: 42.6977,  lng: 23.3219 };
    const map = new google.maps.Map(document.querySelector('.map')
    , {
        zoom: 14,
        center: loc
    });

    const marker = new google.maps.Marker({ position: loc, map: map });
}