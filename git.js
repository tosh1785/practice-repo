// alert("Did I do it?");

//const 

const div = document.querySelector(".container");
//const ul = document.querySelector("ul");

const button = document.querySelector("button");

button.addEventListener("click", function (){
    console.log("you clicked the button");
    let newItem = document.createElement("input")
    
    newItem.type = "checkbox";
    newItem.id = "myCheckbox"
    newItem.style.display = "inline";  
    div.appendChild(newItem); 

    let newText = document.createElement("input");  
    newText.type = "text"
    //newText.id = "myText";
    newText.classList.add(".todo");
    newText.style.display = "inline";
    newText.style.color = "red";
    //newText.textDecorationStyle = "line-through";
    newText.style.backgroundColor = "lightcoral";
    newText.style.width = "259px";
    div.appendChild(newText);

    newItem.addEventListener("click", function(){
        //let userText = newText.value;
        //document.querySelectorAll("#myCheckbox");
       //let someText =  document.querySelectorAll(".todo");
        //for (let texts of someText){
        if (newItem.checked === true){
            newText.classList.toggle(".completed");
        } else  {
            newText.classList.toggle("todo");
        
            }
    })


   
  
   
        
})



