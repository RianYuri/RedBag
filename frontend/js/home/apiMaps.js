function initMap() {
  const notGeolocation = document.querySelector(".not-geolocation");
  const cityState = document.querySelector(".city-state");
const especialistaIndentifier = document.querySelector(".especialistaIndentifier")
  if (navigator.geolocation) {
    notGeolocation.style.display = "none";
    especialistaIndentifier.style.display ="flex";
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ location: userLocation }, function (results, status) {
          if (status === google.maps.GeocoderStatus.OK) {
            const city = getAddressComponent(results, "locality");
            const state = getAddressComponent(results, "administrative_area_level_1");
            cityState.textContent = city + " - " + state;

            const map = new google.maps.Map(document.getElementById("map"), {
              center: userLocation,
              zoom: 13
            });

            const userMarker = new google.maps.Marker({
              position: userLocation,
              map: map,
              icon: {
                url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png"
              },
              title: "Eu"
            });

            const infowindow = new google.maps.InfoWindow({
              content: 'Você está aqui'
            });

            userMarker.addListener("click", function () {
              infowindow.open(map, userMarker);
            });

            const request = {
              location: userLocation,
              radius: "15000",
              type: "veterinary_care",
              keyword: "veterinário"
            };

            const service = new google.maps.places.PlacesService(map);
            service.textSearch(request, function (results, status) {
              if (status === google.maps.places.PlacesServiceStatus.OK) {
                const bounds = new google.maps.LatLngBounds();
                results.forEach(function (result) {
                  createMarker(result, map, bounds);
                });
                map.setZoom(13);
              }
            });
          }
        });
      },
      function (error) {
        console.log("Erro ao obter a localização do usuário: " + error.message);
        notGeolocation.style.display = "flex";
        especialistaIndentifier.style.display = "none";
        
      }
    );
  } else {
    notGeolocation.style.display = "flex";
    especialistaIndentifier.style.display = "none";

    console.log("Geolocalização não é suportada pelo seu navegador.");
  }
}

function createMarker(place, map, bounds) {
  const marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location,
    title: place.name
  });

  const infowindow = new google.maps.InfoWindow({
    content:
      `<div ><strong>${place.name}</strong><br>` +
      `Endereço: ${place.formatted_address}<br>` +
      `<a href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(place.formatted_address)}" target="_blank">Obter direções</a></div>`
  });

  marker.addListener("click", function () {
    infowindow.open(map, marker);
    map.setCenter(marker.getPosition());
    map.setZoom(18);
  });

  bounds.extend(place.geometry.location);
}

function getAddressComponent(results, type) {
  for (let i = 0; i < results.length; i++) {
    for (let j = 0; j < results[i].address_components.length; j++) {
      const component = results[i].address_components[j];
      if (component.types.includes(type)) {
        return component.long_name;
      }
    }
  }
  return null;
}

window.initMap = initMap;
