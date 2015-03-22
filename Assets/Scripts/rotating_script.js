#pragma strict
var pos : Vector3;
var activator:int = 0;
var timer : float = -1;
var axis : Vector3 ;
var butn : GameObject;
var inc :int=2 ;
var rand_rot:int;

function Start () {

}

function Update () {
pos=transform.position;
if(activator!=0){
if(timer==-1){
  timer=0;
}
 transform.RotateAround (Vector3.zero, axis,2*activator); 
 timer=timer+inc;
 if(timer==90||timer==-90){
 //co ordinate setter
 if((transform.position.x>0.95)&&(transform.position.x<1.05)){transform.position.x=1;}
 if((transform.position.y>0.95)&&(transform.position.y<1.05)){transform.position.y=1;}
 if((transform.position.z>0.95)&&(transform.position.z<1.05)){transform.position.z=1;}
 
 if((transform.position.x<-0.95)&&(transform.position.x>-1.05)){transform.position.x=-1;}
 if((transform.position.y<-0.95)&&(transform.position.y>-1.05)){transform.position.y=-1;}
 if((transform.position.z<-0.95)&&(transform.position.z>-1.05)){transform.position.z=-1;}

 //co ordinate checker
/*if((transform.position.x!=1)&&(transform.position.x!=-1)&&(transform.position.x!=0)){
   transform.position.x=0;
}
if((transform.position.y!=1)&&(transform.position.y!=-1)&&(transform.position.y!=0)){
   transform.position.y=0;
}
if((transform.position.z!=1)&&(transform.position.z!=-1)&&(transform.position.z!=0)){
   transform.position.z=0;
}*/
if((transform.position.x<0.2)&&(transform.position.x>-0.2)){transform.position.x=0;}
 if((transform.position.y<0.2)&&(transform.position.y>-0.2)){transform.position.y=0;}
 if((transform.position.z<0.2)&&(transform.position.z>-0.2)){transform.position.z=0;}

//rotation checker

 
 activator=0;
 timer=-1;
 butn.SendMessage("Change");
 }  
 
  
 
}

  
}
function Rotater(num : int) {

switch(num)
{
case 1 :
    if((transform.position.y>-0.2)&&(transform.position.y<0.2)){
    activator=1;
    axis=Vector3.up;
    }
    break;
case 2 :    
    if((transform.position.y>-0.2)&&(transform.position.y<0.2)){
    activator=-1;
    axis=Vector3.up;
    }
    break;
case 3 :    
    if((transform.position.y>0.8)&&(transform.position.y<1.2)){
    activator=1;
    axis=Vector3.up;
    }
    break;
case 4 :    
    if((transform.position.y>0.8)&&(transform.position.y<1.2)){
    activator=-1;
    axis=Vector3.up;
    }
    break;
case 5 :    
    if((transform.position.y>-1.2)&&(transform.position.y<-0.8)){
    activator=1;
    axis=Vector3.up;
    }
    break;
case 6 :    
    if((transform.position.y>-1.2)&&(transform.position.y<-0.8)){
    activator=-1;
    axis=Vector3.up;
    }
    break;   
case 7 :    
    if((transform.position.x>-1.2)&&(transform.position.x<-0.8)){
    activator=1;
    axis=Vector3.right;
    }
    break;
case 8 :    
    if((transform.position.x>-1.2)&&(transform.position.x<-0.8)){
    activator=-1;
    axis=Vector3.right;
    }
    break; 
case 9 :    
    if((transform.position.x>-0.2)&&(transform.position.x<0.2)){
    activator=1;
    axis=Vector3.right;
    }
    break;
case 10 :    
    if((transform.position.x>-0.2)&&(transform.position.x<0.2)){
    activator=-1;
    axis=Vector3.right;
    }
    break;   
case 11 :    
    if((transform.position.x>0.8)&&(transform.position.x<1.2)){
    activator=1;
    axis=Vector3.right;
    }
    break;
case 12 :    
    if((transform.position.x>0.8)&&(transform.position.x<1.2)){
    activator=-1;
    axis=Vector3.right;
    }
    break;  
case 13 :    
   
    activator=-1;
    axis=Vector3.right;
    
    break;   
case 14 :    
   
    activator=1;
    axis=Vector3.right;
    break;    
case 15 :    
   
    activator=1;
    axis=Vector3.up;
    break;  
case 16 :    
   
    activator=-1;
    axis=Vector3.up;
    break;                           
}

}

