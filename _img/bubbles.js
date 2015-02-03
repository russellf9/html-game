(function(window) {
bubble_instance_1 = function() {
	this.initialize();
}
bubble_instance_1._SpriteSheet = new createjs.SpriteSheet({images: ["bubbles.png"], frames: [[5,5,50,50,0,25,25],[60,5,50,50,0,25,25],[5,60,50,50,0,25,25],[60,60,50,50,0,25,25]]});
var bubble_instance_1_p = bubble_instance_1.prototype = new createjs.BitmapAnimation();
bubble_instance_1_p.BitmapAnimation_initialize = bubble_instance_1_p.initialize;
bubble_instance_1_p.initialize = function() {
	this.BitmapAnimation_initialize(bubble_instance_1._SpriteSheet);
	this.paused = false;
}
window.bubble_instance_1 = bubble_instance_1;
}(window));

