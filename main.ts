pins.servoWritePin(AnalogPin.P0, 15)
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P0, 0)
    basic.pause(500)
    pins.servoWritePin(AnalogPin.P0, 20)
    basic.pause(500)
})
