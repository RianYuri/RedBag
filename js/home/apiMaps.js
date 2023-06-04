function initMap() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          var userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
  
          var map = new google.maps.Map(document.getElementById("map"), {
            center: userLocation,
            zoom: 20
          });
  
          var request = {
            location: userLocation,
            radius: "20000",
            type: "veterinary_care",
            keyword: "veterinário"
          };
  
          var service = new google.maps.places.PlacesService(map);
          service.nearbySearch(request, function (results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
              var bounds = new google.maps.LatLngBounds();
              for (var i = 0; i < results.length; i++) {
                createMarker(results[i], map);
                bounds.extend(results[i].geometry.location);
              }
              map.fitBounds(bounds);
              map.setZoom(15); 
            }
          });
        },
        function (error) {
          console.log("Erro ao obter a localização do usuário: " + error.message);
        }
      );
    } else {
      console.log("Geolocalização não é suportada pelo seu navegador.");
    }
  }
  
  function createMarker(place, map) {
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location,
      title: place.name
    });
  }
  
  window.initMap = initMap;