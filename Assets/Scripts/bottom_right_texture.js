#pragma strict
var x_start:float;
var x_dist:float;
var y_start:float;
var y_dist:float;
var v : int =0;
var calc:int=0;
var button :GameObject;
var lok:int=0;

function Start () {

}

function Update () {

  
  if(v==1){
     x_start=Input.mousePosition.x;
     y_start=Input.mousePosition.y;
     v=0;
  }
  if(calc==1){
  x_dist=Input.mousePosition.x-x_start;
  y_dist=Input.mousePosition.y-y_start;
  }
  if(x_dist<-100){
      calc=0;
      x_dist=0;
       y_dist=0;
       
       x_start=0;
       y_start=0;
     //  lok=0;
       button.SendMessage("FrmTexture",5);
  
  }
  if(y_dist>100){
      calc=0;
      x_dist=0;
       y_dist=0;
       
       x_start=0;
       y_start=0;
     //  lok=0;
       button.SendMessage("FrmTexture",6);
  
  }
  if(Input.GetMouseButtonUp(0)){
       x_dist=0;
       y_dist=0;
       calc=0;
       x_start=0;
       y_start=0;
       lok=0;
    }
    
}

function OnMouseDrag(){
if(lok==0){
  v=1;
       calc=1;
       lok=1;
}
}


function OnMouseOver(){
    if(Input.GetMouseButtonDown(0)){
       if(lok==0){
       v=1;
       calc=1;
       lok=1;
       }
    }
 }
