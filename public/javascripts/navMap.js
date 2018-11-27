

document.addEventListener(
  'DOMContentLoaded',
  () => {
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
    });
    geolocalize().then((center) => {
      map.setCenter(center);
    });

    const printInfoMarkers = () => {
      info.forEach((item) => {
        marker = new google.maps.Marker({
          position: {
            lat: item.location.coordinates[0],
            lng: item.location.coordinates[1],
          },
          map,
        });
      });
    };

    printInfoMarkers();
  },
  false,
);
