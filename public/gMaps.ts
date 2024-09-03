let map: google.maps.Map;

   async  function initMap():Promise<void>{
	const position = { lat: 45.523260, lng: -122.646910 };
	// Request needed libraries.
	// @ts-ignore
	const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;

	// @ts-ignore
	const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;              
	// The map, centered at CCC
	map = new Map(
	//@ts-ignore
	document.getElementById('map') as HTMLElement,
	{                                                            zoom: 4,                                                   center: position,                                          mapId: 'DEMO_MAP_ID',                                    }                                                        );                                                          // The marker, positioned at CCC
	const marker = new AdvancedMarkerElement({                   map: map,                                                  position: position,                                        title: 'CCC HQ'
	})
}

initMap();
