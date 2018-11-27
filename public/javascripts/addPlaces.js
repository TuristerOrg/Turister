document.addEventListener(
  'DOMContentLoaded',
  () => {
<<<<<<< HEAD
    const mapAddPlaces = new google.maps.Map(document.getElementById('mapAddPlaces'), {
      zoom: 18,
    });

    geolocalize().then((center) => {
      mapAddPlaces.setCenter(center);
    });

=======

  
    let mapAddPlaces = new google.maps.Map(document.getElementById('mapAddPlaces'), {
      zoom: 18,
    });

>>>>>>> e5c39dd7b70cdc5afec5e9602266575e43f2f3fd
    const setPosOnForm = (latlng) => {
      document.getElementById('lat-pos').value = latlng.lat;
      document.getElementById('lng-pos').value = latlng.lng;
    };

    let marker;

    mapAddPlaces.addListener('click', (e) => {
      const clickPos = {
        lat:e.latLng.lat(),
        lng:e.latLng.lng(),
      };
      console.log(clickPos);
      marker.setPosition(clickPos);
      setPosOnForm(clickPos);
    });
<<<<<<< HEAD

    geolocalize().then((center) => {
=======
  
    geolocalize()
    .then(center => {
>>>>>>> e5c39dd7b70cdc5afec5e9602266575e43f2f3fd
      mapAddPlaces.setCenter(center);
      setPosOnForm(center);
    });
  },
  false,
);
