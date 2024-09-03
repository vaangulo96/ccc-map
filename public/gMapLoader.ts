import {Loader} from "@googlemaps/js-api-loader";

let map:google.maps.Map;

const loader = new Loader({
	apiKey:'AIzaSyA6jfCCfz0YN9AvS5-JEAA0BQr2_UKXITqk',
	version: 'weekly'
});

const mapOpt = {
	center:{
		lat:45.52314,
		lng:-122.64674
	},
	zoom: 4
};

loader
  .load()
  .then(async ()=>{
	  const {Map} = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
	  map = new Map(document.getElementById("map") as HTMLElement,mapOpt);

  })
  .catch((e)=>{
	  console.log(e)
  });
	
