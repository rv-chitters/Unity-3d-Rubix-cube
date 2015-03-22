#pragma strict
var check : int =0;
var gameObj : GameObject;
var txtr_input :int = 0;
var no_changes :int;
var rand :int;
var btnTexture : Texture;

function Start () {

}

function Update () {

}
function OnGUI() {
if(check==0){
		
		if (/*(GUI.Button(Rect(110,170,50,30),"Click"))||*/txtr_input==10){
		gameObj.BroadcastMessage ("Rotater",1);
		check=1;
		txtr_input=0;
		}
		if (/*(GUI.Button(Rect(165,170,50,30),"Click2"))||*/txtr_input==11){
		gameObj.BroadcastMessage ("Rotater",2);
		check=1;
		txtr_input=0;
		}
		if (/*(GUI.Button(Rect(110,120,50,30),"Click3"))||*/(txtr_input==1)){
		gameObj.BroadcastMessage ("Rotater",3);
		check=1;
		txtr_input=0;
		}
		if (/*(GUI.Button(Rect(165,120,50,30),"Click4"))||*/(txtr_input==3)){
		gameObj.BroadcastMessage ("Rotater",4);
		check=1;
		txtr_input=0;
		}
		if(/* (GUI.Button(Rect(110,220,50,30),"Click5"))||*/(txtr_input==5)){
		gameObj.BroadcastMessage ("Rotater",5);
		check=1;
		txtr_input=0;
		}
		if (/*(GUI.Button(Rect(165,220,50,30),"Click6"))||*/txtr_input==7){
		gameObj.BroadcastMessage ("Rotater",6);
		check=1;
		txtr_input=0;
		}
		if (/*(GUI.Button(Rect(315,50,50,30),"Click7"))||*/txtr_input==8){
		gameObj.BroadcastMessage ("Rotater",7);
		check=1;
		txtr_input=0;
		}
		if (/*(GUI.Button(Rect(315,270,50,30),"Click8"))||*/txtr_input==4){
		gameObj.BroadcastMessage ("Rotater",8);
		check=1;
		txtr_input=0;
		}
		if (/*(GUI.Button(Rect(375,50,50,30),"Click9"))||*/txtr_input==12){
		gameObj.BroadcastMessage ("Rotater",9);
		check=1;
		txtr_input=0;
		}
		if (/*(GUI.Button(Rect(375,270,50,30),"Click10"))||*/(txtr_input==9)){
		gameObj.BroadcastMessage ("Rotater",10);
		check=1;
		txtr_input=0;
		}
		if (/*(GUI.Button(Rect(435,50,50,30),"Click11"))||*/(txtr_input==6)){
		gameObj.BroadcastMessage ("Rotater",11);
		check=1;
		txtr_input=0;
		}
		if( /*(GUI.Button(Rect(435,270,50,30),"Click12"))||*/txtr_input==2){
		gameObj.BroadcastMessage ("Rotater",12);
		check=1;
		txtr_input=0;
		}
		if (/*(GUI.Button(Rect(375,10,50,30),"top"))||*/Input.GetKey ("up")){
		gameObj.BroadcastMessage("Rotater",13);
		check=1;
		}
		if (/*(GUI.Button(Rect(375,315,50,30),"bottom"))||*/Input.GetKey ("down")){
		gameObj.BroadcastMessage("Rotater",14);
		check=1;
		}
		if (/*(GUI.Button(Rect(700,170,50,30),"right"))||*/Input.GetKey ("right")){
		gameObj.BroadcastMessage("Rotater",15);
		check=1;
		}
		if (/*(GUI.Button(Rect(10,170,50,30),"left"))||*/Input.GetKey ("left")){
		gameObj.BroadcastMessage("Rotater",16);
		check=1;
		}
		}
	/*	if(GUI.Button(Rect(435,270,90,30),"RANDOM")){
		no_changes=Random.Range(15,20);
		while(no_changes!=0){
		rand=Random.Range(1,12);
		gameObj.BroadcastMessage ("randomCube",rand);
		no_changes--;
		}
		}*/
		if (GUI.Button(Rect(70,10,50,50),btnTexture)){			  
		     no_changes=Random.Range(15,20);
		     while(no_changes!=0){
		     rand=Random.Range(1,12);
		     gameObj.BroadcastMessage ("randomCube",rand);
		     no_changes--;
		     }
	   }	     	
	}
function Change(){
 check=0;
}

function FrmTexture(num:int){
  txtr_input=num;
}	

	
function OnMouseOver(){
    if(Input.GetMouseButtonDown(0)){
          no_changes=Random.Range(15,20);
		while(no_changes!=0){
		rand=Random.Range(1,12);
		gameObj.BroadcastMessage ("randomCube",rand);
		no_changes--;
		}
       }
 }
 
 						