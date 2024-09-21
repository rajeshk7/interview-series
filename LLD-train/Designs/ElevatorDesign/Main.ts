import Direction from "./Interface/Direction";
import Building from "./Models/Building";
import Floor from "./Models/Floor";

const floorList: Floor[] = []

for( let i = 0; i < 5; i++) {
    floorList.push(new Floor(i))
}

const building = new Building(floorList)

console.log("Going UP")
floorList[0].pressButton(3, Direction.UP)
floorList[1].pressButton(4, Direction.UP)
