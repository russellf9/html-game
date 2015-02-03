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
        this.getRow = function() {
            return row;
        };
    };
    Bubble.create = function(row, column, type) {
        if (type === undefined) {
            type = Math.floor(Math.random() * 4);
        }
        var sprite = $(document.createElement('div'));
        sprite.addClass('bubble');
        sprite.addClass('bubble_0');
        var bubble = new Bubble(row, column, type, sprite);
        return bubble;
    };
    return Bubble;
})(jQuery);

