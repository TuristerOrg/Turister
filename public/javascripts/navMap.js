/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */

document.addEventListener(
  'DOMContentLoaded',
  () => {
    const radius = 80;
    let pos;
    let map;
    let infoWindow;
    function initMap() {
      const directionsDisplay = new google.maps.DirectionsRenderer();
      const directionsService = new google.maps.DirectionsService();

      map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
      });
      directionsDisplay.setMap(map);

      calculateAndDisplayRoute(directionsService, directionsDisplay);


      function calculateAndDisplayRoute(directionsService, directionsDisplay) {
        directionsService.route(
          {
            origin: { lat: 40.416887979993966, lng: -3.7022740027977377 }, // Haight.
            destination: { lat: 40.41866416622284, lng: -3.6975775550486154 }, // Ocean Beach.
            waypoints: [
              {
                location: new google.maps.LatLng(
                  40.415547923977506,
                  -3.713669638684312,
                ),
                stopover: true,
              },
              {
                location: new google.maps.LatLng(
                  40.42425096551599,
                  -3.716531855540272,
                ),
                stopover: true,
              },
              {
                location: new google.maps.LatLng(
                  40.41974735763767,
                  -3.7061346665078845,
                ),
                stopover: true,
              },
            ],
            travelMode: google.maps.TravelMode.WALKING,
          },
          (response, status) => {
            if (status == 'OK') {
              directionsDisplay.setDirections(response);
            } else {
              window.alert(`Directions request failed due to ${status}`);
            }
          },
        );
      }

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            const marker = new google.maps.Marker({
              map,
              draggable: true,
              animation: google.maps.Animation.DROP,
              position: pos,
              icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 8,
              },
            });
            const circle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map,
              center: pos,
              radius,
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
      navigator.geolocation.getCurrentPosition(
        (posi) => {
          const printInfoMarkers = () => {
            info.forEach((item) => {
              const infowindow = new google.maps.InfoWindow();

              marker = new google.maps.Marker({
                position: {
                  lat: item.location.coordinates[0],
                  lng: item.location.coordinates[1],
                },
                map,
                title: item.name,
              });
              const itemPos = new google.maps.LatLng(
                item.location.coordinates[0],
                item.location.coordinates[1],
              );

              const myPos = new google.maps.LatLng(posi.coords.latitude, posi.coords.longitude);
              console.log(item);
              if (google.maps.geometry.spherical.computeDistanceBetween(myPos, itemPos) <= radius) {
                infowindow.setContent(
                  `<div>
            <h2>${item.name}</h2>
            <div>
              <p>${item.description}</p>
              <a id="visitarweb" href="${item.web}" target='_blank'>Visitar web</a>
            </div>
          </div>`,
                );

                // infoWindow.setOptions({maxWidt: 200})
                // pixelOffset: new google.maps.Size(0, 60)
                infowindow.open(map, marker);
              }
              google.maps.event.addListener(marker, 'click', (function (marker) {
                return function () {
                  infowindow.setContent(
                    `<div>
                <h2>${item.name}</h2>
                <div>
                  <p>${item.description}</p>
                  <a id="visitarweb" href="${
                item.web
                }" target='_blank'>Visitar web</a>
                  <audio controls>
                    <source src="${item.audio}" type="audio/mpeg">
                  </audio>"
                </div>
              </div>`,
                  );

                  // infoWindow.setOptions({maxWidt: 200})
                  // pixelOffset: new google.maps.Size(0, 60)
                  infowindow.open(map, marker);
                };
              }(marker)));
            });
          };
          printInfoMarkers();
        },
      );
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
