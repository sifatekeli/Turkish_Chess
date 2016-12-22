var Turkish_Chess = Turkish_Chess || {};

var merge = require('merge');
var core = merge(require('./pawn_type'));

module.exports = function (self) {
    "use strict";

    self.Pawn = function (_type, _colour) {
        var type;
        // var pos = []; // [line, column]  ---- We're not gonna use it
        var lastPos = [-1,-1];
        var colour; // WHITE || BLACK
        var isQueen;

        var init = function (_type, _colour) {
            type = _type;
            colour = _colour;
            isQueen = false;
        };

        this.setType = function (newtype) {
            type = newtype;
        };

        this.getType = function () {
            return type;
        };

        this.lastPosition = function () {
            return lastPos;
        };

        this.lastLinePosition = function () {
            if (lastPos.length > 1) {
                return lastPos[0];
            }
            return undefined;
        };

        this.lastColumnPosition = function () {
            if (lastPos.length > 1) {
                return lastPos[1];
            }
            return undefined;
        }

        this.setLastPosition = function (position) {
            lastPos = position;
        };

//        this.setPos = function (_pos) {
//            pos = _pos;
//        };
//
//        this.getPos = function () {
//            return pos;
//        };

        // This function needs a boolean
        this.setQueen = function () {
            isQueen = true;
            if (this.getColour() === "WHITE") {//  colour === "WHITE") {
                type = core.PawnType.Q_WHITE;
            } else type = core.PawnType.Q_BLACK;
        };

        this.isQueen = function () {
//            return (type == core.PawnType.Q_BLACK || type == core.PawnType.Q_WHITE);
            return isQueen;
        };

        this.getColour = function () {
            return colour;
        };

        this.setColour = function (_colour) {
            colour = _colour;
        };

        this.toString = function () {
            return "{colour : " + colour + ", isQueen : " + isQueen + "}";
        };

        init(_type, _colour);
    };

    return self;
}(Turkish_Chess || {});