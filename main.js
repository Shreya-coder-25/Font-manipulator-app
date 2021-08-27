leftWristX= 0;
rightWristX= 0;
difference= 0;
function setup()
{
    video= createCapture(VIDEO);
    video.size(500,500);
    canvas=createCanvas(500,500);
    canvas.position(500,200);
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function draw()
{
    background("#d492f0");
    text("SHREYA",100,400);
    textSize(difference);
    document.getElementById("font_size").innerHTML="The width & height os the text are: "+difference+"px";
}
function  modelLoaded()
{
console.log("PoseNet is initialized");
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference= floor(leftWristX-rightWristX);
        console.log("leftWristX= "+leftWristX+"rightWristX= "+rightWristX+ "difference= "+difference);
    }
}
