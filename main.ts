radio.onReceivedString(function (receivedString) {
    if (receivedString == "F") {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        iBIT.setMotor(ibitMotorCH.M1, ibitMotor.Forward, 50)
        iBIT.setMotor(ibitMotorCH.M2, ibitMotor.Forward, 50)
    }
})
let joyy = 0
radio.setGroup(1)
let isactive = true
basic.forever(function () {
    if (isactive == true) {
        joyy = pins.analogReadPin(AnalogPin.P1)
        if (joyy < 400) {
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
            radio.sendString("F")
        }
    }
})
