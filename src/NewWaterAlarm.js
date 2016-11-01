/**
 * Created by anna on 31.10.2016.
 */
'use strict';
import { WaterAlarm } from './waterAlarm'

export function NewWaterAlarm () {

    var state = {
        name: "Water Alarm",
        humidity: 40,
        battary: 100
    };

    this.withName = function (name) {
        state.name = name;
        return this;
    }

    this.withHumidityLevel = function (level) {
        state.humidityLevel = level;
        return this;
    }

    this.enabled = function () {
        state.battery = 100;
        return this;
    }

    this.build = function () {
        console.log(state);
        return new WaterAlarm(state.name, state.maxTemperature, state.isSmoke, state.battery);
    }
};
