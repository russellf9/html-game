'use strict';

var BubbleShoot = window.BubbleShoot || {};

BubbleShoot.Game = (function($) {
    var Game = function() {
        var curBubble;
        this.init = function() {
            console.log('init!');
            $('.but_start_game').bind('click', startGame);
        };
        var startGame = function() {
                $('.but_start_game').unbind('click');
                BubbleShoot.ui.hideDialog();
                curBubble = getNextBubble();
                $('#game').bind('click', clickGameScreen);
            },
            getNextBubble = function() {
                var bubble = BubbleShoot.Bubble.create();
                bubble.getSprite().addClass('cur_bubble');
                $('#board').append(bubble.getSprite());
                return bubble;
            },
            clickGameScreen = function(event) {
                var angle = BubbleShoot.ui.getBubbleAngle(curBubble.getSprite(), event),
                duration = 750,
                    distance = 1000,
                    distX = Math.sin(angle) * distance,
                    distY = Math.cos(angle) * distance,
                    bubbleCoords = BubbleShoot.ui.getBubbleCoords(curBubble.getSprite()),
                    coords = {
                        x: bubbleCoords.left + distX,
                        y: bubbleCoords.top - distY
                    };
                BubbleShoot.ui.fireBubble(curBubble, coords, duration);
            };
    };
    return Game;
})(jQuery);
