tiles.setCurrentTilemap(tilemap`level1`)
let mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
controller.moveSprite(mySprite)
let item = sprites.create(assets.image`myImage0`, SpriteKind.Enemy)
