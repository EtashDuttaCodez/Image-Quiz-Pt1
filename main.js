image_array=["ArcticFox.jpg","BlackMarlin.jpg","BlueWhale.jpg","BlackPanther.jpg"]
var SpeechRecognition = window.webkitSpeechRecognition
var recognition = new SpeechRecognition()

function Start() {
    document.getElementById("textbox").innerHTML = ""
    recognition.start()
}

recognition.onresult = function (event) {
    console.log(event)
    content = event.results[0][0].transcript
    console.log(content)
    document.getElementById("textbox").innerHTML = content
    if (content =="take my selfie"){
        Speak()
    }
       
}



function Speak() {
    synth = window.speechSynthesis;
    speakData = "taking your selfie in 5 seconds"
    utterthis = new SpeechSynthesisUtterance(speakData)
    synth.speak(utterthis)
}



    
