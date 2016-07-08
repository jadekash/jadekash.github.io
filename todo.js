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
  var tasks = [];
  for(var i=0; i <$(":text").length; i++){
    tasks.push($(":text")[i].value);
  }
  localStorage.tasks = tasks;
}



function load (mytasks){
  for(var i=0; i<mytasks.length;i++){
  addTodoItem(i,mytasks[i]);
}
}
$(document).ready(function(){
   var arr = localStorage.tasks.split(",") || [];
   load(arr);
});
 