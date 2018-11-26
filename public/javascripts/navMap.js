document.addEventListener(
  "DOMContentLoaded",
  () => {

    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
    });

    geolocalize().then(center => {
      map.setCenter(center);
    });

  },
  false
);
