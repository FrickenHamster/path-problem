'use strict';

const preloadedImages = [];
const imagePath = "images/";

function addImage(name, path) {
	preloadedImages.push({name: name, url: imagePath + path});
}


let loadedCallback;

function preloadGame(cb) {
	const loader = PIXI.loader;
	loadedCallback = cb;
    addImage('pooh', 'pooh.png');
    addImage('honey', 'honey.png');

	loader.add(preloadedImages)
		.on('progress', (loader, resource) => {

		}).load(() => {
		cb();
	});
}

