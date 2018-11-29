/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */

document.addEventListener(
  'DOMContentLoaded',
  () => {
    const radius = 80;
    let pos;
    let map;
    let infoWindow;

    const customeIcons = {
      monumento: {
        icon: '../images/column.png',
      },
      iglesia: {
        icon: '../images/church.png',
      },
      informacion: {
        icon: '../images/information-symbol.png',
      },
      museo: {
        icon: '../images/library.png',
      },
    };

    function initMap() {
      const directionsDisplay = new google.maps.DirectionsRenderer();
      const directionsService = new google.maps.DirectionsService();

      map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        styles: [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ebe3cd"
              }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#523735"
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#f5f1e6"
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#c9b2a6"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#dcd2be"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#ae9e90"
              }
            ]
          },
          {
            "featureType": "landscape.natural",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dfd2ae"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dfd2ae"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#93817c"
              }
            ]
          },
          {
            "featureType": "poi.business",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#a5b076"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#447530"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f5f1e6"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#fdfcf8"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f8c967"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#e9bc62"
              }
            ]
          },
          {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e98d58"
              }
            ]
          },
          {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#db8555"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#806b63"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dfd2ae"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#8f7d77"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#ebe3cd"
              }
            ]
          },
          {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dfd2ae"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#b9d3c2"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#92998d"
              }
            ]
          }
        ]
      });

      directionsDisplay.setMap(map);

      function btn() { document.getElementById('routesBtn').onclick = () => calculateAndDisplayRoute(directionsService, directionsDisplay); }
      btn();

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
                scale: 5,
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
                icon: customeIcons[item.type].icon,
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
                  `<div id="infowindow">
                     <h2>${item.name}</h2>
                     <div>
                        <p>${item.description}</p>
                        <a id="visitarweb" href="${item.web}" target='_blank'>Visitar web</a><br><br>
                        <audio controls>
                         <source src="${item.audio}" type="audio/mpeg">
                        </audio>"
                       </div>
                  </div>`
                );

                // infoWindow.setOptions({maxWidt: 200})
                // pixelOffset: new google.maps.Size(0, 60)
                infowindow.open(map, marker);
              }
              google.maps.event.addListener(marker, 'click', (function (marker) {
                return function () {
                  infowindow.setContent(
                    `<div id="infowindow">
                    <h2>${item.name}</h2>
                    <div>
                       <p>${item.description}</p>
                       <a id="visitarweb" href="${item.web}" target='_blank'>Visitar web</a><br><br>
                       <audio controls>
                        <source src="${item.audio}" type="audio/mpeg">
                       </audio>"
                      </div>
                 </div>`
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
