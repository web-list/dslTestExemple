'use strict';

import { FireAlarm} from './alarm'
export function NewFireAlarm () {

    var state = {
        name: "fire Alarm",
        maxTemperature: 100,
        isSmoke: true,
        battery: 100
    };

    this.withName = function (name) {
        state.name = name;
        return this;
    }

    this.withMaxTemperatureCondition = function (maxTemperature){
        state.maxTemperature = maxTemperature;
        return this;
    }

    this.withSmokeReaction = function (isSmoke){
        state.isSmoke = isSmoke;
        return this;
    }

    this.withBattary= function (value){
        state.battery = value;
        return this;
    }

    this.build = function () {
        console.log(state);
        return new FireAlarm(state.name, state.maxTemperature, state.isSmoke, state.battery);
    }
};
