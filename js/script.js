import { Player } from './player.js';
import { Camera } from './camera.js';
import { World } from './world.js';
import { grid1 } from './layer1.js';
import { grid2 } from './layer2.js';
import { collision_layer } from './layer_collision.js';

let left, right, up, down = false;




function push(event) {
    var keyCode = event.keyCode;
    switch (keyCode) {
        case 37: //d
            left = true;              
            right = false;              
            break;
        case 38: //s
            up = true;
            down = false;              
            break;
        case 39: //a
            right = true;
            left = false;              
            break;
        case 40: //w
            down = true;
            up = false;              
            break;
    }

    event.stopPropagation();
    event.preventDefault();
}

function release(event) {
  var keyCode = event.keyCode;
  switch (keyCode) {
      case 37:
          left = false;
          break;
      case 38:
          up = false;
          break;
      case 39:
          right = false;
          break;
      case 40:
          down = false;
          break;
  }
}

// code from https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
function collision(rect1, rect2) {
    if(rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.y + rect1.height > rect2.y ) {
        return true;
    }
}

//3. Template for a function which compares players cords with every object from collidingObjects array
function isCollision(player, obstacles) {            
    obstacles.forEach(element => {        
        if(collision(player, element)) {                
            console.log('bang');                       
        }                        
    });        
}


const canvas = document.getElementById('root');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');

const dragon = new Player();
const camera = new Camera();
const layer1 = new World(grid1);
const layer2 = new World(grid2);

//1. Create third layer - with collision
const collisionLayer = new World(collision_layer);

//2. Populate array with colliding object (check world.js for details)
collisionLayer.drawCollision();

window.addEventListener('keydown', push, false);
window.addEventListener('keyup', release, false);

window.addEventListener('load', () => {

    let delta = 0;

	function update(delta) {
        //5. Trigger isCollision() method, is this a best place for it?
        isCollision(dragon, collisionLayer.collidingObjects);

		if(down) {
            dragon.forward(delta);
            camera.down(c);
        }
			
		if(up) {
            dragon.back(delta);
            camera.up(c);
        }
			
		if(left) {
            dragon.left(delta);
            camera.left(c);
        }
			
		if(right) {
            dragon.right(delta);
            camera.right(c);
        }
		
	}

	function draw() {
		c.clearRect(0, 0, canvas.width, canvas.height);        
        layer1.draw(c);
		dragon.draw(c);  
        layer2.draw(c);  
        
        //4. Draw collisionLayer. Comment line below for disable.
        collisionLayer.draw(c);
	}

    function mainLoop() {       
        update();
        draw();
        requestAnimationFrame(mainLoop);
      }
  
    requestAnimationFrame(mainLoop);
	
});





