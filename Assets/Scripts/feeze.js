#pragma strict
var x :float;
function Start () {

}

function Update () {

x=Time.timeScale;
   if(Input.GetMouseButtonDown(1)){
   Time.timeScale=0;
   //print("hi");
   }
   
   if(Input.GetMouseButtonUp(1)){
			Time.timeScale=1;
			//print("bye");
   }
   
}