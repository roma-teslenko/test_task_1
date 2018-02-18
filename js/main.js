function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: {lat: 50.431782, lng: 30.516382}
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
}

function slowScroll (id) {
  var offset = 80;
  $('html, body').animate ({
    scrollTop: $(id).offset ().top - offset
  }, 500);
  return false;
}
