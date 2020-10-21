//generate the keyboard after the window loads

window.onload = function(){
  // synth = new Tone.Synth().toDestination();
  // synth.oscillator.type = "sine";
  generateKeys(20);
}


var newKey;
function generateKeys(numberOfKeys){
  //the order of piano keys is WBWBW-WBWBWBW
  //61 keys include both the black and the white keys
  //generate the keyboard by drawing the white keys first;
  //then draw the black keys on top

  var keyboard = document.getElementById("keyboard");
  var numberOfWhiteKeys = 0;

  // let i = 1;
  // let body = document.getElementsByTagName("body")[0];
  //
  // for (i; i <= 20; i++) {
  //   let button = document.createElement("button");
  //   button.innerHTML = 'Button ' + i;
  //   keyboard.appendChild(button);
  //   button.addEventListener("click", function() {
  //   test(this.innerHTML);
  //   });
  // }

  for (var i = 0; i < numberOfKeys; i++){
    if (i % 12 != 1 && i % 12 != 3 && i % 12 != 6 && i % 12 != 8 && i % 12 != 10){
      newKey = document.createElement("button");
      newKey.value = i;
      newKey.innerHTML = i;
      newKey.classList.add("whiteKey");
      newKey.style.position = "absolute";
      newKey.style.left = 28 * (numberOfWhiteKeys + 1) + "px";

      keyboard.appendChild(newKey);
      newKey.addEventListener("click", function() {
        playNote(this.value);
      });
      numberOfWhiteKeys++;
    }
    else {
      newKey = document.createElement("button");
      newKey.value = i;
      newKey.innerHTML = i;
      newKey.classList.add("blackKey");
      newKey.style.position = "absolute";
      newKey.style.left = 28 * (numberOfWhiteKeys + 0.7) + "px";
      newKey.style['z-index'] = 999;

      keyboard.appendChild(newKey);
      newKey.addEventListener("click", function() {
        playNote(this.value);
      });
    }
    // if (i % 12 != 1 && i % 12 != 3 && i % 12 != 6 && i % 12 != 8 && i % 12 != 10){
    //   newKey[i] = document.createElement("button");
    //   newKey[i].value = i;
    //   newKey[i].innerHTML = i;
    //   newKey[i].classList.add("whiteKey");
    //   newKey[i].style.position = "absolute";
    //   newKey[i].style.left = 28 * (numberOfWhiteKeys + 1) + "px";
    //
    //   keyboard.appendChild(newKey[i]);
    //   newKey[i].addEventListener("click", function() {
    //     playNote(this.value);
    //   });
    //   numberOfWhiteKeys++;
    // }
    // else {
    //   newKey[i] = document.createElement("button");
    //   newKey[i].value = i;
    //   newKey[i].innerHTML = i;
    //   newKey[i].classList.add("blackKey");
    //   newKey[i].style.position = "absolute";
    //   newKey[i].style.left = 28 * (numberOfWhiteKeys + 0.7) + "px";
    //   newKey[i].style['z-index'] = 999;
    //
    //   keyboard.appendChild(newKey[i]);
    //   newKey[i].addEventListener("click", function() {
    //     playNote(this.value);
    //   });
    // }
  }
  //newKey.onclick = playNote(event);
}



// function test(val){
//   console.log(val);
//   keyboard.addEventListener("mousedown", e => {
//     synth.triggerAttackRelease(100+(val*5));
//   });
//
//   keyboard.addEventListener("mouseup", e => {
//     synth.triggerRelease();
//   });
// }

