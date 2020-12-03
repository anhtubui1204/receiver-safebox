radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        isLock = 0
    } else {
        isLock = 1
    }
    basic.clearScreen()
})
let isLock = 0
isLock = 1
radio.setGroup(62)
const checkIsLock = function(isPlayMelody = false) {
    if (isLock == 1) {
        basic.showIcon(IconNames.No)
        if(isPlayMelody) {
            music.playMelody("C G A E F C F G", 120)
        }
    } else {
        basic.showIcon(IconNames.Yes)
    }
}
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P1)) {
        checkIsLock();
    } else {
        checkIsLock(true);
    }
})
