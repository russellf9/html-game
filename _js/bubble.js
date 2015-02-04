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
        this.animatePop = function() {
            var top = type * that.getSprite().height();
           // top = top + 5; // trying to hack this...
            console.log('top: ', top);
            this.getSprite().css(Modernizr.prefixed('transform'), 'rotate(' + (Math.
                random() * 360) + 'deg)');
            setTimeout(function() {
               that.getSprite().css('background-position', '-61px -' + top + 'px');
            }, 125);
            setTimeout(function() {
                that.getSprite().css('background-position', '-117px -' + top + 'px');
            }, 150);
            setTimeout(function() {
                that.getSprite().css('background-position', '-173px -' + top + 'px');
            }, 175);
            setTimeout(function() {
                that.getSprite().remove();
            }, 200);
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

