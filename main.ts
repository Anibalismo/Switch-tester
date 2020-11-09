basic.pause(5000)
let angulo_inicial = 15
let angulo_maximo = 30
let angulo = angulo_inicial
pins.servoWritePin(AnalogPin.P1, angulo)
HX711.SetPIN_SCK(DigitalPin.P8)
HX711.SetPIN_DOUT(DigitalPin.P0)
HX711.begin()
HX711.set_scale(2280)
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P1, angulo)
    angulo = angulo + 1
    if (angulo > angulo_maximo) {
        angulo = angulo_inicial
    }
    serial.writeLine("'el valores es:'")
    serial.writeLine("" + (HX711.read_average(5)))
    led.toggle(0, 0)
    basic.pause(200)
})
