function initMap() {
  var mapOptions = { 
    zoom: 2,
    center: {lat: 40, lng: 20},
    minZoom: 2,
    maxZoom: 6,
    streetViewControl: false,
    mapTypeControl: false,
    zoomControl: true,
    mapTypeId: 'terrain'
	};
  

  //make map with specified mapOptions
	var map = new google.maps.Map(document.getElementById('map'), mapOptions);


	//designate panning and zooming bounds
	var allowedBounds = new google.maps.LatLngBounds(
    	new google.maps.LatLng(-20.0,-180.0), //southwest corner
    	new google.maps.LatLng(40.0,180.0)   //northeast corner
	);

	var lastValidCenter = map.getCenter();

	google.maps.event.addListener(map, 'center_changed', function() {
    	if (allowedBounds.contains(map.getCenter())) {
        // still within valid bounds, save the last valid position
        	lastValidCenter = map.getCenter();
        	return; 
    	}

    	// not valid anymore, return to last valid position
   		map.panTo(lastValidCenter);
	});

  



    const dumplingNames = ["Samosa","Jiaozi","Mandu","Dango",
                          "Pierogi","Manti", "Momo", "Empanada", 
                          "Xiaolongbao", "Ravioli", "Gnocchi", "Tangyuan",
                          "Crab Ragoon", "Pelmeni", "Apple Dumpling", "Modak"];

    const dumplingImg = ["samosa","jiaozi","mandu","dango",
                          "pierogi","manti", "momo", "empanada", 
                          "xiaolongbao", "ravioli", "gnocchi", "tangyuan",
                          "crab", "pelmeni", "apple", "modak"];

    const dumplingRegion = ["East Africa",
                            "China",
                            "Korea",
                            "Japan",
                            "Central, Eastern Europe",
                            "Turkey",
                            "Nepal",
                            "Argentina",
                            "China",
                            "Italy",
                            "Italy",
                            "China",
                            "United States",
                            "Russia",
                            "United States",
                            "India"];

    const dumplingCoords = [
          {
            position: new google.maps.LatLng(10.25, 30.3935)
          }, {
            position: new google.maps.LatLng(-29.1728, 24.6644)
          }, {
            position: new google.maps.LatLng(36.8772, 128.0048)
          }, {
            position: new google.maps.LatLng(37.1231, 139.7066)
          }, {
            position: new google.maps.LatLng(51.1209, 23.8672)
          }, {
            position: new google.maps.LatLng(39.4106, 34.9761)
          }, {
            position: new google.maps.LatLng(27.8224, 85.1764)
          }, {
            position: new google.maps.LatLng(-31.8152, -60.9506)
          }, {
            position: new google.maps.LatLng(31.5306, 121.0198)
          }, {
            position: new google.maps.LatLng(45.0231, 10.1707)
          }, {
            position: new google.maps.LatLng(41.1569, 15.1864)
          }, {
            position: new google.maps.LatLng(31.3649, 113.8263)
          }, {
            position: new google.maps.LatLng(37.7638, -122.4867)
          }, {
            position: new google.maps.LatLng(54.8843, 43.1726)
          }, {
            position: new google.maps.LatLng(40.0266, -76.4099)
          }, {
            position: new google.maps.LatLng(10.4459, 78.2071)
          }
        ];




    const infoWindows = [];
    const markers = [];

    for (let i = 0; i < dumplingNames.length; i++) {
      const contentString = 
                    '<div id="window-content">'+
                      '<div id="window-top">' +
                        '<img id="map-img" src=assets/img/gallery_' + dumplingImg[i] + '.jpg>' + 
                      '</div>'+
                      '<div id="window-bottom">' +
                        '<h1 id="firstHeading">'+dumplingNames[i]+'</h1>'+
                          '<p>' + dumplingRegion[i] + '</p>'+
                      '</div>' +
                    '</div>'; 
      infoWindows[i] = new google.maps.InfoWindow({
        content: contentString,
        minWidth: 150,
        maxWidth: 150
      }) 

      markers[i] = new google.maps.Marker({
        position: dumplingCoords[i].position,
        icon:  { 
          url: 'assets/img/dumpling.png',
            scaledSize : new google.maps.Size(30, 30) 
          },
        map: map
      });
    }




    var infoWindowEnabled = [true, true, true, true, true, true, true, true,
                              true, true, true, true, true, true, true, true]


    //open and close the content window at each marker
    for (let i = 0; i < dumplingNames.length; i++) {
      markers[i].addListener('click', function() {
        if (infoWindowEnabled[i]) {
          infoWindows[i].close(map, markers[i]);
          infoWindowEnabled[i] = false;
        }

        else {
          for (let i = 0; i < dumplingNames.length; i++) {
            infoWindows[i].close(map, markers[i]);
            infoWindowEnabled[i] = false;
          }
          infoWindows[i].open(map, markers[i]);
          infoWindowEnabled[i] = true;
        } 
      });
    };
  


    //resize the marker icon if the zoom level changes
    google.maps.event.addListener(map, 'zoom_changed', function() {
        var currentZoom = map.getZoom();
        const sizeDim = 15*currentZoom;
        for (let i = 0; i < dumplingNames.length; i++) {
          markers[i].icon.scaledSize = new google.maps.Size(sizeDim, sizeDim);
          markers[i].icon.size =  new google.maps.Size(sizeDim, sizeDim);
        }
    });



    //for getting map coordinates when you click somewhere on the map
    // google.maps.event.addListener(map, 'click', function (event) {
    //           displayCoordinates(event.latLng);               
    //       });

    // function displayCoordinates(pnt) {

    //       var lat = pnt.lat();
    //       lat = lat.toFixed(4);
    //       var lng = pnt.lng();
    //       lng = lng.toFixed(4);
    //       console.log("new google.maps.LatLng(" + lat + ", " + lng + ")");
    //   }

}
