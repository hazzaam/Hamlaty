




var mapOptions = {

gestureHandling: 'greedy'

};





function list_one_by_one2(){
    

 var wholecode = [];
	
	var v11=localStorage.getItem('tdetails');

var todos =[];

todos=JSON.parse(v11);

    
    var ii =0;
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



var mapz;

  //  localStorage.setItem("id", id);

    //var currentValue = Apperyio('mobileno2').text(mobile_number); 
    
    Apperyio('countNo_'+ii+'').text(ii);
    
                          Apperyio('drivername2_'+ii+'').text(username);

                          Apperyio('mobileno2_'+ii+'').text(mobile_number);

                          Apperyio('status2_'+ii+'').text(user_status);
    
                              Apperyio('currentadd_125_'+ii+'').text(heading);
    
                                  Apperyio('coory_137_'+ii+'').text(lat);

                                  Apperyio('coorx_133_'+ii+'').text(longt);
    
    
    
     Apperyio('DeltaDistanceLabel_'+ii+'').text(t24);
     
     
     
    
         Apperyio('currentspeed_32_'+ii+'').text(speeding);
    
    
    
    if (exceed120r == 1)
    {
                      Apperyio('exceed120_121_'+ii+'').text('نعم');
    
    
    
    }
    
    
    



var markerLatLng3 =[];

var marker3=[];

    mapz = Apperyio('gmap2_'+ii+'').gmap;

   //  mapz = new google.maps.Map(Appery('gmap2_'+ii+'').get(0), mapOptions);

        markerLatLng3 = new google.maps.LatLng(lat, longt);
    
       // var latlat = localStorage.getItem("glat");
    if (lat != 'null' || lat != '' || lat != 0  )
        
    {


 marker3 = new google.maps.Marker({
    position: markerLatLng3,

 // labelContent: lable,



    map: mapz,
    icon: 'http://tracker.tujarcom.com/Blue.png'
});
    
    
    
    
    
    }   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    


    
    
    


    
   //    var markerLatLng = new google.maps.LatLng(lat, longt);
    
   // var lable = localStorage.getItem("tuname");
        var onetimex = localStorage.getItem("onetimex");
    
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
 //   position: markerLatLng,

 // labelContent: lable,
// var settocenter = localStorage.getItem("settocenter");
  //   var gmapi = localStorage.getItem("gmapi");

 //   if (  settocenter == 1)
//{
    
    
 // var  mapzx = Apperyio('gmap2_'+gmapi+'').gmap;
    
    
   // mapzx.setCenter(markerLatLng3);


 //  mapzx.setZoom(14);
    
   // var settocenter = 0;
    
      //          localStorage.setItem("settocenter", settocenter);
    
//}


 //   map: mapz,
  //  icon: 'http://tracker.tujarcom.com/Blue.png'
//});
 
 //var zz = 1;   
    
  //   setInterval (function() {
    
    
   
    
      if ( lat != null  || lat != '' || lat != 0 || lat != undefined )
        
    {
       //  var settocenter = localStorage.getItem("settocenter");
        
if ( onetimex == 2 || onetimex == 1 || onetimex == 0 )
{

mapz.setCenter(markerLatLng3);
   // mapz3.setCenter(markerLatLng3[0]);

              //  localStorage.setItem("markerLatLngr", markerLatLng);

   mapz.setZoom(14);
    
  

//mapz3.setZoom(10);
    
  //  onetimex--;
    
    
  //  localStorage.setItem("onetimex", onetimex); 
    
    
}
    
    
    
 

    }
   
    
    
    
    
    
ii++;



}

    
        countmsg2.execute({});

       
    onetimex--;
    
    
    localStorage.setItem("onetimex", onetimex); 
    
    
    var follower_un="المتابع";
    
        localStorage.setItem("follower_un", follower_un); 

    
    
        
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
    
        
    
 localStorage.setItem("currentdate2", currentdate);

    
    
    
    d = new Date();

currenttime = d.toLocaleTimeString(); 
    
    
    
     localStorage.setItem("currenttime2", currenttime);

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
	        
    
            var stoplist = localStorage.getItem("stoplist");
    
    
       // localStorage.setItem("stoplist", stoplist); 


    if (stoplist == 1 )
{
    
        setTimeout(function() {

    list_tracking_de2.execute({});
          hideSpinner();
          

                    }, 5000);
    
}
    
      if (stoplist == 0 )
{  
    
  // alert("تم إيقاف التتبع"); 
   
  function alertDismissed() {
    // do something
}
navigator.notification.alert(
    'تم إيقاف التتبع',  // message
    alertDismissed,         // callback
    'تنبيه',            // title
    'OK'                  // buttonName
);
  
  
   
   
}

 
}

