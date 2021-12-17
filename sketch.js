var currentSlide=1;
var totalSlides= 9;
//var dialSlides = 6;
var nextBtnX = 960 -150;
var nextBtnY= 640-75;

/*these for the button in silide 6*/
var btx = 710; /*960-150-100*/
var bty = nextBtnY;
var bth =40;
var btw =100;

var backBtnX =100;
var backBtnY = nextBtnY;

var btnW= 100;
var btnH= 40;

let src;
let mys;
let robberImg;
let police;


var backg;
var will;
var will2;
var Siren;
var glass;
var laugh;
var phone;
var arrested;
var glassimg;
var news;
var policesiren;

var robberX,robberY;
 var words = ['you cannot catch us.'];
let index = 0;


//var robber ={
  /*x:random(50,500),
  y:random(100,500),*/
  
//  let word = random(words);

   
  //display:function(){
    //for (let x=random(0,500); x <=width; x+=300){
  //   for(let y= random(0,500); y<height;y+=400){
  //  if(mouseIsPressed){
      //noLoop();
   //  fill(255);
       
  //  rect(x-100,y-50,200,50,20);
  //     fill(0);
  //     textSize(18);
  //     text(words[index],x-80,y-30,200,100);
 //      image(robberImg,x,y,100,100);
         
      
   // }else{
       
     //  image(robberImg,x,y,100,100);
       
      
    // }
   
      
 // }
  
  //} 
 // }
  
  
//}





function preload(){
src =loadImage('Images/screenshot.png');
mys=loadImage('Images/mystery.png');
robberImg=loadImage('Images/robber.png');
police=loadImage('Images/police.png');
backg=loadImage('Images/backg.png');
will=loadImage('Images/will.jpg')
will2=loadImage('Images/will2.png')
//Siren=loadSound()
glass=loadSound('glass-break.wav');
glassimg=loadImage('glassbreak.jpeg');
laugh=loadSound('evillaugh.wav');
phone=loadImage('Images/phone.png');
arrested=loadImage('Images/arrested.png');
policesiren=loadSound('policesiren.wav');
news=loadImage('NEWS.png')
}

function setup() {
  createCanvas(960, 640);
  
  robberX = random(50,700);
  robberY = random(100,650);
  
}

function draw() {
  


  background(5, 30, 77);

  //slides
  if (currentSlide ==1){
    textSize(60);
    fill(235, 158, 52);
    
    textAlign(CENTER,CENTER);
    //here to fill the own title
    
    /* the silide 2*/
    image(backg,0,200,960,540);
    textFont('Lobster');
    stroke(43, 26, 173);
    strokeWeight(7); 
    text('A Day of William in LA',width/2,height/2);
    
  }else if(currentSlide ==2){
    //description,theme
    
    image(will,0,0,960,640);
    fill(255);
    noStroke();
    textAlign(LEFT);
    textSize(20);
    textFont('Ubuntu');
    text('William is a guy who living in LA.He work at a small company as a software developer. Coding is a tough job, so he works very hard. ',100,50,500);
    
    
  } else if(currentSlide ==3){
    //description,theme
    image(will2,0,0,960,640);
    fill(255);
    noStroke();
    textFont('Ubuntu');
    textSize(20);
    text('In Friday, he finally off work early and decide go to downtown LA to have a drink for relax. Suddenly,He  is hearing something...... ',80,50,400);
    fill(255);
    noStroke();
    textSize(18);
    textFont('Ubuntu');
    text(' Friendly reminder: lower your sound volume before you go to next page',700,480,250);
   
  }else if(currentSlide ==4){
    //description,theme
    image(glassimg,0,0,960,640);
  fill(255);
    noStroke();
    textAlign(LEFT);
    textSize(30);
    textFont('Ubuntu');
    text('Oh no! A bunch of robber are using hammer to break the glass of store!',400,450,500);
   //glass.play();
    
  }else if (currentSlide ==5){
    
    fill(255);
    noStroke();
    textAlign(LEFT);
    textFont('Ubuntu');
    textSize(30);
    text('Please press the mouse to catch them!',100,300,400);
    fill(255);
    noStroke();
    textAlign(LEFT);
    textFont('Ubuntu');
    textSize(20);
    text('Afterthat,these robbers grab a lot of goods from the luxury store.Now, they are running on the street! ',100,100,400);
 
      robber_show();
   
  }else if (currentSlide ==6){
  
  fill(255);
  noStroke();
    textAlign(LEFT);
    textFont('Ubuntu');
    textSize(20);
    text('These arrogant criminals run and laugh, as if the law is just a piece of useless paper in their eyes.William take out his cell phone, thinking it is time to make a decision.',80,50,400);
    image(phone,0,100,960,640);
  

  } else if (currentSlide ==7){
   
      fill(255);
  noStroke();
    textFont('Ubuntu');
    textAlign(LEFT);
    textSize(20);
    text('The timid William just stand by and watched everything. He thought other people would help, so he walk away in fear. ',50,50,400);
    text('Other people got same idea with William.So, nobody come to help. In next following days,those robbers looted the HomeDeopt.They robbed everything including the hammer.  ',50,250,400);
    image(news,480,20,480,620);
    
  
  } else if (currentSlide ==8){
    fill(255);
  noStroke();
    textFont('Ubuntu');
    textAlign(LEFT);
    textSize(20);
    text('The brave William dial 911 and report everything. Soon, he joined the cops to catch criminals together!',80,50,400);
    
    text('William influences other people. They joined the cops together. Soon, cops arrest all the criminals.', 80,150,400);
    image(arrested,100,100,860,540);
    
  } else if(currentSlide ==9){
    fill(235, 158, 52);
    noStroke();
    textAlign(LEFT);
    textFont('Lobster');
    textSize(40);
    text('Sometimes, a small decision of would can change the  entire world.Perhaps this is the butterfly effect',200,200,500);
  }
     //draw buttons
  if (currentSlide < totalSlides){
 button(nextBtnX,nextBtnY,'Next');
    
  
  }if (currentSlide == 6){
 button(nextBtnX,nextBtnY,'Dial911');

 
    
    
 
   
 }if (currentSlide >1){
     button(backBtnX,nextBtnY,'Back');
  } if (currentSlide == 6){
    button(backBtnX,nextBtnY,'Ignore');
  }

}





  

