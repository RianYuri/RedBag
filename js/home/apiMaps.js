const notGeolocation = document.querySelector(".not-geolocation")
function initMap() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
            notGeolocation.style.display = "none";
          var userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
  
          var map = new google.maps.Map(document.getElementById("map"), {
            center: userLocation,
            zoom: 16
          });
  
          var request = {
            location: userLocation,
            radius: "30000",
            type: "veterinary_care",
            keyword: "veterinário"
          };
  
          var service = new google.maps.places.PlacesService(map);
          service.nearbySearch(request, function (results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
              var bounds = new google.maps.LatLngBounds();
              for (var i = 0; i < results.length; i++) {
                createMarker(results[i], map, bounds);
              }
              map.fitBounds(bounds);
              map.setZoom(14);
            }
          });
        },
        function (error) {
          console.log("Erro ao obter a localização do usuário: " + error.message);
        notGeolocation.style.display = "flex";

        }
      );
    } else {
        notGeolocation.style.display = "flex";
        
      console.log("Geolocalização não é suportada pelo seu navegador.");
    }
  }
  
  function createMarker(place, map, bounds) {
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location,
      title: place.name
    });
  
    var infowindow = new google.maps.InfoWindow({
      content: '<div><strong>' + place.name + '</strong><br>' +
        'Endereço: ' + place.vicinity + '<br>' +
        '<a href="https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(place.vicinity) + '" target="_blank">Obter direções</a></div>'
    });
  
    marker.addListener("click", function () {
      infowindow.open(map, marker); 
      map.setCenter(marker.getPosition()); 
      map.setZoom(18); 
    });
  
    bounds.extend(place.geometry.location);
  }
  
  window.initMap = initMap;
  