function initMap() {

    const coords={ lat: 10.405942847837725,  lng: -84.36858545816835 };
    const coords2={ lat: 10.405942847837725,  lng: -84.36858545816835 };

    const map = new google.maps.Map(document.getElementById("mapid"), {
      center: coords,
      zoom: 14,
    });


     marker = new google.maps.Marker({
       
        position: coords,
        map,
        title: "KrisSan",
      });

      var objeDR={
        map
      }

      var OjeDS={
        origin: coords2,
        destination: coords,
        travelMode: google.maps.TravelMode.DRIVING
      }

      var ds =new google.maps.DirectionService();

      var dr =new google.maps.DirectionRenderer(objeDR);

      ds.route(OjeDS, fnRoutear)


  
  }