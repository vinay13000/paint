var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent="empty";
var last_position_of_x,last_position_of_y;


canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent="mouseDown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUP";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    var color1=document.getElementById("color").value;
    var width1=document.getElementById("width").value;
    var radius1=document.getElementById("radius").value;

    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color1;
        ctx.lineWidth=width1;
        ctx.radius=radius1;
        
        console.log("last_position_of_xandy=");
        console.log("x=" + last_position_of_x + "y=" + last_position_of_y);
        ctx.moveTo(last_position_of_x,last_position_of_y);
        console.log("current_position_of_mouse_x,current_position_of_mouse_y");
        console.log("current position of x=" + current_position_of_mouse_x + "current position of y=" + current_position_of_mouse_y);
        ctx.tri(current_position_of_mouse_x,current_position_of_mouse_y,radius1,0,2*Math.PI);
        ctx.stroke();
    }
    last_position_of_x=current_position_of_mouse_x;
    last_position_of_y=current_position_of_mouse_y;
}
function cleararea(){
    ctx.clearRect(0,0,screen.width,screen.height);
}
