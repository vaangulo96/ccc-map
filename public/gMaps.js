let map;
function initMap(){
	const HQ = {
		lat:45.52314,
		lng:-122.64674
	};

	const map = new google.maps.Map(
		document.getElementById('map'),{
			zoom: 4,
			center: HQ
		});
	//const marker = new AdvancedMarkerElement({
	//	position: HQ,
	//	map: map	
//	});
};
