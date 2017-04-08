var graph = [];
var count = 0;
var momentGraph = [];

function preload(){
  sound = loadSound("data/GoodTimes.mp3");
}

function setup() {
  createCanvas(450,450);
  fft = new p5.FFT();
  sound.play();

  for(var i = 0; i< 15; i++){
    graph[i]=0;
    momentGraph[i] = 0;
  }

}

function draw(){
  background(0);
  fft.analyze();
  drawText(0,0,420,420);
  drawMomentGraph(0,0,420,420);
  drawGraph(0,0,420,420);
}

  function drawText(xPos,yPos,wPos,hPos){
    var x = xPos;
    var y = yPos;
    var w = wPos;
    var h = hPos;

    textSize(12);
    noStroke();
    fill(255);
    push();
    translate((x+15)+0*((w-15)/graph.length),y+h-5);
    rotate(PI/4);
    text("20",0,0);
    pop();
    push();
    translate((x+15)+1*((w-15)/graph.length),y+h-5);
    rotate(PI/4);
    text("60",0,0);
    pop();
    push();
    translate((x+15)+2*((w-15)/graph.length),y+h-5);
    rotate(PI/4);
    text("100",0,0);
    pop();
    push();
    translate((x+15)+3*((w-15)/graph.length),y+h-5);
    rotate(PI/4);
    text("140",0,0);
    pop();
    push();
    translate((x+15)+4*((w-15)/graph.length),y+h-5);
    rotate(PI/4);
    text("226",0,0);
    pop();
    push();
    translate((x+15)+5*((w-15)/graph.length),y+h-5);
    rotate(PI/4);
    text("312",0,0);
    pop();
    push();
    translate((x+15)+6*((w-15)/graph.length),y+h-5);
    rotate(PI/4);
    text("400",0,0);
    pop();
    push();
    translate((x+15)+7*((w-15)/graph.length),y+h-5);
    rotate(PI/4);
    text("1133",0,0);
    pop();
    push();
    translate((x+15)+8*((w-15)/graph.length),y+h-5);
    rotate(PI/4);
    text("1866",0,0);
    pop();
    push();
    translate((x+15)+9*((w-15)/graph.length),y+h-5);
    rotate(PI/4);
    text("1600",0,0);
    pop();
    push();
    translate((x+15)+10*((w-15)/graph.length),y+h-5);
    rotate(PI/4);
    text("3466",0,0);
    pop();
    push();
    translate((x+15)+11*((w-15)/graph.length),y+h-5);
    rotate(PI/4);
    text("4332",0,0);
    pop();
    push();
    translate((x+15)+12*((w-15)/graph.length),y+h-5);
    rotate(PI/4);
    text("5200",0,0);
    pop();
    push();
    translate((x+15)+13*((w-15)/graph.length),y+h-5);
    rotate(PI/4);
    text("8133",0,0);
    pop();
    push();
    translate((x+15)+14*((w-15)/graph.length),y+h-5);
    rotate(PI/4);
    text("11066",0,0);
    pop();
    push();
    translate((x+15)+15*((w-15)/graph.length),y+h-5);
    rotate(PI/4);
    text("14000",0,0);
    pop();
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
    fill(0,255,0);
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
    fill(0,0,255);
    for(var i = 0; i<momentGraph.length; i++){
      rect((x+15)+i*((w-15)/momentGraph.length),y+h-15,(w-15)/momentGraph.length,-map(momentGraph[i],0,236,0,h-15));
    }
  }
