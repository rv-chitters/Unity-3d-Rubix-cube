#pragma strict
var btnTexture : Texture;
function Start () {

}

function Update () {
   
}

function OnMouseOver(){
    if(Input.GetMouseButtonDown(0)){
        
         //Application.LoadLevel("cube"); 
		
       }
 }	
 
 
 function OnGUI() {
		
		if (GUI.Button(Rect(10,10,50,50),btnTexture))
			 Application.LoadLevel("cube_main"); 
		
	}