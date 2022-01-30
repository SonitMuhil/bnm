function setup(){
video = createCapture(VIDEO);
video.size(550, 500);

canvas = createCanvas(500, 450);
canvas.position(790, 95);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}

function draw(){
    background('#969A97');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}