basic.showString("MENDOZA")
for (let index = 0; index < 4; index++) {
    basic.showIcon(IconNames.Fabulous)
    basic.showIcon(IconNames.Asleep)
}
for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        . . # . .
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        `)
    music.play(music.tonePlayable(554, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . # . .
        . # # . .
        . . . . .
        . . . . .
        . . . . .
        `)
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . # . .
        . # # # .
        . . . . .
        . . . . .
        . . . . .
        `)
    music.play(music.tonePlayable(784, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . # . .
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        `)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        . . . . .
        `)
    music.play(music.tonePlayable(740, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . # . .
        # # # # #
        . . # . .
        . . # # .
        . . . # .
        `)
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . # . .
        # # # # #
        . . # . .
        . # # # .
        . # . # .
        `)
    music.play(music.tonePlayable(988, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . # . .
        # # # # #
        . . # . .
        . # # # .
        # # . # .
        `)
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . # . .
        # # # # #
        . . # . .
        . # # # .
        # # . # #
        `)
    music.play(music.tonePlayable(622, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    music.play(music.tonePlayable(233, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . . . .
        . . . # .
        . . # # .
        . . . . .
        . . . . .
        `)
    music.play(music.tonePlayable(247, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . . . .
        . # # # .
        . . # # .
        . . . . .
        . . . . .
        `)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # . . .
        . . . . .
        `)
    music.play(music.tonePlayable(220, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # #
        . . . . .
        `)
    music.play(music.tonePlayable(208, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . . . #
        . # # # #
        . # # # #
        . # # # #
        . . . . .
        `)
    music.play(music.tonePlayable(185, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . # # #
        . # # # #
        . # # # #
        . # # # #
        . . . . .
        `)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        # # # # #
        # # # # #
        . # # # #
        . # # # #
        . . . . .
        `)
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # . . . .
        `)
    music.play(music.tonePlayable(311, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # . .
        `)
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    music.play(music.tonePlayable(349, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    music.play(music.tonePlayable(370, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
}
basic.forever(function () {
	
})
