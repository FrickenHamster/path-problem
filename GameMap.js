const NodeState = {
	OPEN: 0,
	BLOCKED: 1
}

class GameMap{
    constructor(width, height, layer) {
        this.width = width;
        this.height = height;
		this.grid = new PIXI.Graphics();
		layer.addChild(this.grid);
		this.map = [];

		this.grid.lineStyle(2, 0x000000);
		for (let i = 0; i <= this.height + 1; i++) {
			this.grid.moveTo(0, 40 * i);
			this.grid.lineTo(40 * (this.width + 1), 40 * i);
		}

		for (let i = 0; i <= this.width + 1; i++) {
			this.grid.moveTo(40 * i, 0);
			this.grid.lineTo(40 * i, 40 * (this.height + 1));
		}

        for (let i = 0; i < this.height; i++) {
			for (let j = 0; j < this.width; j++) {
				if (Math.random() < 0.3) {
					this.map[i * this.width + j] = NodeState.CLOSED;
					this.grid.beginFill(0x453453);
					this.grid.drawRect(j * 40, i* 40, 40, 40);
					this.grid.endFill();
				} else
					this.map[i * this.width + j] = NodeState.OPEN;
			}
		}
	}
	
	getNodeState(n) {
		return this.map[n];
	}

	getCoordState(x, y) {
		return this.map[y * this.width + x];
	}

	getNodeCoords(n) {
		return {
			x: n % this.width,
			y: Math.floor(n / this.width)
		}
	}
}