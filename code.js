var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//create sprites

var boy = createSprite(380,377,15,15)
boy.shapeColor = "blue"
var wall1 = createSprite(245,290,310,15)
wall1.shapeColor = "red"
var wall2 = createSprite(15,290,40,15)
wall2.shapeColor = "red"
var wall3 = createSprite(100,150,390,15)
wall3.shapeColor = "red"
var wall4 = createSprite(380,150,60,15)
wall4.shapeColor = "red"
//create counter
var goal = 0
var life = 5



ball1 = createSprite(200,380,15,15)
ball1.shapeColor = "black"
ball2 = createSprite(385,225,15,15)
ball2.shapeColor = "black"
ball3 = createSprite(175,15,15,15)
ball3.shapeColor = "black"
end = createSprite(10,70,15,70)
end.shapeColor = "yellow"
//set velocity
ball1.setVelocity(0,7)
ball2.setVelocity(15,0)
ball3.setVelocity(0,9)



















function draw() {
  background("green")
  createEdgeSprites()
  ball1.bounceOff(wall1)
  ball1.bounceOff(edges)
  ball2.bounceOff(edges)
  ball3.bounceOff(wall3)
  ball3.bounceOff(edges)
  boy.collide(edges)
  boy.collide(wall1)
  boy.collide(wall2)
  boy.collide(wall3)
  boy.collide(wall4)
  boy.collide(end)
  
  
  
  if (keyDown(UP_ARROW)) {
    boy.y=boy.y-4
  }
  if (keyDown(DOWN_ARROW)) {
    boy.y=boy.y+4
  }
  if (keyDown(LEFT_ARROW)) {
    boy.x=boy.x-4
  }
  if (keyDown(RIGHT_ARROW)) {
    boy.x=boy.x+4
  }
  if (boy.isTouching(ball1)|| boy.isTouching(ball2)||boy.isTouching(ball3)) {
  playSound("assets/category_hits/vibrant_game_arcade_game_negative_hit_5.mp3", false);
  boy.x=380
  boy.y=377
  life=life-1
}
  if (boy.isTouching(end)) {
    playSound("assets/category_hits/vibrant_slot_change_lock_1.mp3", false);
     boy.x=380
     boy.y=377
     goal=goal+1
  }
  
  textSize(20)
  fill("yellow")
  text("goal:"+goal, 340, 25)
  
  textSize(20)
  fill("yellow")
  text("life:"+life, 290, 25)
 
 if (life === 0) {
   textSize(20)
   fill("red")
   text("Game Over!", 200, 200)
   ball1.setVelocity(0,0)
   ball2.setVelocity(0,0)
   ball3.setVelocity(0,0)
 }
 
  if (goal === 5) {
   textSize(20)
   fill("lime")
   text("You Win!", 200, 200)
   ball1.setVelocity(0,0)
   ball2.setVelocity(0,0)
   ball3.setVelocity(0,0)
 }
 
 
 
 
 
 
 
  drawSprites()
}




















// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
