function Camera() {
	this.width = window.innerWidth;
	this.height = window.innerHeight;
	this.x = 0;
	this.y = 0;
	
	this.left = function(ctx) {			
			if(this.x > 0) {
				ctx.translate(2,0);	
				this.x -=2;							
			}				
	}

	this.right = function(ctx) {			
			if(this.x < 1200 && this.x < 50) {
				ctx.translate(-2,0);								
				this.x +=2;
			}
				
	}

	this.up = function(ctx) {								
			if(this.y > 0) {
				ctx.translate(0,2);		
				this.y -=2;
			}
				
	}

	this.down = function(ctx) {
			
			if(this.y < 1000) {
				ctx.translate(0,-2);									
				this.y +=2;
			}
			
	}
}

export { Camera }