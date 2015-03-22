#pragma strict
var v :int= 0;
var vector:Vector2;
var pvector:Vector2;
var axVect:Vector3;
var cubes:GameObject;
function Start () {

}

function Update () {
  if(v==1){
    if(Input.GetMouseButtonUp(0)){
       transform.position.x=0.5;
       transform.position.y=0.5;
    }
  }
  vector=Vector2( transform.position.x-0.5,transform.position.y-0.5);
  pvector=Vector2(vector.y,-vector.x);
  axVect=Vector3(pvector.x,pvector.y,0);
  cubes.SendMessage("getVector",axVect);
}


function OnMouseDrag(){
 //Debug.Log("clicked");
 //gameObject.transform.position.x=Screen.width-Input.mousePosition.x;
//gameObject.transform.position.y=Screen.height-Input.mousePosition.y;
transform.position = Camera.main.ScreenToViewportPoint (Input.mousePosition);
v=1;
}









