function initMap() {
  var coordinates = new google.maps.LatLng(59.936284, 30.321462);
  var image = "../img/icon-map-marker.svg";
  var text = 'Большая Конюшенная д.19/8';
  var myMap = {
    center: coordinates,
    zoom: 16,
    disableDefaultUI: true
  };

  var map = new google.maps.Map(document.querySelector('.map__image'), myMap);

  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(59.936000, 30.321462),
    map: map,
    icon: image,
    animation: google.maps.Animation.DROP,
    title: text
  });
}
