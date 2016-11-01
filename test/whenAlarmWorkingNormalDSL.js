import assert from 'assert'
import { Room  } from '../src/room'
import { NewFireAlarm } from '../src/NewAlarm'
import { NewRoom } from '../src/NewRoom'

suite('when alarm working normal dsl', function () {
    var alarm = new NewFireAlarm()
        .withName("Kitchen Fire Alarm")
        .withMaxTemperatureCondition(40)
        .withSmokeReaction(true)
        .build();

    test('Fire Alarm is signaling when fire is in the room', function () {
        var room =
            new NewRoom()
                .build();
            //new Room("kitchen", false, 24);

        room.startFire();

        assert.equal(true, alarm.isSignalOn(room));
    });

    test('Fire Alarm is signaling when fire is in the room', function () {
        var room =
            new NewRoom()
                .withName("kitchen")
                .withTemperature(45)
                .withSmoke(true)
                .build();

        assert.equal(true, alarm.isSignalOn(room));
    });


    test('alarm is not signaling when is no fire in the room', function() {
        var room = new Room("kitchen", false, 24);

        assert.equal(false, alarm.isSignalOn(room));
    });
});