function playNote (key){
  //initializes the sound synthesizer
  const synth = new Tone.Synth().toDestination();
  synth.oscillator.type = "sine";

  keyboard.addEventListener("mousedown", e => {
  console.log(key);

    synth.triggerAttack(100+(key*5));
  });
  keyboard.addEventListener("mouseup", e => {
    synth.triggerRelease();
  });



  // keyboard.addEventListener("mousedown", e => {
  //   synth.triggerAttack(e.target.dataset.note);
  // });
  // keyboard.addEventListener("mouseup", e => {
  //   synth.triggerRelease();
  // });


  //
  // const piano = document.getElementById("keyboard");
  //
  // piano.addEventListener("mousedown", e => {
  //   synth.triggerAttack(e.target.dataset.note);
  // });
  //
  // piano.addEventListener("mouseup", e => {
  //   synth.triggerRelease();
  // });



  //event.stopPropagation();
  //const synth = new Tone.Synth().toDestination();

  //convert the key value from the 0-60 range to the note frequency in Hz
  //https://en.wikipedia.org/wiki/Piano_key_frequencies (a 61-key keyboard
  //starts with the 16-th key of the standard piano
  //console.log(newKey.value);
  //synth.triggerAttackRelease(String(440*(2*((value-49)/12))));
  //synth.triggerAttackRelease(String(440-value));

  //this plays a standard-concert-pitch 440Hz tone
  //replace the 440 Hz with the frequency you computed above
//}

// //generate the keyboard after the window loads
//
// function generateKeys(numberOfKeys){
//   //the order of piano keys is WBWBW-WBWBWBW
//   //61 keys include both the black and the white keys
//   //generate the keyboard by drawing the white keys first;
//   //then draw the black keys on top
//
//   var ul = document.getElementById("keyboard");
//   staff = true;
//
//   for (var i = 1; i < numberOfKeys+1; i++) {
//     var keys = i;
//
//     if (staff == true && numberOfKeys%2 == 1){
//       var li = document.createElement('ul');
//       li.class = "key";
//       li.innerHTML = keys;
//       document.getElementById("piano").appendChild(li);
//     }
//     else if (staff == true && numberOfKeys%2 == 0){
//       var div = document.createElement('div');
//       div.class = "black-key";
//       div.innerHTML = keys;
//       document.getElementById("piano").appendChild(div);
//     }
//   }
 }
//
//
// //generateKeys(49);
//
// //convert the key value from the 0-60 range to the note frequency in Hz
// //https://en.wikipedia.org/wiki/Piano_key_frequencies (a 61-key keyboard
// //starts with the 16-th key of the standard piano
//
// //this plays a standard-concert-pitch 440Hz tone
// //replace the 440 Hz with the frequency you computed above
// //synth.triggerAttackRelease("440Hz", "8n");
//
// const synth = new Tone.Synth().toMaster();
// synth.oscillator.type = "sine";
//
// const piano = document.getElementById("piano");
//
// piano.addEventListener("mousedown", e => {
//   synth.triggerAttack(e.target.dataset.note);
// });
//
// piano.addEventListener("mouseup", e => {
//   synth.triggerRelease();
// });
// //
// // document.addEventListener("keydown", e => {
// //   Tone.start();
// //   switch (e.key) {
// //     case "d":
// //     return synth.triggerAttack("C4");
// //     case "r":
// //     return synth.triggerAttack("C#4");
// //     case "f":
// //     return synth.triggerAttack("D4");
// //     case "t":
// //     return synth.triggerAttack("D#4");
// //     case "g":
// //     return synth.triggerAttack("E4");
// //     case "h":
// //     return synth.triggerAttack("F4");
// //     case "u":
// //     return synth.triggerAttack("F#4");
// //     case "j":
// //     return synth.triggerAttack("G4");
// //     case "i":
// //     return synth.triggerAttack("G#4");
// //     case "k":
// //     return synth.triggerAttack("A4");
// //     case "o":
// //     return synth.triggerAttack("A#4");
// //     case "l":
// //     return synth.triggerAttack("B4");
// //     default:
// //     return;
// //   }
// // });
//
// // document.addEventListener("keyup", e => {
// //   switch (e.key) {
// //     case "d":
// //     case "r":
// //     case "f":
// //     case "t":
// //     case "g":
// //     case "h":
// //     case "u":
// //     case "j":
// //     case "i":
// //     case "k":
// //     case "o":
// //     case "l":
// //     synth.triggerRelease();
// //   }
// // });
