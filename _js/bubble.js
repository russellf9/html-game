'use strict';

var BubbleShoot = window.BubbleShoot || {};

BubbleShoot.Bubble = (function($) {
    var Bubble = function(row, column, type, sprite) {
        var that = this;
        this.getType = function() {
            return type;
        };
        this.getSprite = function() {
            return sprite;
        };
        this.getCol = function() {
            return column;
        };
        this.setCol = function(colIn) {
            column = colIn;
        };
        this.getRow = function() {
            return row;
        };
        this.setRow = function(rowIn) {
            row = rowIn;
        };
        this.getCoords = function() {
            var coords = {
                left: that.getCol() * BubbleShoot.ui.BUBBLE_DIMS / 2 + BubbleShoot.ui.BUBBLE_DIMS / 2,
                top: that.getRow() * BubbleShoot.ui.ROW_HEIGHT + BubbleShoot.ui.BUBBLE_DIMS / 2
            };
            return coords;
        };
    };
    Bubble.create = function(row, column, type) {
        if (type === undefined) {
            type = Math.floor(Math.random() * 4);
        }
        var sprite = $(document.createElement('div'));
        sprite.addClass('bubble');
        sprite.addClass('bubble_' + type);
        var bubble = new Bubble(row, column, type, sprite);
        return bubble;
    };
    return Bubble;
})(jQuery);

