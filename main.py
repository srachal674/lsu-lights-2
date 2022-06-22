def purple():
    global range2
    range2 = strip.range(1, 6)
    strip.show_color(neopixel.rgb(70, 29, 124))

def on_button_pressed_a():
    global music_on
    music_on = False
input.on_button_pressed(Button.A, on_button_pressed_a)

def gold():
    global range2
    range2 = strip.range(7, 12)
    strip.show_color(neopixel.rgb(255, 208, 35))
range2: neopixel.Strip = None
music_on = False
strip: neopixel.Strip = None
music.set_volume(255)
strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
music_on = True

def on_forever():
    purple()
    gold()
basic.forever(on_forever)

def on_forever2():
    if music_on:
        music.set_tempo(132)
        music.play_tone(262, music.beat(BeatFraction.DOUBLE))
        music.rest(music.beat(BeatFraction.QUARTER))
        music.play_tone(262, music.beat(BeatFraction.WHOLE))
        music.rest(music.beat(BeatFraction.QUARTER))
        music.play_tone(262, music.beat(BeatFraction.DOUBLE))
        music.play_tone(349, music.beat(BeatFraction.WHOLE))
        music.rest(music.beat(BeatFraction.BREVE))
    else:
        music.stop_all_sounds()
basic.forever(on_forever2)
