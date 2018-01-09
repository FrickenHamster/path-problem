
class Pooh {
	constructor(main, map, layer, node) {
		this.main = main;
		this.map = map;
		this.layer = layer;
		this.node = node;
		this.coords = this.map.getNodeCoords(node);
		this.xPos = (node % map.width) * 40 + 20;
		this.yPos = (Math.floor(node / map.width)) * 40 + 20;
		this.sprite = new PIXI.Sprite(PIXI.loader.resources['pooh'].texture);
		this.sprite.anchor.set(0.5, 0.5);
		layer.addChild(this.sprite);
		this.sprite.position.x = this.xPos;
		this.sprite.position.y = this.yPos;
		this.moving = false;

		this.path = this.findHoney(map, this.main.honeyX, this.main.honeyY);
		this.tarNode = this.path.shift();
		this.tarCoords = this.map.getNodeCoords(this.tarNode);
		this.xSpeed = (this.tarCoords.x - this.coords.x) * 40 / 5;
		this.ySpeed = (this.tarCoords.y - this.coords.y) * 40 / 5;
		this.count = 5;
		this.moving = true;

	}

	update() {
		
		if (this.moving) {
			if (this.count <= 0) {
				this.node = this.tarNode;
				this.coords = this.map.getNodeCoords(this.node);
				if (this.path.length <= 0) {
					this.moving = false;
					return;
				}
				this.tarNode = this.path.shift();
				this.tarCoords = this.map.getNodeCoords(this.tarNode);
				
				
				this.xSpeed = (this.tarCoords.x - this.coords.x) * 40 / 5;
				this.ySpeed = (this.tarCoords.y - this.coords.y) * 40 / 5;
				this.count = 5;
			}
			this.count--;
			this.xPos += this.xSpeed;
			this.yPos += this.ySpeed;
			
			this.sprite.position.x = this.xPos;
			this.sprite.position.y = this.yPos;
		}
	}


	findHoney(map, honeyPos) {
		//example, return the answer as an array of node values
		return [54,55,56,57,58];
	}
	
}
