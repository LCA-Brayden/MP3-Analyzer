var graph = [];
var count = 0;
var bassMap,lowMidMap,midMap,highMidMap,trebleMap;

function preload(){
  sound = loadSound("data/GoodTimes.mp3");
}

function setup() {
  createCanvas(420,420);
  fft = new p5.FFT();
  sound.play();

  for(var i = 0; i< 5; i++){
    graph[i]=0;
  }
}

function draw(){
  background(0);

   fft.analyze();

   noStroke();
   fill(0,255,0); // spectrum is green

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

  console.log(count);

}
