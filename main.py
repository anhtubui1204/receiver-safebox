def on_received_number(receivedNumber):
    global isLock
    if receivedNumber == 1:
        isLock = 0
    else:
        isLock = 1
    basic.clear_screen()
radio.on_received_number(on_received_number)

isLock = 0
isLock = 1
radio.set_group(62)

def on_forever():
    if input.pin_is_pressed(TouchPin.P1):
        if isLock == 1:
            basic.show_icon(IconNames.NO)
        else:
            basic.show_icon(IconNames.YES)
    else:
        if isLock == 1:
            basic.show_icon(IconNames.NO)
            music.play_melody("G F G A - F E D ", 120)
        else:
            basic.show_icon(IconNames.YES)
basic.forever(on_forever)
