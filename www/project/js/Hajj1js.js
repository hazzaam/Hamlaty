


var map;

var boundsx = new google.maps.LatLngBounds();
    var markersx= [];

 
function hajjmap1() {
    
    
    
    
        
    var mapOptions = {
        
    gestureHandling: 'greedy'
        
    };
    
    map = new google.maps.Map(Appery("googlemap_add").get(0), mapOptions);





  //  console.log('Initializing...');
    
 //var markers= [0]='';
 //   map = Apperyio("gmap_h1").gmap;
 
 
   if (!map) {
        setDelay();
    } 
    
    else {
        
  
//    alert(markers.length);

        
       if (markersx.length != 0)
{
    
        
for (var ss=0; ss<markersx.length; ss++) {
     
        markersx[ss].setMap(null);
  }

        
}     


/*
var markerLatLng = new google.maps.LatLng(localStorage.getItem('rs_lat'), localStorage.getItem('rs_long'));
        
        var language= 'ar';
                localStorage.setItem("language", language);

var m_latx=localStorage.getItem('rs_lat');

if (!m_latx)

{
    
    
   var lat_co= 24.730805;
   
   var lng_co= 46.719532 ;
   
   var markerLatLng = new google.maps.LatLng(lat_co, lng_co);
   
    
}

*/



  var glat= 21.422466;
   
   var glong= 39.826162 ;
   
     localStorage.setItem("glat", glat);
        localStorage.setItem("glong", glong);
   
   var markerLatLngx = new google.maps.LatLng(glat, glong);
      var language= 'ar';
                localStorage.setItem("language", language);
   
   
   
var marker = new google.maps.Marker({
    position: markerLatLngx,
    map: map,
    animation: google.maps.Animation.DROP,
      draggable:true,
    //title:"Drag me!"
});
 

        
          markersx.push(marker);
    
    
            
boundsx.extend(markerLatLngx);
map.fitBounds(boundsx);
        
        
    /*    if (!m_latx)

{
      map.setZoom(7);
}

else
{
        map.setZoom(7);
}     
*/
 map.setZoom(10);
        map.setCenter(markerLatLngx);
        
       // alert(marker_latlng);
       //  alert(language);
    




    
    
         //   alert(markers.length);

        
        
        var lat = marker.getPosition().lat();
var lng = marker.getPosition().lng();
        
       // alert(lat);
              //  alert(lng);

        localStorage.setItem("glat", lat);
        localStorage.setItem("glong", lng);
        var marker_latlng= lat+', '+lng ;
         //   localStorage.setItem("marker_latlng", marker_latlng);

        

        
            
google.maps.event.addListener(marker, 'dragend', function(evt){
    
        localStorage.setItem("glat", evt.latLng.lat());
        localStorage.setItem("glong", evt.latLng.lng());
    
      var marker_latlng= evt.latLng.lat()+', '+evt.latLng.lng() ;
        //    localStorage.setItem("marker_latlng", marker_latlng);
});
        
        
        
        
        
        
        
                  google.maps.event.addListener(map, 'click', function(event) {
           
            
            
          
            
            
             placeMarker(event.latLng);
             
             
             
                              localStorage.setItem("glat", event.latLng.lat());
        localStorage.setItem("glong", event.latLng.lng());
    
      var marker_latlng= event.latLng.lat()+', '+event.latLng.lng() ;
          //  localStorage.setItem("marker_latlng", marker_latlng);
            
            
            
            
            
            
        });
        
        
        
        
        
                function placeMarker(location) {



            if (marker == undefined){
                marker = new google.maps.Marker({
                    position: location,
                    map: map, 
                    animation: google.maps.Animation.DROP,
                });
            }
            else{
                marker.setPosition(location);
            }
         //   map.setCenter(location);
         
         
 

        }
        
        
        
          
  
        
    
    
    
    
        

    }
    
    
  
    
    
    
    
    
    
    
    
    
    
    
}
 

 
function setDelay() {
    setTimeout(rsmap, 50);
}

