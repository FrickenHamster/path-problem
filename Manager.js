"use strict";

const TICK_RATE = 30;
const TICK_INTERVAL = 1000 / TICK_RATE;

class Manager {
	constructor() {
        this.renderer = PIXI.autoDetectRenderer(800, 600);
		this.renderer.backgroundColor = 0x887755;

		$('#gameContainer').append(this.renderer.view);
		
		preloadGame(_ => {
			this.stage = new PIXI.Container();
			this.gameMain = new GameMain(this.stage);
			this.renderer.render(this.stage);
			this.tick(); 
			const ticker = new PIXI.ticker.Ticker();
		ticker.stop();
		ticker.add((deltaTime) => {
			// do something every frame
			this.drawStep();
		});
		ticker.start();
		});
		
    }

    drawStep() {
		this.renderer.render(this.stage);
		/*requestAnimationFrame(_ => {
			this.drawStep();
		});*/
	}

	tick() {
		const curTime = getTime();

		const delta = ((curTime - this.prevTick) / TICK_INTERVAL);

		let timeOut = TICK_INTERVAL;
		if (delta > 1) {
			timeOut -= curTime - this.tarRate;
		}
		if (delta > 1.1) {
			timeOut /= delta;
		}

		this.gameMain.update();

		this.tarRate = curTime + TICK_INTERVAL;
		this.prevTick = curTime;
		setTimeout(() => {
			this.tick();
		}, timeOut);
	}

}

$(document).ready(() => {
	let type = "WebGL";
	if (!PIXI.utils.isWebGLSupported()) {
		type = "canvas"
	}

	PIXI.utils.sayHello(type);

	new Manager();
	
});

const tt = window.performance.now ? true : false;
function getTime() {
	if (tt)
		return window.performance.now();
	else
		return Date.now();
}
