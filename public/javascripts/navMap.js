

document.addEventListener(
  'DOMContentLoaded',
  () => {
<<<<<<< HEAD
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
=======
    let pos;
    var map, infoWindow;
    function initMap() {
      map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16
      });

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            marker = new google.maps.Marker({
              map: map,
              draggable: true,
              animation: google.maps.Animation.DROP,
              position: pos,
              icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 10
              }
            });
            map.setCenter(pos);
          },
          function() {
            handleLocationError(true, infoWindow, map.getCenter());
          }
        );
      } else {
        handleLocationError(false, infoWindow, map.getCenter());
      }

      const printInfoMarkers = () => {
        info.forEach(item => {
          console.log(item);
          marker = new google.maps.Marker({
            position: {
              lat: item.location.coordinates[0],
              lng: item.location.coordinates[1]
            },
            map
          });
        });
      };

      printInfoMarkers();

    }


    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      infoWindow.setPosition(pos);
      infoWindow.setContent(
        browserHasGeolocation
          ? "Error: The Geolocation service failed."
          : "Error: Your browser doesn't support geolocation."
      );
      infoWindow.open(map);
    }

    initMap();
>>>>>>> e5c39dd7b70cdc5afec5e9602266575e43f2f3fd
  },
  false,
);
