function initMap() {
    const notGeolocation = document.querySelector(".not-geolocation");
    const cityState = document.querySelector(".city-state")
    if (navigator.geolocation) {
      notGeolocation.style.display = "none";
      navigator.geolocation.getCurrentPosition(
        function (position) {
          var userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
  
          // Use a API Geocoding para obter a cidade correspondente às coordenadas de geolocalização
          var geocoder = new google.maps.Geocoder();
          geocoder.geocode({ location: userLocation }, function (results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
              var city = getCityFromGeocodingResults(results);
  
              var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 13 // Defina o nível de zoom desejado para o usuário
              });
  
              // Adicione um marcador para a localização do usuário
              var userMarker = new google.maps.Marker({
                position: userLocation,
                map: map,
                icon: {
                  url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                },
                title: "Eu"
              });
  
              var infowindow = new google.maps.InfoWindow({
                content: 'Você está aqui'
              });
  
              userMarker.addListener("click", function () {
                infowindow.open(map, userMarker);
              });
  
              var request = {
                location: userLocation,
                radius: "15000",
                type: "veterinary_care",
                keyword: "veterinário",
                query: city // Use a cidade como parte da consulta para encontrar veterinários próximos à cidade do usuário
              };
  
              var service = new google.maps.places.PlacesService(map);
              service.textSearch(request, function (results, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                  var bounds = new google.maps.LatLngBounds();
                  for (var i = 0; i < results.length; i++) {
                    createMarker(results[i], map, bounds);
                  }
                  map.fitBounds(bounds);
                }
              });
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
      content:
        '<div><strong>' +
        place.name +
        '</strong><br>' +
        'Endereço: ' +
        place.formatted_address +
        '<br>' +
        '<a href="https://www.google.com/maps/dir/?api=1&destination=' +
        encodeURIComponent(place.formatted_address) +
        '" target="_blank">Obter direções</a></div>'
    });
  
    marker.addListener("click", function () {
      infowindow.open(map, marker);
    });
  
    bounds.extend(place.geometry.location);
  }
  
  function getCityFromGeocodingResults(results) {
    for (var i = 0; i < results.length; i++) {
      for (var j = 0; j < results[i].address_components.length; j++) {
        var component = results[i].address_components[j];
        if (component.types.includes("locality")) {
          return component.long_name;
        }
      }
    }
    return null;
  }
  
  window.initMap = initMap;