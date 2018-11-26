document.addEventListener(
  "DOMContentLoaded",
  () => {

  
    const mapAddPlaces = new google.maps.Map(document.getElementById('mapAddPlaces'), {
      zoom: 18,
    });

    geolocalize().then(center => {
      mapAddPlaces.setCenter(center);
    });

    const setPosOnForm = (latlng) => {
      document.getElementById('lat-pos').value = latlng.lat;
      document.getElementById('lng-pos').value = latlng.lng;
    }
  
    let marker;
  
    mapAddPlaces.addListener('click', function(e) {
      const clickPos = {
        lat:e.latLng.lat(),
        lng:e.latLng.lng()
      }
      console.log(clickPos);
      marker.setPosition(clickPos);
      setPosOnForm(clickPos)
    });
  
    geolocalize().then(center => {
      mapAddPlaces.setCenter(center);
      marker = new google.maps.Marker({
        position: center,
        map: mapAddPlaces
      });
      setPosOnForm(center);
    });
  
  },
  false
);
