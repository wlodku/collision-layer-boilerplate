function Square() {
	this.x = 200;
	this.y = 200;
	this.velocity = 0.2;
	this.limit = 300;



	this.update = function(delta) {
		this.x += this.velocity * delta;
    	
    	if (this.x >= this.limit || this.x <= 0) 
    		this.velocity = -this.velocity;		
	}	


	this.draw = function(ctx) {
		
		ctx.fillStyle = "blue";
		ctx.fillRect(this.x, this.y, 200, 120);        

	}
}

export { Square }