/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */


document.addEventListener(
  'DOMContentLoaded',
  () => {
    let pos;
    let map; let
      infoWindow;
    function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
      });

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            marker = new google.maps.Marker({
              map,
              draggable: true,
              animation: google.maps.Animation.DROP,
              position: pos,
              icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 10,
              },
            });
            map.setCenter(pos);
          },
          () => {
            handleLocationError(true, infoWindow, map.getCenter());
          },
        );
      } else {
        handleLocationError(false, infoWindow, map.getCenter());
      }

      const printInfoMarkers = () => {
        info.forEach((item) => {
          console.log(item);

          var infowindow = new google.maps.InfoWindow();

          marker = new google.maps.Marker({
            position: {
              lat: item.location.coordinates[0],
              lng: item.location.coordinates[1],
            },
            map: map,
            title: item.name
          });

          google.maps.event.addListener(marker,'click', (function(marker) {
            return function(){
              infowindow.setContent(
              `<div>
                <h2>${item.name}</h2>
                <div>
                  <p>${item.description}</p>
                  <a id="visitarweb" href="${item.web}">Visitar web</a>
                </div>
              </div>`);

              // infoWindow.setOptions({maxWidt: 200})
              // pixelOffset: new google.maps.Size(0, 60)
              infowindow.open(map, marker);
            }
          })(marker));

        });
      };

      printInfoMarkers();
    }


    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      infoWindow.setPosition(pos);
      infoWindow.setContent(
        browserHasGeolocation
          ? 'Error: The Geolocation service failed.'
          : "Error: Your browser doesn't support geolocation.",
      );
      infoWindow.open(map);
    }

    initMap();
  },
  false,
);
