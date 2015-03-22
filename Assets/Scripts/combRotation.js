#pragma strict
var axis : Vector3 ;
var access : int = 0;
var comb_start:int = 0;
var rotco : Vector3 ;
var buffer :int;
var ax :int;
var ay :int;
var az :int;
function Start () {

}

function Update () {
if(Time.timeScale==1)
{
rotco = Vector3(transform.eulerAngles.x%90,transform.eulerAngles.y%90,transform.eulerAngles.z%90);
transform.RotateAround (Vector3.zero, axis,2);
if(axis==Vector3(0,0,0)&& access==1){
     
if((transform.eulerAngles.y)%90>3&&(transform.eulerAngles.y)%90<87){
   //print(transform.eulerAngles.y+" 1y");
   transform.eulerAngles.y =  transform.eulerAngles.y -((transform.eulerAngles.y)%1);
   //print(transform.eulerAngles.y+"2y");
  
   
   
   if(transform.eulerAngles.y%90>=45){
      // print("hi"); 
      
      transform.eulerAngles.y = transform.eulerAngles.y +2;
      //transform.eulerAngles.y=transform.eulerAngles.y-(transform.eulerAngles.y%90)+90; 
   }else{
       
        transform.eulerAngles.y= transform.eulerAngles.y -2;
       //print(transform.eulerAngles.y);
     // transform.eulerAngles.y=transform.eulerAngles.y-(transform.eulerAngles.y%90); 
   }
   
   
}
  if(transform.eulerAngles.y>=357||transform.eulerAngles.y<=3){
         transform.eulerAngles.y=0;
      }
     else if(transform.eulerAngles.y>=87&&transform.eulerAngles.y<=93){
         transform.eulerAngles.y=90;
      }
     else if(transform.eulerAngles.y>=177&&transform.eulerAngles.y<=183){
         transform.eulerAngles.y=180;
      }
    else if(transform.eulerAngles.y>=267&&transform.eulerAngles.y<=273){
         transform.eulerAngles.y=270;
      }else 
     {
      buffer=transform.eulerAngles.y;
      transform.eulerAngles.y=buffer;
     } 
   



if((transform.eulerAngles.x)%90>3&&(transform.eulerAngles.x)%90<87){
  // print(transform.eulerAngles.x+"1x");
   transform.eulerAngles.x =  transform.eulerAngles.x -((transform.eulerAngles.x)%1);
  // print(transform.eulerAngles.x+"2x");
  
   
   
    if(transform.eulerAngles.x%90>=45){
      // print("hi"); 
      
      transform.eulerAngles.x = transform.eulerAngles.x +2;
      //transform.eulerAngles.y=transform.eulerAngles.y-(transform.eulerAngles.y%90)+90; 
   }else{
       
        transform.eulerAngles.x= transform.eulerAngles.x -2;
     //  print(transform.eulerAngles.x);
     // transform.eulerAngles.y=transform.eulerAngles.y-(transform.eulerAngles.y%90); 
   }
   
   
}


if(transform.eulerAngles.x>=357||transform.eulerAngles.x<=3){
         transform.eulerAngles.x=0;
         
      }
     else if(transform.eulerAngles.x>=87&&transform.eulerAngles.x<=93){
         transform.eulerAngles.x=90;
      }
     else if(transform.eulerAngles.x>=177&&transform.eulerAngles.x<=183){
         transform.eulerAngles.x=180;
      }
    else  if(transform.eulerAngles.x>=267&&transform.eulerAngles.x<=273){
         transform.eulerAngles.x=270;
      }
      else 
     {
      buffer=transform.eulerAngles.x;
      transform.eulerAngles.x=buffer;
     } 




if((transform.eulerAngles.z)%90>3&&(transform.eulerAngles.z)%90<87){
   //print(transform.eulerAngles.z+"1z");
   transform.eulerAngles.z =  transform.eulerAngles.z -((transform.eulerAngles.z)%1);
   //print(transform.eulerAngles.z+"2z");
  
  
   
   if(transform.eulerAngles.z%90>=45){
      // print("hi"); 
      
      transform.eulerAngles.z = transform.eulerAngles.z +2;
      //transform.eulerAngles.y=transform.eulerAngles.y-(transform.eulerAngles.y%90)+90; 
   }else{
       
        transform.eulerAngles.z= transform.eulerAngles.z -2;
       //print(transform.eulerAngles.z);
     // transform.eulerAngles.y=transform.eulerAngles.y-(transform.eulerAngles.y%90); 
   }
   
   
}


 if(transform.eulerAngles.z>=357||transform.eulerAngles.z<=3){
         transform.eulerAngles.z=0.000000000000000;
         
      }
     else if(transform.eulerAngles.z>=87&&transform.eulerAngles.z<=93){
         transform.eulerAngles.z=90.0000000000000;
         //print("hi");
      }
     else if(transform.eulerAngles.z>=177&&transform.eulerAngles.z<=183){
         transform.eulerAngles.z=180.0000000000000000;
      }
    else  if(transform.eulerAngles.z>=267&&transform.eulerAngles.z<=273){
         transform.eulerAngles.z=270.0000000000000000;
      }
    else 
     {
      buffer=transform.eulerAngles.z;
      transform.eulerAngles.z=buffer;
     }  
  ax=transform.eulerAngles.z%90;
  ay=transform.eulerAngles.y%90;
  az=transform.eulerAngles.x%90;
  
  if((ax==0)&&(ay==0)&&(az==0)){
  access =0;
  gameObject.BroadcastMessage("setPosition");
  }
  

}
if(axis!=Vector3(0,0,0)){
access=1;
}
}
}


function getVector(v:Vector3){
axis=v;
}

