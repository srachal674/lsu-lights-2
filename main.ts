input.onButtonPressed(Button.A, function () {
    music_on = false
})
let strip: neopixel.Strip = null
let music_on = false
music.setVolume(255)
music_on = true
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
    strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
    strip.range(0, 6).showColor(neopixel.rgb(70, 29, 124))
    basic.pause(1000)
    strip.range(7, 12).showColor(neopixel.rgb(255, 208, 35))
    basic.pause(1000)
    strip.range(13, 18).showColor(neopixel.rgb(70, 29, 124))
    basic.pause(1000)
    strip.range(19, 24).showColor(neopixel.rgb(255, 208, 35))
})
