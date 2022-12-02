function initMap() {

    var map = new google.maps.Map(document.getElementById('ieatmaps'), {
      center: {lat: 42.983612, lng: -81.249725},
      zoom: 12
    });

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(42.983612, -81.249725)
        , title: 'ASL'
        , map : map

    });
  }
