


var mapOptions = {

gestureHandling: 'greedy'

};


//var mapx;

 
function initializex() {
    
    
    
    
    
    var markers=[];
    
    
    //console.log('Initializing...');
    
   // var infowindow = new google.maps.InfoWindow();
    
    

    
   var  mapx = Apperyio("gmap1").gmap;
    
  //  var mapx = new google.maps.Map(Appery("gmap1").get(0), mapOptions);
//var currentLat = localStorage.getItem("currentLat");
//var currentLng = localStorage.getItem("currentLng");

    // setInterval (function() {


    
       var markerLatLng = new google.maps.LatLng(localStorage.getItem("glat"), localStorage.getItem("glong"));
    
   // var lable = localStorage.getItem("tuname");
        var onetime = localStorage.getItem("onetime");
    
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
  //  icon: 'http://tracker.tujarcom.com/Blue.png'
         icon: 'http://tracker.tujarcom.com/TrackingDot.png' 
    
  //  http://tracker.tujarcom.com/bluedot.png
});


  markers.push(marker);
 
 //var zz = 1; 
        
        
        
        
        
        
        
        

        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
          var heading = localStorage.getItem("gheading");
        
        
    
  //   setInterval (function() {
if (onetime == 1 || onetime == 2 || onetime == 3 )
{

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
    
    
    
    
    

  
    
    
    
          var speed_map = localStorage.getItem("gspeed");
var speederror = 6;
            speed_map = speed_map * 3.6;
                speed_map = speed_map +speederror ;


            if (speed_map > 8)

            {

                if (speed_map < 121)

                {

                    Apperyio('currentspeed_64').text(speed_map.toFixed(0));
                    //   Apperyio('exceedlimitlable').text("لا");

                    
                    var calspeed = speed_map.toFixed(0);
                    
                     localStorage.setItem("calspeed", calspeed);
                    
                    
                } else

                {

                    Apperyio('currentspeed_64').text(speed_map.toFixed(0));
                //    Apperyio('exceedlimitlable').text("نعم");
                    
                                        var calspeed = speed_map.toFixed(0);

                    
                     localStorage.setItem("calspeed", calspeed);
                    
                    

                }

                //   var mobvar =   Apperyio.storage.mob.get();

                //    localStorage.setItem("calspeed", speed_map); 

            } else

            {
                var zer = 0;

                // localStorage.setItem("calspeed", zer); 

                Apperyio('currentspeed_64').text(zer);
                //        Apperyio('exceedlimitlable').text("لا");
                
                
                                    var calspeed = zer;

                
                
                 localStorage.setItem("calspeed", calspeed);

            }; 
    
    
    
    
    
    
    
    
    
    
    
    
    
    geocode1.execute({});
    
    
    
    
    

    
    
    
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

    
    
    
    
    
    
    
    
    
    
    
    
    
        upload.execute({});


    

        
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
 