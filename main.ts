scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    game.over(false)
    music.playMelody("C5 B A G F E D C ", 120)
    effects.clouds.startScreenEffect()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonOrange, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level3`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonTeal, function (sprite, location) {
    game.over(true)
    music.powerUp.playUntilDone()
})
tiles.setCurrentTilemap(tilemap`level1`)
let mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
let my_Enemy = sprites.create(assets.image`myImage0`, SpriteKind.Enemy)
my_Enemy.follow(mySprite)
forever(function () {
    scene.cameraFollowSprite(mySprite)
    controller.moveSprite(mySprite)
})
