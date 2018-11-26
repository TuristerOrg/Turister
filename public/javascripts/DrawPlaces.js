function DrawPlaces() {
  console.log('here');
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
  });
  document.info.value;
  const marker = new google.maps.Marker({
    position: { lat:  40.4167, lng: -3.70325 },
    map,
  });
  return marker;
}

Place.find().then((place) => {
  for (let i = 0; i < place.length; i++) {
    console.log(place[i].location);
    DrawPlaces();
  }
});
