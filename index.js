document.getElementById("mainTitle").innerText = "Point and click adventure";


const offsetCharacter = 16;

const gameWindow = document.getElementById("gameWindow");

const mainCharacter = document.getElementById("mainCharacter");

const mainCharacterSpeech = document.getElementById("mainCharacterSpeech");
const counterSpeech = document.getElementById("counterSpeech");

const characterAudio = document.getElementById("characterAudio");
const counterAudio = document.getElementById("counterAudio");


const sec = 1000;

gameWindow.onclick = function(e)
{
   var rect = gameWindow.getBoundingClientRect();
   var x = e.clientX - rect.left;  //X position within the element
   var y = e.clientY - rect.top;   //Y position within the element

   mainCharacter.style.left = x -32 + "px";   //Changing position to place of click
   mainCharacter.style.top = y  -32 + "px";    //Changing position to place of click
 



   console.log(e.target.id);
   {
        switch (e.target.id) 
        {

            case "Tree1":
                showMessage(mainCharacterSpeech, characterAudio,  "Kiss the tree, you won't.");
                break;
            case "door1":
                showMessage(mainCharacterSpeech, characterAudio, "Nobody is home... Maybe there is a key somewhere.");
                break;
            case "statue":
                showMessage(mainCharacterSpeech, characterAudio, "HOLY MAMA, that statue kinda hot.");
                setTimeout(function (){ counterCharacter.style.opacity = 1; }, 6 * sec );
                setTimeout(showMessage, 6 * sec , counterSpeech, counterAudio, "Speak for youself big boy...")
                setTimeout(showMessage, 12 * sec , mainCharacterSpeech, characterAudio, "Oh shit, that hot statue can talk!")
                setTimeout(showMessage, 18 * sec , counterSpeech, counterAudio, "Sure i can, and i know how to get you through that door.")
                setTimeout(showMessage, 24 * sec , mainCharacterSpeech, characterAudio, "Alright! What do i have to do?")
                setTimeout(showMessage, 30 * sec , counterSpeech, counterAudio, "Just go talk to one of the other statues, they can help you.")
                setTimeout(showMessage, 36 * sec , mainCharacterSpeech, characterAudio, "Thanks Mommmmmmmmmm... Ma'am, ma'am i meant to say ma'am.")
                setTimeout(showMessage, 42 * sec , counterSpeech, counterAudio, "Sure you did...")
                setTimeout(function (){ counterCharacter.style.opacity = 0; }, 48 * sec );
                break;
            default:
                hideMessage();
                break;
        }
    }
 
}


function showMessage(targetBubble, targetAudio,  message) 
{
    targetAudio.currentTime = 0;
    targetAudio.play();
   targetBubble.innerHTML = message;
   targetBubble.style.opacity = 1;
   setTimeout(hideMessage, 6 * sec, targetBubble, targetAudio);
}  

function hideMessage(targetBubble, targetAudio) 
{
    targetAudio.pause();
    targetBubble.innerHTML = "...";
    targetBubble.style.opacity = 0;
}
