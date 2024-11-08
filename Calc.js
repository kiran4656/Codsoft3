const view=document.getElementById('view')
function addchartoview(value){
  view.value+=value
}

function clearthescreen(){
  view.value=' ';
}

function popLastCharacter(){
  view.value=view.value.slice(0,-1);
}

function result(){
  view.value=eval(view.value)
}