



function welecommsg(){
	


    
    
    var follower_un='!يتابعك';
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

	 
	 var sendText_153='صاحب الرسالة يتابعك الآن';
	 
	     localStorage.setItem("sendText_153", sendText_153);

	 
	 
	 
	 
	 
	 
	 var fmobile2=localStorage.getItem('trackermobile');
    
    
        localStorage.setItem("mymobile2", fmobile2);
    
    
	 
	  

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
    var marker = todo.marker;

    
    
    
	
	

    
      localStorage.setItem("fmobile2", mobile_number);
    
    
     // setTimeout(function() {

    
       
          msgs2.execute({});

          

              //      }, 100);
					
					
					
    
//ii++;



}

    
      //  countmsg2.execute({});

       
 

 
}