function setPosition(){
//print("hi");

 //co ordinate setter
 
 if((transform.position.x>0.8)&&(transform.position.x<1.2)&&(transform.position.x!=1)){
 transform.position.x=1;
// print("changed");
  }
 if((transform.position.y>0.8)&&(transform.position.y<1.2)&&(transform.position.y!=1)){
 transform.position.y=1;
 //print("changed");
 }
 if((transform.position.z>0.8)&&(transform.position.z<1.1)&&(transform.position.z!=1)){
 transform.position.z=1;
 //print("changed");
 }
 
 if((transform.position.x<-0.8)&&(transform.position.x>-1.2)&&(transform.position.x!=-1)){
 transform.position.x=-1;
// print("changed");
 }
 if((transform.position.y<-0.8)&&(transform.position.y>-1.2)&&(transform.position.y!=-1)){
 transform.position.y=-1;
// print("changed");
 }
 if((transform.position.z<-0.8)&&(transform.position.z>-1.2)&&(transform.position.z!=-1)){
 transform.position.z=-1;
 //print("changed");
 }

 //co ordinate checker
/*if((transform.position.x!=1)&&(transform.position.x!=-1)&&(transform.position.x!=0)){
   transform.position.x=0;
}
if((transform.position.y!=1)&&(transform.position.y!=-1)&&(transform.position.y!=0)){
   transform.position.y=0;
}
if((transform.position.z!=1)&&(transform.position.z!=-1)&&(transform.position.z!=0)){
   transform.position.z=0;

}*/
 if((transform.position.x<0.2)&&(transform.position.x>-0.2)&&(transform.position.x!=-0)){
 transform.position.x=0;
 //print("changed");
 }
 if((transform.position.y<0.2)&&(transform.position.y>-0.2)&&(transform.position.y!=-0)){
 transform.position.y=0;
 //print("changed");
 }
 if((transform.position.z<0.2)&&(transform.position.z>-0.2)&&(transform.position.z!=-0)){
 transform.position.z=0;
 //print("changed");

}

}

function randomCube(c:int){
 
  rand_rot=c;
  switch(rand_rot)
  {
  case 1 :
       if((transform.position.y>0.8)&&(transform.position.y<1.2)){
            axis=Vector3.up;
            transform.RotateAround (Vector3.zero, axis,90); 
       }
       break;
   
  case  2: 
       if((transform.position.y>0.8)&&(transform.position.y<1.2)){
            axis=Vector3.up;
            transform.RotateAround (Vector3.zero, axis,-90); 
        }
        break;
       
  case  3: 
      if((transform.position.y>-1.2)&&(transform.position.y<-0.8)){
            axis=Vector3.up;
            transform.RotateAround (Vector3.zero, axis,90);
       }
       break;
       
  case  4:     
      if((transform.position.y>-1.2)&&(transform.position.y<-0.8)){
            axis=Vector3.up;
            transform.RotateAround (Vector3.zero, axis,-90);
       }
       break;
          
  case  5:
      if((transform.position.x>-1.2)&&(transform.position.x<-0.8)){  
            axis=Vector3.right;
            transform.RotateAround (Vector3.zero, axis,90);
       }
       break;
       
  case  6: 
      if((transform.position.x>-1.2)&&(transform.position.x<-0.8)){
            axis=Vector3.right;
            transform.RotateAround (Vector3.zero, axis,-90);
      }
      break;
        
  case  7:     
       if((transform.position.x>0.8)&&(transform.position.x<1.2)){
            axis=Vector3.right;
            transform.RotateAround (Vector3.zero, axis,90);
      }
      break; 
      
   case  8: 
       if((transform.position.x>0.8)&&(transform.position.x<1.2)){
             axis=Vector3.right;
             transform.RotateAround (Vector3.zero, axis,90);
      }
      break; 
      
   case  9: 
        axis=Vector3.right;
        transform.RotateAround (Vector3.zero, axis,90);
        break; 
        
   case  10: 
        axis = Vector3.right;
        transform.RotateAround (Vector3.zero, axis,-90);
         break;        
               
    case  11: 
         axis = Vector3.up;
         transform.RotateAround (Vector3.zero, axis,90);  
         break;
         
     case  12:  
         axis = Vector3.up;
         transform.RotateAround (Vector3.zero, axis,-90);  
         break;                                                                                                                                                                                                                      
  }
  
  
  
   
  
  
}

