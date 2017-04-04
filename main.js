/* BECH MP3 Analyzer - main.js 
	This is the main file for our mp3 analysis project. This file is meant to contain most, if not all variable declarations, and to handle user
	input such as eventlisteners, start/stop buttons, etc. 
Authored by Brayden Mitchell, Henry Dustrude, and Christopher Hasselquist.*/

// Variable Initialization
var startBut, stopBut, pauseBut, playBut, uploadBut, nameSpan; //HTML Elements
var fileName; //File Name of sample/uploaded file. (String)
var scrubber; //Current time on audio file. (float)
var graphPos, bassLvl, lmLvl, midLvl, hmLvl, trebLvl; //Bar Graph variables (Dimensions & Height of bars)


function preload() {
	//Currently Empty
}

function setup() {
	// Image/Shape Settings
    colorMode(RGB, 255);
    noStroke();
    fill(200);
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
    // noLoop();

 //Variable Declarations
    // Button/HTML Element initializations
    uploadBut = document.querySelector(".upload");
    playBut = document.querySelector(".play");
    pauseBut = document.querySelector(".pause");
    startBut = document.querySelector(".start");
    stopBut = document.querySelector(".stop");
    nameSpan = document.getElementById("fileName");
}

function draw() {


	heyListen();
}

function heyListen() { //Adds event listeners to buttons & connects them to functions. 
	uploadBut.addEventListener('click', uploadFile);
	playBut.addEventListener('click', playFile);
	pauseBut.addEventListener('click', pauseFile);
	startBut.addEventListener('click', startAnalysis);
	stopBut.addEventListener('click', stopAnalysis);
}


//Event Listener Functions
function uploadFile() { //Prompt user for an upload, and assign the file name to a string var (for display).
	//Called by upload button via Event Listener. 

}

function playFile() { //Take current file and begin play at set point. 

}

function pauseFile() { //Take current file and stop play at set point - make sure to save current point in scrubber.

}

function startAnalysis() { //Clear all current data. Begin data analysis loop.

}

function stopAnalysis() { //Stop current analysis loop - break with some sort of boolean (Say, an if statement within). 

}