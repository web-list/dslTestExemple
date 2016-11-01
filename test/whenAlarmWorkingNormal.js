import assert from 'assert'
import { Room  } from '../src/room'
import { FireAlarm} from '../src/alarm'

suite('when alarm working normal', function () {
    var alarm = new FireAlarm("Fire Alarm", 40, true);

    test('Fire Alarm is signaling when fire is in the room', function () {
        var room = new Room("kitchen", false, 24);

        room.startFire();

        assert.equal(true, alarm.isSignalOn(room));
    });


    test('alarm is not signaling when is no fire in the room', function() {
        var room = new Room("kitchen", false, 24);

        assert.equal(false, alarm.isSignalOn(room));
    });
});