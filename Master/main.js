/* BECH MP3 Analyzer - main.js 
	This is the main file for our mp3 analysis project. This file is meant to contain most, if not all variable declarations, and to handle user
	input such as eventlisteners, start/stop buttons, etc. 
Authored by Brayden Mitchell, Henry Dustrude, and Christopher Hasselquist.*/

// Variable Initialization
var startBut, stopBut, pauseBut, playBut, uploadBut, nameSpan; //HTML Elements
var fileName; //File Name of sample/uploaded file. (String)
var scrubber; //Current time on audio file. (float)
var graph = [];
var count = 0;
var analyze;
var sound, src;
var graphMap, momentGraph = [];


function preload() {
	sound = loadSound("data/GoodTimes.mp3");
}

function setup() {
    createCanvas(420,420);
      fft = new p5.FFT();
      sound.play();

      for(var i = 0; i< 5; i++){
        graph[i]=0;
        }

	// Image/Shape Settings
    colorMode(RGB, 255);
    stroke(1);
    fill(0,255,0); // spectrum is green
    strokeCap(SQUARE);
    strokeJoin(MITER);
    noSmooth();
    ellipseMode(CENTER);

    // Text Display Settings
    textAlign(CENTER, CENTER);
    textLeading(25);
    textSize(15);
    textStyle(NORMAL);

    // Other Settings 

 //Variable Declarations
    // // Button/HTML Element initializations
    // uploadBut = document.querySelector(".upload");
    playBut = document.querySelector(".play");
    pauseBut = document.querySelector(".pause");
    startBut = document.querySelector(".start");
    stopBut = document.querySelector(".stop");
    nameSpan = document.getElementById("fileName");

    analyze = false;

    //Upload Button
       input.onchange = function(e) {
	   src = document.querySelector('sound');
	   src.src = URL.createObjectURL(this.files[0]);

	   src.onend = function(e) {
        origin/button(src-upload)
	   URL.revokeObjectURL(this.src);
	   }
    }

}

function draw() {
    fft.analyze();

  console.log(count);

	heyListen();
    analysis();
}

function heyListen() { //Adds event listeners to buttons & connects them to functions. 
	//uploadBut.addEventListener('click', uploadFile);
	playBut.addEventListener('click', playFile);
	pauseBut.addEventListener('click', pauseFile);
	startBut.addEventListener('click', startAnalysis);
	stopBut.addEventListener('click', stopAnalysis);
}


//Event Listener Functions
function uploadFile() { //Prompt user for an upload, and assign the file name to a string var (for display).
	//Called by upload button via Event Listener. 

    //Upload File & Set Scrubber/Song time to 0. Pause current analysis on call. 
}

function playFile() { //Take current file and begin play at set point. 
    sound.play();
}

function pauseFile() { //Take current file and stop play at set point - make sure to save current point in scrubber.
    sound.pause();
}

function startAnalysis() { //Clear all current data. Begin data analysis loop.
    //Clear all relevant data (Graph, count values only)
    //Make sure there is an audio file to play
    analyze = true;
}

function stopAnalysis() { //Stop current analysis loop - break with some sort of boolean (Say, an if statement within). 
    analyze = false;
    //Stop music
    //Reset timer on music

}

function analysis () {
    if (analyze==true) {
  graph[0] += fft.getEnergy("bass");
    count += fft.getEnergy("bass");
  graph[1] += fft.getEnergy("lowMid");
    count += fft.getEnergy("lowMid");
  graph[2] += fft.getEnergy("mid");
    count += fft.getEnergy("mid");
  graph[3] +=  fft.getEnergy("highMid");
    count += fft.getEnergy("highMid");
  graph[4] += fft.getEnergy("treble");
    count += fft.getEnergy("treble");

    bassMap = map(graph[0],0,count,0,420);
    lowMidMap = map(graph[1],0,count,0,420);
    midMap = map(graph[2],0,count,0,420);
    highMidMap = map(graph[3],0,count,0,420);
    trebleMap = map(graph[4],0,count,0,420);

    rect(0,height,width/5,-bassMap);
    rect(84,height,width/5,-lowMidMap);
    rect(168,height,width/5,-midMap);
    rect(252,height,width/5,-highMidMap);
    rect(336,height,width/5,-trebleMap);
    }

}

