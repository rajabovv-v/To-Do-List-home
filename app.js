const inputBox = document.getElementById("input-box")
const listUl = document.getElementById("list-ul")


function addFruit(){
   if(inputBox.value === ''){
    alert("You must write something");
   }else{
    let li = document.createElement("li")
    li.innerHTML = inputBox.value;
    listUl.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
   }
   inputBox.value = "";
   saveData();
}

listUl.addEventListener('click', function(e){
   if(e.target.tagName === "LI"){
      e.target.classList.toggle("checked");
      saveData();
   }else if(e.target.tagName === "SPAN"){
      e.target.parentElement.remove();
      saveData();
   }
}, false);

function saveData(){
   localStorage.setItem("data", listUl.innerHTML);
}

// function showTask(){
//    listUl.innerHTML = localStorage.getItem("data");
// }

showTask();