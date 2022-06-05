let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
controller.moveSprite(mySprite)
let my_Enemy = sprites.create(assets.image`myImage0`, SpriteKind.Enemy)
my_Enemy.follow(mySprite)
