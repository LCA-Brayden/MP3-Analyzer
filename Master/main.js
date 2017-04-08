/* BECH MP3 Analyzer - main.js 
	This is the main file for our mp3 analysis project. This file is meant to contain most, if not all variable declarations, and to handle user
	input such as eventlisteners, start/stop buttons, etc. 
Authored by Brayden Mitchell, Henry Dustrude, and Christopher Hasselquist.*/

// Variable Initialization
var startBut, stopBut, pauseBut, playBut, uploadBut, nameSpan; //HTML Elements
var fileName; //File Name of sample/uploaded file. (String)
var scrubber; //Current time on audio file. (float)
var analyze;
var sound, src;

var graph = [];
var count = 0;
var momentGraph = [];


function preload() {
	sound = loadSound("data/GoodTimes.mp3");
}

function setup() {
    createCanvas(420,420);
    fft = new p5.FFT();

    for(var i = 0; i< 15; i++){
        graph[i]=0;
        momentGraph[i] = 0;
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
    scrubber = 0;
    sound.playMode('sustain');

    heyListen();
}

function draw() {
    fft.analyze();
    background(0);
    console.log(count);

    scrubber = sound.currentTime();

    if (analyze==true) {
        drawMomentGraph(0,0,420,420);
        drawGraph(0,0,420,420);
    }
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

  function drawGraph(xPos,yPos,wPos,hPos){
    var x = xPos;
    var y = yPos;
    var w = wPos;
    var h = hPos;

    graph[0] += fft.getEnergy(20,[60]);
      count += fft.getEnergy(20,[60]);
    graph[1] += fft.getEnergy(60,[100]);
      count += fft.getEnergy(60,[100]);
    graph[2] += fft.getEnergy(100,[140]);
      count += fft.getEnergy(100,[140]);
    graph[3] += fft.getEnergy(140,[226]);
      count += fft.getEnergy(140,[226]);
    graph[4] += fft.getEnergy(226,[312]);
      count += fft.getEnergy(226,[312]);
    graph[5] += fft.getEnergy(312,[400]);
      count += fft.getEnergy(312,[400]);
    graph[6] += fft.getEnergy(400,[1133]);
      count += fft.getEnergy(400,[1133]);
    graph[7] += fft.getEnergy(1133,[1866]);
      count += fft.getEnergy(1133,[1866]);
    graph[8] += fft.getEnergy(1866,[2600]);
      count += fft.getEnergy(1866,[2600]);
    graph[9] += fft.getEnergy(2600,[3466]);
      count += fft.getEnergy(2600,[3466]);
    graph[10] += fft.getEnergy(3466,[4332]);
      count += fft.getEnergy(3466,[4332]);
    graph[11] += fft.getEnergy(4332,[5200]);
      count += fft.getEnergy(4332,[5200]);
    graph[12] += fft.getEnergy(8133,[11066]);
      count += fft.getEnergy(8133,[11066]);
    graph[13] += fft.getEnergy(8133,[11066]);
      count += fft.getEnergy(8133,[11066]);
    graph[14] += fft.getEnergy(11066,[14000]);
      count += fft.getEnergy(11066,[14000]);

    strokeWeight(5);
    stroke(0);
    line(x+15,y,x+15,y+h-15);
    line(x+15,y+h-15,x+w,y+h-15);

    strokeWeight(4);
    stroke(0);
    fill(0,255,0,220);
    for(var i = 0; i< graph.length; i++){
      rect((x+15)+i*((w-15)/graph.length),y+h-15,(w-15)/graph.length,-map(graph[i],0,count/4,0,h-15));
    }

  }

  function drawMomentGraph(xPos,yPos,wPos,hPos){
    var x = xPos;
    var y = yPos;
    var w = wPos;
    var h = hPos;

    momentGraph[0] = fft.getEnergy(20,[60]);
    momentGraph[1] = fft.getEnergy(60,[100]);
    momentGraph[2] = fft.getEnergy(100,[140]);
    momentGraph[3] = fft.getEnergy(140,[226]);
    momentGraph[4] = fft.getEnergy(226,[312]);
    momentGraph[5] = fft.getEnergy(312,[400]);
    momentGraph[6] = fft.getEnergy(400,[1133]);
    momentGraph[7] = fft.getEnergy(1133,[1866]);
    momentGraph[8] = fft.getEnergy(1866,[2600]);
    momentGraph[9] = fft.getEnergy(2600,[3466]);
    momentGraph[10] = fft.getEnergy(3466,[4332]);
    momentGraph[11] = fft.getEnergy(4332,[5200]);
    momentGraph[12] = fft.getEnergy(8133,[11066]);
    momentGraph[13] = fft.getEnergy(8133,[11066]);
    momentGraph[14] = fft.getEnergy(11066,[14000]);

    strokeWeight(5);
    stroke(0);
    line(x+15,y,x+15,y+h-15);
    line(x+15,y+h-15,x+w,y+h-15);

    strokeWeight(4);
    stroke(0);
    fill(0,0,255,220);
    for(var i = 0; i<momentGraph.length; i++){
      rect((x+15)+i*((w-15)/momentGraph.length),y+h-15,(w-15)/momentGraph.length,-map(momentGraph[i],0,255,0,h-15));
    }
  }