//displaying button
  function button(x,y,displayText){
    
  
//draw buttons
    /*this one for the color inside the button*/
   fill(255);
  stroke('blue');
  if (mouseX > x && mouseX < x + btnW && mouseY > y && mouseY < y + btnH){
    fill('pink');
    if(mouseIsPressed){
    
      stroke('yellow');
     
    }
  }
    
 // fill(255);
 
 strokeWeight(2);
  rect(x,y,btnW,btnH,15);
  
  fill('blue');
  textSize(25);
  noStroke();
  textAlign(CENTER,CENTER);
  text(displayText,x+50,y+25);
}


function mousePressed(){
  /* next button*/

  
if(mouseX > nextBtnX && mouseX < nextBtnX + btnW && mouseY >nextBtnY && mouseY<nextBtnY +btnH){
 if(currentSlide==6){

  currentSlide=8;

// } else {

//  if(currentSlide < totalSlides){

//  currentSlide++;

//  }
 } else if(currentSlide==7){
 
    currentSlide=9;
  
  } else {
     if(currentSlide < totalSlides){
        currentSlide++;
     }
  }
    
}
  
  // over the back button
  if(mouseX > backBtnX && mouseX < backBtnX + btnW && mouseY >backBtnY && mouseY<backBtnY +btnH){

    if(currentSlide ==6 ){
      currentSlide=7;
    
   }else if(currentSlide==8){
     currentSlide=6;
 //   }
  }else{
    
  if (currentSlide > 1){

   currentSlide--;

  } 
  }
}

    
  

  

 
 
 
  
 if (currentSlide==5) {
   //randomize the variables ONCE
   robberX = random(50,600);
   robberY = random(50,750);
   //THEN run the function if we want
   robber_show();
   //laugh.play();
}
 if(currentSlide==4){
    glass.play();
  } 
  if(currentSlide==8){
    policesiren.play();
  }
}

 

function keyPressed(){
  if(keyCode ==39){//right arrow
    if (currentSlide < totalSlides){
      currentSlide++;
    }
  }
  if(keyCode ==37){//left arrow
    if(currentSlide >1){
      currentSlide--;
    }
    
  }
}
  
function robber_show(){

  // background(200);
  /*should makes these variable to be local variable the function would read*/

  
  /* begining at here*/
  for ( x=robberX; x <=width; x+=300){
     for( y=robberY; y<height; y+=300){
    if(mouseIsPressed){
      fill(255);
       
       rect(x-100,y-50,200,50,20);
       fill(0);
       textSize(18);
       text(words,x-80,y-30);
       image(robberImg,x,y,160,180);
    }else{
       image(robberImg,x,y,160,180);
     }
   
      
  }
  
  } /*end of here*/
  }
  