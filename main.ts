input.onButtonPressed(Button.A, function () {
    music_on = true
})
let music_on = false
music.setVolume(255)
music_on = false
let strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
basic.forever(function () {
    if (music_on) {
        music.setTempo(132)
        music.playTone(262, music.beat(BeatFraction.Double))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(262, music.beat(BeatFraction.Double))
        music.playTone(349, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Breve))
    } else {
        music.stopAllSounds()
    }
})
basic.forever(function () {
    for (let index = 0; index <= 30; index++) {
        strip.setBrightness(255)
        strip.shift(1)
        strip.range(0, 6).showColor(neopixel.rgb(70, 29, 124))
        basic.pause(1000)
        strip.shift(1)
        strip.range(7, 6).showColor(neopixel.rgb(255, 208, 35))
        basic.pause(1000)
        strip.shift(1)
        strip.range(13, 6).showColor(neopixel.rgb(70, 29, 124))
        basic.pause(1000)
        strip.shift(1)
        strip.range(19, 6).showColor(neopixel.rgb(255, 208, 35))
        basic.pause(1000)
        strip.shift(1)
        strip.range(25, 6).showColor(neopixel.rgb(70, 29, 124))
    }
})
