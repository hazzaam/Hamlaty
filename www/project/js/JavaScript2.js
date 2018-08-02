


var mapOptions = {

gestureHandling: 'greedy'

};








function list_one_by_one(){

 var wholecode = [];
	
	var v11=localStorage.getItem('tdetails');

var todos =[];

todos=JSON.parse(v11);

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



var mapz;

  //  localStorage.setItem("id", id);

    //var currentValue = Apperyio('mobileno2').text(mobile_number); 
    
                         //  Apperyio('drivername2').text(username);

                        //   Apperyio('mobileno2').text(mobile_number);

                         //  Apperyio('status2').text(user_status);

        localStorage.setItem("usernamer", username);

        localStorage.setItem("mobile_numberr", mobile_number);

        localStorage.setItem("user_statusr", user_status);

    
    
    
    
        
    mapz = Apperyio("gmap2").gmap;
    
  //mapz = new google.maps.Map(Appery("gmap2").get(0), mapOptions);

    
       var markerLatLng = new google.maps.LatLng(lat, longt);
    
   // var lable = localStorage.getItem("tuname");
        var onetimex = localStorage.getItem("onetimex");
    
    var langg2= 'ar';
    
    
    localStorage.setItem("langg2", langg2);
    
    
    
var markerLatLngx2 = lat+','+longt;
    
            localStorage.setItem("latr", lat);
        localStorage.setItem("longtr", longt);

    
    
    localStorage.setItem("markerLatLngx2", markerLatLngx2);
    
      //  var markerLatLngx2 = new google.maps.LatLng(24.633263,46.716670);

    
  //      },
// 2000);
    
    

   // var markerLatLng = new google.maps.LatLng(Apperyio.storage.currentLat.get(), Apperyio.storage.currentLng.get());
 
var marker = new google.maps.Marker({
    position: markerLatLng,

 // labelContent: lable,



    map: mapz,
    icon: 'http://tracker.tujarcom.com/Blue.png'
});
 
 //var zz = 1;   
    
  //   setInterval (function() {
if (onetimex == 1 || onetimex == 2 )
{

//mapz.setCenter(markerLatLng);
                localStorage.setItem("markerLatLngr", markerLatLng);

   // mapz.setZoom(14);
    
    var zoomr = 14;
    
                    localStorage.setItem("zoomr", zoomr);


    
    onetimex--;
    
    
    localStorage.setItem("onetimex", onetimex); 
    
    
}
    
    
    
 
   //     },
    
    
    

 //1000);
    
    
    
//     var tuname  = localStorage.getItem("tuname");
    
  //    infowindow.close();
      //  infowindow.setContent(tuname);
    //    infowindow.open(mapz,marker);
    
    
    
    
    
    
    
    
    
    
          var speed_map = speeding;
var speederror = 6;
            speed_map = speed_map * 3.6;
                speed_map = speed_map +speederror ;


            if (speed_map > 8)

            {

                if (speed_map < 121)

                {

                 //   Apperyio('currentspeed_32').text(speed_map.toFixed(0));
                   //    Apperyio('exceed120_121').text("لا");

                    var speed_mapr = speed_map.toFixed(0);
                  var   exceed120r = 'لا';
                                        localStorage.setItem("speed_mapr", speed_mapr);
                    localStorage.setItem("exceed120r", exceed120r);

                    
                    var calspeed = speed_map.toFixed(0);
                    
                 //    localStorage.setItem("calspeed", calspeed);
                    
                    
                } else

                {

                //    Apperyio('currentspeed_32').text(speed_map.toFixed(0));
                //    Apperyio('exceed120_121').text("نعم");
                    
                                        var calspeed = speed_map.toFixed(0);

                              var speed_mapr = speed_map.toFixed(0);
                  var   exceed120r = 'نعم';
                                        localStorage.setItem("speed_mapr", speed_mapr);
                    localStorage.setItem("exceed120r", exceed120r);
                    
                    
                    
                    // localStorage.setItem("calspeed", calspeed);
                    
                    

                }

                //   var mobvar =   Apperyio.storage.mob.get();

                //    localStorage.setItem("calspeed", speed_map); 

            } else

            {
                var zer = 0;

                // localStorage.setItem("calspeed", zer); 

             //   Apperyio('currentspeed_32').text(zer);
                //       Apperyio('exceed120_121').text("لا");
                
                
                                    var calspeed = zer;

                
                
                
                          var speed_mapr = zer;
                  var   exceed120r = 'لا';
                                        localStorage.setItem("speed_mapr", speed_mapr);
                    localStorage.setItem("exceed120r", exceed120r);
                
                
                
              //   localStorage.setItem("calspeed", calspeed);

            }; 
    
    
    
    
    
    
    
    
    
    
    
    
    
   geocode2.execute({});
    
  
    
    //    upload.execute({});

    
     var geocoder = localStorage.getItem("geocoder");
    
    
                    //   Apperyio('currentadd_125').text(geocoder);
    
                      //  localStorage.setItem("exceed120r", exceed120r);

    
    
                    //       Apperyio('coory_137').text(lat);

                        //   Apperyio('coorx_133').text(longt);



      setTimeout(function() {

    
                            var geocoder = localStorage.getItem("geocoder");

          

                    }, 300);
    
    
    
    
    




}

	


}


