document.getElementById("mainTitle").innerText = "Point and click adventure";


const gameWindow = document.getElementById("gameWindow");

const mainCharacter = document.getElementById("mainCharacter");


gameWindow.onclick = function(e){
   var rect = gameWindow.getBoundingClientRect();
   var x = e.clientX - rect.left;  //X position within the element
   var y = e.clientY - rect.top;   //Y position within the element

   mainCharacter.style.left = x + "px";   //Changing position to place of click
   mainCharacter.style.top = y + "px";    //Changing position to place of click
   
   
   
   console.log(e.target.id);
   switch(e.target.id){
       case "Tree1":
        console.log("a tree... Just a tree... Kiss the tree... You wont. No balls...")
        break;

       default:
        
   }
}