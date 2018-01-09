class GameMain {
    constructor(layer) {
		this.container = new PIXI.Container();
		layer.addChild(this.container);
		this.map = new GameMap(50, 50, this.container);
		let pp;
		do {
		pp = Math.floor(Math.random() * this.map.width * this.map.height);
		} while (this.map.getNodeState(pp) === NodeState.BLOCKED);
		this.pooh = new Pooh(this, this.map, this.container, pp);

		let hh;
		do {
		hh = Math.floor(Math.random() * this.map.width * this.map.height);
		} while (this.map.getNodeState(hh) === NodeState.BLOCKED || hh === pp);
		this.honey = new PIXI.Sprite(PIXI.loader.resources['honey'].texture);
		this.honey.anchor.set(0.5, 0.5);
		this.honeyNode = hh;
		this.honeyX = (hh % this.map.width);
		this.honeyY = Math.floor(hh / this.map.width);
		this.honey.position.x = (hh % this.map.width) * 40 + 20;
		this.honey.position.y = (Math.floor(hh / this.map.width)) * 40 + 20;
		this.container.addChild(this.honey);
		
		this.container.position.x = -this.pooh.xPos + 400;
		this.container.position.y = -this.pooh.yPos + 300;
	}
	
	update() {
		this.pooh.update();
		this.container.position.x = -this.pooh.xPos + 400;
		this.container.position.y = -this.pooh.yPos + 300;
	}
}