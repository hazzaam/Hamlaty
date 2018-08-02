




//================
//====

/*


function list_one_by_one3(){
    
    var markers=[];
    
    // reloadMarkers();
    
    
    //   $("[dsid='gmap3']").refresh();
    
    
    //  var mapz3;
    
    //    var  latz= 24.782141 ;
    //   var longtz= 46.682966 ;
    
    //  var markerLatLng33= new google.maps.LatLng(latz, longtz);
    
    //    mapz3.setCenter(markerLatLng33);
    
    
    //     mapz3.setZoom(4);
    
    
    var wholecode = [];
    
    var v11=localStorage.getItem('tdetails');
    
    var todos =[];
    
    todos=JSON.parse(v11);
    
    
    var ii =0;
    
    
    
    
    var  mapz3 = Apperyio('gmap3').gmap;
    
    var bounds = new google.maps.LatLngBounds();
    
    var marker3=[];
    
    
    var markerLatLng3 =[];
    
    
    
    
          function reloadMarkers() {
                
                // Loop through markers and set map to null for each
                for (var ss=0; ss<markers.length; ss++) {
                    
                    markers[ss].setMap(null);
                }
                
                // Reset the markers array
                markers = [];
                
                // Call set markers to re-add markers
            }
            
    
    
     
     
    
    for (var i in todos)
        //for (i = 0; i < 5; i++)
    {
        //alert (i);
        
        
        var todo = todos[i];
        var mobile_number=todo.mobile_number;
        var lat=todo.lat;
        var longt=todo.longt;
        var speeding=todo.speeding;
        var heading=todo.heading;
        var t24=todo.t24;
        var username=todo.username;
        var date_added=todo.date_added;
        var time_added=todo.time_added;
        var id=todo.id;
        var friend_Mobile=todo.friend_Mobile;
        var user_status=todo.user_status;
        var exceed120r = todo.exceed120r;
        // var marker = todo.marker;
        
        
        
        //var mapz3;
        
        
        if (!lat)
        {
            
            
        }
        
        else
        {
            
            
            
            
            var infowindow = new google.maps.InfoWindow({
                                                        content: 'Test',
                                                        disableAutoPan: true
                                                        });
            
            
            
            
            
            
            function reloadMarkers() {
                
                // Loop through markers and set map to null for each
                for (var ss=0; ss<markers.length; ss++) {
                    
                    markers[ss].setMap(null);
                }
                
                // Reset the markers array
                markers = [];
                
                // Call set markers to re-add markers
            }
            
            
            
            
            
            //  marker3[ii].setMap(null);
            
            
            //  localStorage.setItem("id", id);
            
            //var currentValue = Apperyio('mobileno2').text(mobile_number);
            
            //  Apperyio('latf').text(todo[0].lat);
            
            //  Apperyio('longf').text(todo[0].longt);
            
            //    Apperyio('status2_'+ii+'').text(user_status);
            
            //    Apperyio('currentadd_125_'+ii+'').text(heading);
            
            //     Apperyio('coory_137_'+ii+'').text(lat);
            
            // Apperyio('coorx_133_'+ii+'').text(longt);
            
            
            // 24.782141, 46.682966
            
            
            
            
            
            
            //var marker3=[];
            
            
            if ( lat != 0 )
            {
                
                markerLatLng3 = new google.maps.LatLng(lat, longt);
                //      bounds.extend(markerLatLng3[ii]);
                
                
                var getzoom = mapz3.getZoom() ;
                
                
                
                var getcenter = mapz3.getCenter();
                
                
                
                // var getcenter = mapz3.getCenter();
                
                //    var lat3 = position.coords.latitude;
                // var lng3 = position.coords.longitude;
                
                
                //  mapz3.setCenter(getcenter);
                
                //mapz3.setCenter(getcenter);
                
                marker3 = new google.maps.Marker({
                                                 position: markerLatLng3,
                                                 //   optimized: true,
                                                 
                                                 // labelContent: lable,
                                                 
                                                 //  animation: DROP,
                                                 map: mapz3,
                                                 icon: 'http://tracker.tujarcom.com/Blue.png'
                                                 
                                                 
                                                 });
                
                //  marker3[ii].setMap(null);
                
                
                markers.push(marker3);
                // mapz3.setZoom(getzoom);
                
                
                // var getcenter = mapz3.getBounds();
                
                
                //  mapz3.fitBounds(getcenter);
                //    mapz3.panTo(getcenter);
                
                // mapz3.setCenter(getcenter);
                //   mapz3.setCenter(getcenter);
                
                
                
                
                
                
                //  map.setCenter(new google.maps.LatLng(lat3, lng3));
                
                
                
                
                //   var onetimex = localStorage.getItem("onetimex");
                
                
                
                
                //    mapz3.fitBounds(bounds);
                
                
                //  if (onetimex == 2 || onetimex == 2 )
                
                //     {
                
                
                //       var boundsListener = google.maps.event.addListener((mapz3), 'bounds_changed', function(event) {
                //      this.setZoom(getzoom);
                
                //  mapz3.setZoom(getzoom);
                
                //     google.maps.event.removeListener(boundsListener);
                
                
                
                
                //   });
                
                
                //  onetimex--;
                
                
                // localStorage.setItem("onetimex", onetimex);
                
                
                
                //    }
                
                
                
                
                //  infowindow.close();
                
                
                infowindow.setContent( '<div id="siteNotice" style="margin-left: 0px; color:blue;" ><b>'+'___'+username+'</b></div>' + '<div id="siteNotice2">'+user_status+'</div>');
                
                
                //  infowindow.setContent("  "+username+"\n("+user_status+")");
                infowindow.open(mapz3, marker3);
                
                
                //      bounds.extend(getcenter);
                //mapz3.setCenter(getcenter);
                
                //mapz3.panTo(getcenter);
                
                //   infowindow.setPosition(getcenter);
                
                
                
                
            }
            
            
            
            //       Apperyio('currentspeed_32_'+ii+'').text(speeding);
            //        Apperyio('exceed120_121_'+ii+'').text(exceed120r);
            
            
            
            
            //   mapz = Apperyio('gmap2_'+ii+'').gmap;
            
            
            
            
            //     var markerLatLng = new google.maps.LatLng(lat, longt);
            
            // var lable = localStorage.getItem("tuname");
            // var onetimex = localStorage.getItem("onetimex");
            
            //  var langg2= 'ar';
            
            
            //  localStorage.setItem("langg2", langg2);
            
            
            
            //var markerLatLngx2 = lat+','+longt;
            
            //       localStorage.setItem("latr", lat);
            //   localStorage.setItem("longtr", longt);
            
            
            
            // localStorage.setItem("markerLatLngx2", markerLatLngx2);
            
            //  var markerLatLngx2 = new google.maps.LatLng(24.633263,46.716670);
            
            
            //      },
            // 2000);
            
            
            
            // var markerLatLng = new google.maps.LatLng(Apperyio.storage.currentLat.get(), Apperyio.storage.currentLng.get());
            
            //var marker = new google.maps.Marker({
            //  position: markerLatLng,
            
            // labelContent: lable,
            
            
            
            //   map: mapz,
            //    icon: 'http://tracker.tujarcom.com/Blue.png'
            //});
            
            //var zz = 1;
            
            //   setInterval (function() {
            //if (onetimex == 1 || onetimex == 1 )
            //{
            
            //mapz.setCenter(markerLatLng);
            
            // if (lat == '' || longt =='')
            // {
            //  lat= 24.782141 ;
            //  longt= 46.682966 ;
            
            // var markerLatLng33= new google.maps.LatLng(lat, longt);
            
            //     mapz3.setCenter(markerLatLng33);
            
            
            
            //mapz3.setZoom(7);
            
            
            //   }
            
            //  else
            //  {
            
            
            
            
            //  mapz3.setCenter(markerLatLng3[0]);
            //  mapz3.setZoom(10);
            
            
            
            //  }
            
            //  localStorage.setItem("markerLatLngr", markerLatLng);
            
            // mapz.setZoom(14);
            
            //  var zoomr = 14;
            
            //   localStorage.setItem("zoomr", zoomr);
            
            //mapz3.setZoom(10);
            
            //  onetimex--;
            
            
            //  localStorage.setItem("onetimex", onetimex);
            
            
            //}
            
            
            
            
            
            
            
            //infowindow.close();
            // infowindow.setContent(username);
            // infowindow.open(mapz3,marker3);
            
            
            
            
            
        }
        
        
        ii++;
        
        
        
    }
    
    
    
    
    //   if (  lat != 0 )
    // {
    
    Apperyio('latf').text(lat);
    
    Apperyio('longf').text(longt);
    
    
    
    
    
    
    
    var onetimex = localStorage.getItem("onetimex");
    
    if (onetimex == 2 || onetimex == 2 || onetimex == 2 )
        
    {
        
        
        //       var boundsListener = google.maps.event.addListener((mapz3), 'bounds_changed', function(event) {
        //      this.setZoom(getzoom);
        
        //  mapz3.setZoom(getzoom);
        
        //     google.maps.event.removeListener(boundsListener);
        
        
        
        
        
        
        
        
        
        for (var ie = 0; ie < markers.length; ie++) {
            bounds.extend(markers[ie].getPosition());
        }
        
        mapz3.fitBounds(bounds);
        
        
        
        
        
        
        
        
        
        
        
        //         mapz3.setCenter(markerLatLng3);
        
        // mapz3.setZoom(7);
        
        
        
        
        
        
        
        
        
        //   });
        
        
        onetimex--;
        
        
        localStorage.setItem("onetimex", onetimex);
        
        
        
    }
    
    
    //  }
    
    //   mapz3.options['address']='';
    //mapz3.refresh();
    
    //  var latlngbounds = new google.maps.LatLngBounds();
    
    //  latlngbounds.extend(marker3.position);
    
    //   var bounds = new google.maps.LatLngBounds();
    
    //  map.setCenter(latlngbounds.getCenter());
    //  map.fitBounds(latlngbounds);
    
    
    
    
    
    //      while(ii != 0)
    // {
    
    //     marker3[ii].setMap(null);
    
    //      ii--;
    //  }
    
    
    //alert("jjjjj");
    
    // var stoplist = localStorage.getItem("stoplist");
    
    
    // localStorage.setItem("stoplist", stoplist);
    
    
    // if (stoplist == 1 )
    //{
 
 //====================================================
 //===================
    setTimeout(function() {
               
        
               
           //    window.location = 'FullMap.html';

               //    for (var ss=0; ss<ii.length; ss++) {
               
               //    marker3[ss].setMap(null);
               //  }
               
               
               
               
               //    marker3=[];
               
               
               //reloadMarkers();
               
               
            ////==================================
               reloadMarkers();
               
          //    list_tracking_de3.execute({});
          //    hideSpinner();
               
              ////====================
               
               }, 20000);
               
               //=============================
               //====================================================================================
    
    //}
    
    // if (stoplist == 0 )
    //{
    
    //  alert("تم إيقاف التتبع");
    
    
    
    //}
    
    
    
    
    
    
    
    
}






//=============
//========

*/







