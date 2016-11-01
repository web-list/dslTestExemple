'use strict';

export function WaterAlarm(name, wet, battary) {
    //new water leaks detector with humidity level of 40, enabled and full battery?
    this.battary = battary;
    this.isSignalOn = function (room) {
        var state = room.getRoomState();
        return this.battary !=0 && state.wet > wet;
    }
};
