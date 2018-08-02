
var Helper = {
    map:null,
    coordinates:[],
    getDistance: function (origin, destination, miles) {
        
        var R = 6371; // Radius of the earth in km
        var dLat = Helper.degrees2radians(destination.lat - origin.lat); 
        var dLng = Helper.degrees2radians(destination.lng - origin.lng); 
        var a = 
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(Helper.degrees2radians(origin.lat)) * Math.cos(Helper.degrees2radians(destination.lat)) * 
            Math.sin(dLng/2) * Math.sin(dLng/2)
        ; 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var distance = R * c; // Distance in km
        
        
        var result = (miles) ? distance * 0.621371192 : distance; // convert km to miles
        
        return result;
    },
    
    degrees2radians: function (deg) {
      return deg * (Math.PI / 180);
    },
    initMap:function(){
        Helper.map = Apperyio("gmap1").gmap;
        if (!Helper.map){
            Helper.setInitDelay();
        } else {
            $(".Tracking2Page_gmap1").height(Apperyio("mobilecontainer").height() - 35);
        	geolocation2.execute();
            Helper.drowDirections();
        }
    },
    setInitDelay: function()	{
		setTimeout(Helper.initMap, 50);
	},
    drowDirections:function(){
        var path = new google.maps.Polyline({
            path: Helper.coordinates,
            geodesic: true,
            strokeColor: '#0000FF',
            strokeOpacity: 1.0,
            strokeWeight: 2
        });
        
        path.setMap(Helper.map);
      
    }
};