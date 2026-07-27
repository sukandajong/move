def on_received_string(receivedString):
    if receivedString == "F":
        basic.show_leds("""
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            """)
radio.on_received_string(on_received_string)

joyy = 0
radio.set_group(1)
isactive = True

def on_forever():
    global joyy
    if isactive == True:
        joyy = pins.analog_read_pin(AnalogPin.P1)
        if joyy < 400:
            basic.show_leds("""
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                """)
            radio.send_string("F")
basic.forever(on_forever)
