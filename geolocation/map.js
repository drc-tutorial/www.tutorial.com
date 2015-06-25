window.onload = function(){

	navigator.geolocation.getCurrentPosition(function(geoPosition){

		addMap(geoPosition.coords.latitude, geoPosition.coords.longitude);

	});

	function addMap(latitude, longitude){
		var latLng = new google.maps.LatLng(latitude,longitude);

		var map = new google.maps.Map(document.querySelector('.container'), {
			zoom: 16,
			center: latLng
		});

		var marker = new google.maps.Marker({
			position: latLng,
			map: map,
			title: 'Here !!!'
		});
	}


};