input.onButtonPressed(Button.A, function () {
    music_on = false
})
let music_on = false
music.setVolume(255)
let strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
music_on = true
basic.forever(function () {
    strip.showColor(neopixel.rgb(70, 29, 124))
    basic.pause(2000)
    strip.showColor(neopixel.rgb(255, 208, 35))
    basic.pause(2000)
})
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
