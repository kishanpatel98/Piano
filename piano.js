//generate the keyboard after the window loads
window.onload = function(){
  generatePiano(61);
}


function generatePiano(numberOfKeys){
  //the order of piano keys is WBWBW-WBWBWBW
  //61 keys include both the black and the white keys
  //generate the keyboard by drawing the white keys first. Then draw the black keys on top
  var newKey;
  var keyboard = document.getElementById("keyboard");
  var numberOfKeysDrawn = 0;
  for (var i = 0; i < numberOfKeys; i++){
    if (i % 12 != 1 &&
      i % 12 != 3 &&
      i % 12 != 6 &&
      i % 12 != 8 &&
      i % 12 != 10){ //if not black
        generateKeys(i, "white", numberOfKeysDrawn, 1);
        numberOfKeysDrawn++;
      }
      else { // else black
        generateKeys(i, "black", numberOfKeysDrawn, 0.7);
      }
    }
  }

  function generateKeys(keyVal, color, keyNum, keyWidth){
    newKey = document.createElement("button");
    newKey.value = keyVal;
    newKey.innerHTML = keyVal;
    newKey.classList.add(color + "Key");
    newKey.style.position = "absolute";
    newKey.style.left = 28 * (keyNum + keyWidth) + "px";
    if(color == "black"){
      newKey.style['z-index'] = 999;
    }

    keyboard.appendChild(newKey);
    newKey.addEventListener("click", function() {
      playNote(this.value);
    });
  }

  function playNote (key){
    //initializes the sound synthesizer
    const synth = new Tone.Synth().toDestination();

    //convert the key value from the key range to the note frequency in Hz starting with the 16-th key of the standard piano
    //https://en.wikipedia.org/wiki/Piano_key_frequencies
    var note = 2 ** ((key - 34) / 12) * 440;
    synth.triggerAttackRelease(note + "Hz", "8n");
  }
