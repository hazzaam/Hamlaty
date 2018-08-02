

var mapOptions = {

gestureHandling: 'greedy'

};


//var mapx;

 
function initializex_hajj() {
    
    
    

    var markers=[];
    
    
    //console.log('Initializing...');
    
   // var infowindow = new google.maps.InfoWindow();
    
    

    
   var  mapx = Apperyio("gmapTrack").gmap;
    
  //  var mapx = new google.maps.Map(Appery("gmap1").get(0), mapOptions);
//var currentLat = localStorage.getItem("currentLat");
//var currentLng = localStorage.getItem("currentLng");

    // setInterval (function() {


    
       var markerLatLng = new google.maps.LatLng(localStorage.getItem("glat"), localStorage.getItem("glong"));
    
   // var lable = localStorage.getItem("tuname");
        var onetime = localStorage.getItem("onetimex");
    
    var langg= 'ar';
    
    
    
       

    
    localStorage.setItem("langg", langg);
    
var markerLatLngx = localStorage.getItem("glat")+', '+localStorage.getItem("glong");
    
    localStorage.setItem("markerLatLngx", markerLatLngx);
    
      //  var markerLatLngx = new google.maps.LatLng(24.633263,46.716670);

    
  //      },
// 2000);
    
    
    
    
    
    
    
    
    
    
    
    
    
        
    function reloadMarkers() {
 
    // Loop through markers and set map to null for each
    for (var ss=0; ss<markers.length; ss++) {
     
        markers[ss].setMap(null);
    }
    
    // Reset the markers array
    markers = [];
    
    // Call set markers to re-add markers
}
    
    
    
    
    var latlat = localStorage.getItem("glat");
    if (latlat != null  || latlat != '' || latlat != 0 || latlat != undefined )
        
    {


   // var markerLatLng = new google.maps.LatLng(Apperyio.storage.currentLat.get(), Apperyio.storage.currentLng.get());
 
var marker = new google.maps.Marker({
    position: markerLatLng,

 // labelContent: lable,



    map: mapx,
      animation: google.maps.Animation.DROP,
  //  icon: 'http://tracker.tujarcom.com/Blue.png'
         icon: 'http://tracker.tujarcom.com/TrackingDot.png' 
    
  //  http://tracker.tujarcom.com/bluedot.png
});


  markers.push(marker);
 
 //var zz = 1; 
        
        
        
        
        
        
        
        

        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
          var heading = localStorage.getItem("gheading");
        
        
    
  //   setInterval (function() {
//if (onetime == 1 || onetime == 2 || onetime == 3 )

if ( onetime == 2  )
{
    
   // alert('f');

mapx.setCenter(markerLatLng);
    mapx.setZoom(14);
    
    
    mapx.setHeading(heading);

    
    onetime--;
    
    
    localStorage.setItem("onetime", onetime); 
    
    
}
    
    
    
    } 
   //     },
    
    
    

 //1000);
    
    
    
//     var tuname  = localStorage.getItem("tuname");
    
  //    infowindow.close();
      //  infowindow.setContent(tuname);
    //    infowindow.open(mapx,marker);
    
    
    
    
    

  
    

    
    
    
    
    
    
    
    
    
    
  //  geocode1.execute({});
    
    
    
    
    

    
    
    
    var currentdate = new Date();
var dd = currentdate.getDate();
var mm = currentdate.getMonth()+1; //January is 0!
var yyyy = currentdate.getFullYear();

if(dd<10) {
    dd='0'+dd;
} 

if(mm<10) {
    mm='0'+mm;
} 

currentdate  = yyyy+'-'+mm+'-'+dd;
    
        
    
 localStorage.setItem("currentdate", currentdate);

    
    
    
    d = new Date();

currenttime = d.toLocaleTimeString(); 
    
    
    
     localStorage.setItem("currenttime", currenttime);

    
    
    
    
    
    
    
    
    
    
    
    
    
   //     upload.execute({});


    

        
    setTimeout(function() {
         
       
 //    for (var ss=0; ss<ii.length; ss++) {
     
    //    marker3[ss].setMap(null);
  //  }
    
    
    
    
   //    marker3=[];
    
         
//reloadMarkers();
        reloadMarkers();
    
   // list_tracking_de3.execute({});
      //    hideSpinner();
        
        

                    }, 10000);
                    
                    
                    
    
    
    
    
}
 