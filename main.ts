input.onButtonPressed(Button.A, function () {
    i_hate_computer = 0
    i_very_hate_computer = 0
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 5; index++) {
            led.plot(i_hate_computer, i_very_hate_computer)
            basic.pause(200)
            i_hate_computer += 1
        }
        i_hate_computer = 0
        i_very_hate_computer += 1
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index <= 5; index++) {
        led.plot(index, index % (0 + 1))
        basic.pause(200)
    }
})
input.onButtonPressed(Button.B, function () {
	
})
let i_very_hate_computer = 0
let i_hate_computer = 0
i_hate_computer = 0
i_very_hate_computer = 0
