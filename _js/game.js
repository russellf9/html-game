var BubbleShoot = window.BubbleShoot || {};

BubbleShoot.Game = (function($) {
	var Game = function() {
		this.init = function() {
			console.log('init!');
			$('.but_start_game').bind('click', startGame);
		};
		var startGame = function() {
			$('.but_start_game').unbind('click');
			BubbleShoot.ui.hideDialog();
		};


	};
	return Game;
})(jQuery);