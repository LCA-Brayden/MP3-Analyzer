var graph = [];
var count = 0;
var momentGraph = [];

function preload(){
  sound = loadSound("data/GoodTimes.mp3");
}

function setup() {
  createCanvas(420,420);
  fft = new p5.FFT();
  sound.play();

  for(var i = 0; i< 15; i++){
    graph[i]=0;
    momentGraph[i] = 0;
  }

}

function draw(){
  background(255);
  fft.analyze();
  drawGraph(0,0,420,420);
  //drawMomentGraph(0,0,420,420);
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

    strokeWeight(4);
    stroke(0);
    fill(0,255,0);
    for(var i = 0; i< graph.length; i++){
      rect(x+i*(w/graph.length),y+h,w/graph.length,-map(graph[i],0,count/4,0,h));
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

    strokeWeight(4);
    stroke(0);
    fill(0,0,255);
    for(var i = 0; i<momentGraph.length; i++){
      rect(x+i*(w/momentGraph.length),y+h,w/momentGraph.length,-map(momentGraph[i],0,255,0,h));
    }




  }
