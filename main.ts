let hőmérséklet = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(hőmérséklet)
    basic.showString("°C")
    if (hőmérséklet < 5) {
        basic.showIcon(IconNames.Sad)
    } else if (hőmérséklet > 18) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Asleep)
    }
})
basic.forever(function () {
    hőmérséklet = input.temperature()
})
