input.onButtonPressed(Button.A, function () {
    isactive = true
    basic.showIcon(IconNames.Heart)
})
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
    } else if (receivedString == "B") {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        iBIT.setMotor(ibitMotorCH.M1, ibitMotor.Backward, 50)
        iBIT.setMotor(ibitMotorCH.M2, ibitMotor.Backward, 50)
    } else if (receivedString == "R") {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        iBIT.setMotor(ibitMotorCH.M1, ibitMotor.Forward, 50)
        iBIT.setMotor(ibitMotorCH.M2, ibitMotor.Backward, 50)
    } else if (receivedString == "L") {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # .
            . # . . .
            . . # . .
            `)
        iBIT.setMotor(ibitMotorCH.M1, ibitMotor.Forward, 50)
        iBIT.setMotor(ibitMotorCH.M2, ibitMotor.Backward, 50)
    } else if (receivedString == "Stop") {
        basic.showIcon(IconNames.No)
        iBIT.setMotor(ibitMotorCH.M1, ibitMotor.Forward, 0)
        iBIT.setMotor(ibitMotorCH.M2, ibitMotor.Forward, 0)
    }
})
input.onButtonPressed(Button.B, function () {
    isactive = false
    basic.showIcon(IconNames.No)
    radio.sendString("Stop")
})
let joyx = 0
let joyy = 0
let isactive = false
radio.setGroup(1)
basic.forever(function () {
    if (isactive == true) {
        joyy = pins.analogReadPin(AnalogPin.P1)
        joyx = pins.analogReadPin(AnalogPin.P2)
        if (joyy < 400) {
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
            radio.sendString("F")
        } else if (joyy > 600) {
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
            radio.sendString("B")
        } else if (joyx < 400) {
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
            radio.sendString("R")
        } else if (joyx > 600) {
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # .
                . # . . .
                . . # . .
                `)
            radio.sendString("L")
        } else {
            radio.sendString("Stop")
        }
    }
})
