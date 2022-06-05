// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101020202020202020202020202020206010101010101010101010101010101030107020202020202060107020202020401030101010101010301030101010101010301070202060103010502020202060103010301010101030101010101010301030103010103010301070202020204010301030101030103010301010101010103010301070401030105020202020601030103010301010301010101010103010301030105080903010702020202040103010301010101030103010101010101030105020202020401050202020106010301010101010101010101010101030105020202020202020202020202020401`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
. . . . . . . . 2 . . . . . . 2 
. 2 2 2 2 2 2 . 2 . 2 2 2 2 2 2 
. 2 . . . . 2 . 2 . . . . . . 2 
. 2 . 2 2 . 2 . 2 2 2 2 2 2 . 2 
. 2 . 2 2 . 2 . 2 . . . . . . 2 
. 2 . 2 2 . 2 . 2 . 2 2 2 2 2 2 
. 2 . 2 . . 2 . 2 . . . . . . 2 
. 2 . 2 . 2 2 . 2 2 2 2 2 2 . 2 
. 2 . 2 . . . . 2 . . . . . . 2 
. 2 . 2 2 2 2 . 2 . 2 2 2 2 2 2 
. 2 . . . . . . 2 . . . . . . 2 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
. . . . . . . . . . . . . . . 2 
`, [myTiles.transparency16,sprites.builtin.brick,sprites.vehicle.roadHorizontal,sprites.vehicle.roadVertical,sprites.vehicle.roadTurn4,sprites.vehicle.roadTurn3,sprites.vehicle.roadTurn2,sprites.vehicle.roadTurn1,sprites.dungeon.buttonTeal,sprites.swamp.swampTile9], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
