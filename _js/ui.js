'use strict';

var BubbleShoot = window.BubbleShoot || {};

BubbleShoot.ui = (function($) {
    var ui = {
        BUBBLE_DIMS: 50, //44,
        ROW_HEIGHT: 45, //40,
        init: function() {
        },
        hideDialog: function() {
            $('.dialog').fadeOut(300);
        },
        getMouseCoords: function(event) {
            var coords = {x: event.pageX, y: event.pageY};
            return coords;
        },
        getBubbleCoords: function(bubble) {
            var bubbleCoords = bubble.position();
            bubbleCoords.left += ui.BUBBLE_DIMS / 2;
            bubbleCoords.top += ui.BUBBLE_DIMS / 2;
            return bubbleCoords;
        },
        getBubbleAngle: function(bubble, e) {
            var mouseCoords = ui.getMouseCoords(e),
                bubbleCoords = ui.getBubbleCoords(bubble),
                gameCoords = $('#game').position(),
                boardLeft = 120,
                angle = Math.atan((mouseCoords.x - bubbleCoords.left - boardLeft) / (bubbleCoords.top + gameCoords.top - mouseCoords.y));
            if (mouseCoords.y > bubbleCoords.top + gameCoords.top) {
                angle += Math.PI;
            }
            return angle;
        },
        fireBubble: function(bubble, coords, duration) {
            bubble.getSprite().animate({
                    left: coords.x - ui.BUBBLE_DIMS / 2,
                    top: coords.y - ui.BUBBLE_DIMS / 2
                },
                {
                    duration: duration,
                    easing: 'linear'
                });
        },
        drawBoard: function(board) {
            var rows = board.getRows(),
                gameArea = $('#board');
            for (var i = 0; i < rows.length; i++) {
                var row = rows[i];
                for (var j = 0; j < row.length; j++) {
                    var bubble = row[j];
                    if (bubble) {
                        var sprite = bubble.getSprite();
                        gameArea.append(sprite);
                        var left = j * ui.BUBBLE_DIMS / 2,
                            top = i * ui.ROW_HEIGHT;
                        sprite.css({
                            left: left,
                            top: top
                        });
                    }
                }
            }
        },
        drawBubblesRemaining: function(numBubbles) {
            $('#bubbles_remaining').text(numBubbles);
        }
    };
    return ui;
})(jQuery);
