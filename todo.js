function  addTodoItem(number,task){
  $("#todo").append('<li id='+number+'> <input type="checkbox" onclick="removeitem('+number+')"/><input  type="text" placeholder="Your do to list" value='+task+'></input></li>');

}
function createnumberofitems(count){
for(var i=0; i<count; i++){
 addTodoItem(i,'') 
}
}
function removeitem (id){
  $( "#"+id ).remove();
}
	
//$( "#number" ).remove();

createnumberofitems(0)
function save() {
  for(var i=0; i <$("input").length; i++){
    console.log($("input")[i].value)
  }
}
 arr = [];
function fillArray() {
  arr.push("Homework");
  arr.push("Read book");
  arr.push("review");
  arr.push("download");
}
function load (mytasks){
  for(var i=0; i<mytasks.length;i++){
  addTodoItem(i,mytasks[i]);
}
}
fillArray();
load(arr);
console.log(arr)
 

