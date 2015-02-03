'use strict';

var BubbleShoot = window.BubbleShoot || {};

BubbleShoot.CollisionDetector = (function($) {
    var CollisionDetector = {
        findIntersection: function(curBubble, board, angle) {
            var rows = board.getRows(),
                collision = null,
                pos = curBubble.getSprite().position(),
                start = {
                    left: pos.left + BubbleShoot.ui.BUBBLE_DIMS / 2,
                    top: pos.top + BubbleShoot.ui.BUBBLE_DIMS / 2
                },
                dx = Math.sin(angle),
                dy = -Math.cos(angle);
            for (var i = 0; i < rows.length; i++) {
                var row = rows[i];
                for (var j = 0; j < row.length; j++) {
                    var bubble = row[j];
                    if (bubble) {
                        var coords = bubble.getCoords(),
                            distToBubble = {
                                x: start.left - coords.left,
                                y: start.top - coords.top
                            },
                            t = dx * distToBubble.x + dy * distToBubble.y,
                            ex = -t * dx + start.left,
                            ey = -t * dy + start.top,
                            distEC = Math.sqrt((ex - coords.left) * (ex - coords.left) + (ey - coords.top) * (ey - coords.top));
                        if (distEC < BubbleShoot.ui.BUBBLE_DIMS * 0.75) {
                            var dt = Math.sqrt(BubbleShoot.ui.BUBBLE_DIMS * BubbleShoot.
                                    ui.BUBBLE_DIMS - distEC * distEC),
                                offset1 = {
                                    x: (t - dt) * dx,
                                    y: -(t - dt) * dy
                                },
                                offset2 = {
                                    x: (t + dt) * dx,
                                    y: -(t + dt) * dy
                                },
                                distToCollision1 = Math.sqrt(offset1.x * offset1.x + offset1.y * offset1.y),
                                distToCollision2 = Math.sqrt(offset2.x * offset2.x + offset2.y * offset2.y);

                            if (distToCollision1 < distToCollision2) {
                                var distToCollision = distToCollision1,
                                    dest = {
                                        x: offset1.x + start.left,
                                        y: offset1.y + start.top
                                    };
                            } else {
                                var distToCollision = distToCollision2,
                                    dest = {
                                        x: -offset2.x + start.left,
                                        y: offset2.y + start.top
                                    };
                            }
                            if (!collision || collision.distToCollision > distToCollision) {
                                collision = {
                                    bubble: bubble,
                                    distToCollision: distToCollision,
                                    coords: dest
                                };
                            }
                        }
                    }
                }
            }
            return collision;
        }
    };
    return CollisionDetector;
})(jQuery);