var mapOptions = {

gestureHandling: 'greedy'

};


// var mapz3 = new google.maps.Map(Appery("gmap3").get(0), mapOptions);

function list_one_by_one3(){
    
    var markers=[];

   // reloadMarkers();
    
    
             //   $("[dsid='gmap3']").refresh();

    
  //  var mapz3;
    
     //    var  latz= 24.782141 ;
    //   var longtz= 46.682966 ;
        
    //  var markerLatLng33= new google.maps.LatLng(latz, longtz);
        
       //    mapz3.setCenter(markerLatLng33);

        
    //     mapz3.setZoom(4);
    

 var wholecode = [];
	
	var v11=localStorage.getItem('tdetails');

var todos =[];

todos=JSON.parse(v11);

    
    var ii =0;
    
    
    
     //  var mapz3 = new google.maps.Map(Appery("gmap3").get(0), mapOptions);
     var  mapz3 = Apperyio('gmap3').gmap;
     
     
  
        
        
    
       var bounds = new google.maps.LatLngBounds();

        var marker3=[];

        
    var markerLatLng3 =[];
    
for (var i in todos)
	//for (i = 0; i < 5; i++)
{
//alert (i);
    
    
var todo = todos[i];
var mobile_number=todo.mobile_number;
var lat=todo.lat;
var longt=todo.longt;
var speeding=todo.speeding;
var heading=todo.heading;
var t24=todo.t24;
var username=todo.username;
var date_added=todo.date_added;
var time_added=todo.time_added;
var id=todo.id;
    var friend_Mobile=todo.friend_Mobile;
var user_status=todo.user_status;
var exceed120r = todo.exceed120r;
   // var marker = todo.marker;



//var mapz3;
    

        if (!lat)
    {
        
        
    }
    
    else
    {
    
    
    
    
 var infowindow = new google.maps.InfoWindow({
      content: 'Test',
      disableAutoPan: true
   });
    
    
    
    
    
    
    function reloadMarkers() {
 
    // Loop through markers and set map to null for each
    for (var ss=0; ss<markers.length; ss++) {
     
        markers[ss].setMap(null);
    }
    
    // Reset the markers array
    markers = [];
    
    // Call set markers to re-add markers
}
    
    
    
    
    
//  marker3[ii].setMap(null);


  //  localStorage.setItem("id", id);

    //var currentValue = Apperyio('mobileno2').text(mobile_number); 
    
                    //  Apperyio('latf').text(todo[0].lat);

                     //  Apperyio('longf').text(todo[0].longt);

                      //    Apperyio('status2_'+ii+'').text(user_status);
    
                          //    Apperyio('currentadd_125_'+ii+'').text(heading);
    
                             //     Apperyio('coory_137_'+ii+'').text(lat);

                                 // Apperyio('coorx_133_'+ii+'').text(longt);

    
   // 24.782141, 46.682966
    
    




//var marker3=[];

 
    if ( lat != 0 )
    {

        markerLatLng3 = new google.maps.LatLng(lat, longt);
    //      bounds.extend(markerLatLng3[ii]);

    
    var getzoom = mapz3.getZoom() ;
        
       
        
                var getcenter = mapz3.getCenter();

        
        
       // var getcenter = mapz3.getCenter();
        
      //    var lat3 = position.coords.latitude;
 // var lng3 = position.coords.longitude;
                
                
       //  mapz3.setCenter(getcenter);        

//mapz3.setCenter(getcenter);
        
 marker3 = new google.maps.Marker({
    position: markerLatLng3,
 //   optimized: true,

 // labelContent: lable,

  //  animation: DROP,
    map: mapz3,
//    icon: 'http://tracker.tujarcom.com/Blue.png'
     icon: 'http://tracker.tujarcom.com/TrackingDot.png' 
    
     
     
});
    
   //  marker3[ii].setMap(null);
        
       
    markers.push(marker3);
 // mapz3.setZoom(getzoom);
        
        
            // var getcenter = mapz3.getBounds();

        
      //  mapz3.fitBounds(getcenter);
    //    mapz3.panTo(getcenter);
        
       // mapz3.setCenter(getcenter);
   //   mapz3.setCenter(getcenter);
    
        

        
        
    
  //  map.setCenter(new google.maps.LatLng(lat3, lng3));

    
    
    
 //   var onetimex = localStorage.getItem("onetimex");
    
    
    
    
        //    mapz3.fitBounds(bounds);

        
      //  if (onetimex == 2 || onetimex == 2 )

   //     {
    
        
  //       var boundsListener = google.maps.event.addListener((mapz3), 'bounds_changed', function(event) {
//      this.setZoom(getzoom);
             
             //  mapz3.setZoom(getzoom);

  //     google.maps.event.removeListener(boundsListener);
              
              
              
          
//   });
            
            
         //  onetimex--;
    
    
// localStorage.setItem("onetimex", onetimex);   
            
            
    
    //    }
        
        
        
        
      //  infowindow.close();
        
        
        infowindow.setContent( '<div id="siteNotice" style="margin-left: 0px; color:blue;" ><b>'+'___'+username+'</b></div>' + '<div id="siteNotice2">'+user_status+'</div>');
        
        
         //  infowindow.setContent("  "+username+"\n("+user_status+")");
        infowindow.open(mapz3, marker3);
        
        
     //      bounds.extend(getcenter);
//mapz3.setCenter(getcenter);
        
        //mapz3.panTo(getcenter);
        
     //   infowindow.setPosition(getcenter);
        
        
        
    
    }

    
    
  //       Apperyio('currentspeed_32_'+ii+'').text(speeding);
              //        Apperyio('exceed120_121_'+ii+'').text(exceed120r);
    
    
    
        
 //   mapz = Apperyio('gmap2_'+ii+'').gmap;
    


    
  //     var markerLatLng = new google.maps.LatLng(lat, longt);
    
   // var lable = localStorage.getItem("tuname");
       // var onetimex = localStorage.getItem("onetimex");
    
  //  var langg2= 'ar';
    
    
  //  localStorage.setItem("langg2", langg2);
    
    
    
//var markerLatLngx2 = lat+','+longt;
    
     //       localStorage.setItem("latr", lat);
     //   localStorage.setItem("longtr", longt);

    
    
   // localStorage.setItem("markerLatLngx2", markerLatLngx2);
    
      //  var markerLatLngx2 = new google.maps.LatLng(24.633263,46.716670);

    
  //      },
// 2000);
    
    

   // var markerLatLng = new google.maps.LatLng(Apperyio.storage.currentLat.get(), Apperyio.storage.currentLng.get());
 
//var marker = new google.maps.Marker({
  //  position: markerLatLng,

 // labelContent: lable,



 //   map: mapz,
//    icon: 'http://tracker.tujarcom.com/Blue.png'
//});
 
 //var zz = 1;   
    
  //   setInterval (function() {
//if (onetimex == 1 || onetimex == 1 )
//{

//mapz.setCenter(markerLatLng);
    
   // if (lat == '' || longt =='')
   // {
      //  lat= 24.782141 ;
      //  longt= 46.682966 ;
        
      // var markerLatLng33= new google.maps.LatLng(lat, longt);
        
       //     mapz3.setCenter(markerLatLng33);

        
         
//mapz3.setZoom(7);
        
        
 //   }
    
  //  else
  //  {
        
        
        
    
  //  mapz3.setCenter(markerLatLng3[0]);
      //  mapz3.setZoom(10);

        
        
  //  }

              //  localStorage.setItem("markerLatLngr", markerLatLng);

   // mapz.setZoom(14);
    
  //  var zoomr = 14;
    
                 //   localStorage.setItem("zoomr", zoomr);

//mapz3.setZoom(10);
    
  //  onetimex--;
    
    
  //  localStorage.setItem("onetimex", onetimex); 
    
    
//}
    
    
    
 

  
        
     //infowindow.close();
      // infowindow.setContent(username);
       // infowindow.open(mapz3,marker3);
    
    
   
    
    
    }
    
    
ii++;



}
    
    
    
    
 //   if (  lat != 0 )
   // {
        
      Apperyio('latf').text(lat);

                     Apperyio('longf').text(longt);
                     
                     
                     
 


    
    var onetimex = localStorage.getItem("onetimex");
    
          if (onetimex == 2 || onetimex == 2 || onetimex == 2 )

      {
    
        
  //       var boundsListener = google.maps.event.addListener((mapz3), 'bounds_changed', function(event) {
//      this.setZoom(getzoom);
             
             //  mapz3.setZoom(getzoom);

  //     google.maps.event.removeListener(boundsListener);
  
  
  
  
  
  
  
  
                      
     for (var ie = 0; ie < markers.length; ie++) {
 bounds.extend(markers[ie].getPosition());
}

mapz3.fitBounds(bounds);


  
  
  
  
  
  
  
  
              
     //         mapz3.setCenter(markerLatLng3);
 
  // mapz3.setZoom(7);
   
   
   
   
   


              
          
//   });
            
            
           onetimex--;
    
    
localStorage.setItem("onetimex", onetimex);   
            
            
    
       }
       
       
       


    
    
  //  } 
    
//   mapz3.options['address']='';
    //mapz3.refresh();
    
  //  var latlngbounds = new google.maps.LatLngBounds();
    
  //  latlngbounds.extend(marker3.position);
    
 //   var bounds = new google.maps.LatLngBounds();
    
  //  map.setCenter(latlngbounds.getCenter());
      //  map.fitBounds(latlngbounds);
    
    
       
  
    
    //      while(ii != 0) 
      // {
           
      //     marker3[ii].setMap(null);
           
     //      ii--;
     //  }

	        
   //alert("jjjjj");
    
           // var stoplist = localStorage.getItem("stoplist");
    
    
       // localStorage.setItem("stoplist", stoplist); 


   // if (stoplist == 1 )
//{
    
    setTimeout(function() {
         
       
 //    for (var ss=0; ss<ii.length; ss++) {
     
    //    marker3[ss].setMap(null);
  //  }
    
    
    
    
   //    marker3=[];
    
         
//reloadMarkers();
        reloadMarkers();
    
   // list_tracking_de3.execute({});
      //    hideSpinner();
        
        

                    }, 9000);
    
//}
    
     // if (stoplist == 0 )
//{  
    
 //  alert("تم إيقاف التتبع"); 
    
    
    
//}
    
    
    
    
    


 
}
















