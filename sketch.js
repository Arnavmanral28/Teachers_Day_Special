gameState = 0


function preload(){
  messageImage = loadAnimation("Images/1.png","Images/3.png","Images/4.png","Images/5.png","Images/6.png","Images/7.png","Images/8.png","Images/9.png","Images/10.png","Images/11.png","Images/12.png","Images/12.png","Images/13.png","Images/14.png","Images/15.png","Images/16.png","Images/17.png","Images/18.png")
}


function setup() {
    createCanvas(windowWidth,windowHeight); 

    message = createSprite(windowWidth/2,windowHeight/2);
    message.addAnimation("messgae",messageImage)
    message.scale = 2

    //start button
    start = createButton("Press Me");
    start.position(camera.position.x+windowWidth/2-90, windowHeight/2);
    start.style('background-color', color(17, 255, 0));
    start.style('font-size', '40px');
    start.style('font-family', 'Architects Daughter');
    start.style('border-radius','40px');
    start.style('border-width','10px');
    start.style('border-color','white');
    start.style('border-style','outset double outset double');


}

function draw() {
    
    if(gameState===0){
      
      background(0);
      start.show();

      start.mousePressed(()=>{
        gameState = 1;
      })

    }

    else if(gameState === 1){

      start.hide();
        
      drawSprites();

    }
      
  
}