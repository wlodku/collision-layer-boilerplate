function World(grid) {
	
	
	this.img = new Image(); 
	this.img.src = "img/tiles.png";
	
	
	
	this.grid = grid;

	this.draw = function(ctx) {
		var tileSize = 32;       // The size of a tile (32×32)
		var rowTileCount = 100;   // The number of tiles in a row of our background
		var colTileCount = 100;   // The number of tiles in a column of our background
		var imageNumTiles = 16;  // The number of tiles per row in the tileset image

		for(var i = 0; i< this.grid.length; i++) {
			for(var j = 0; j < this.grid[i].length; j++) {
				var tile = this.grid[i][j];				
         		var tileRow = (tile / imageNumTiles) | 0; // Bitwise OR operation
         		var tileCol = (tile % imageNumTiles) | 0;
				ctx.drawImage(this.img, (tileCol * tileSize), (tileRow * tileSize), tileSize, tileSize, (j * tileSize), (i * tileSize), tileSize, tileSize);								
			}
		}
	}
	this.collidingObjects = [];

	this.drawCollision = () => {
		for(let i = 0; i < this.grid.length; i++) {
			for(let j = 0; j < this.grid[i].length; j++) {
				if(grid[i][j] != -1) {
					this.collidingObjects.push( {
						x: j*32,
						y: i*32,
						height: 32,
						width: 32
					})
				}	
			}
 		}
	}
}

export { World }