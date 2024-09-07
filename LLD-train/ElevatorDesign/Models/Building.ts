import Floor from './Floor';

class Building {
  floorList: Array<Floor>

  constructor(floors: Floor[])  {
    this.floorList = floors
  }

  addFloor = (floor: Floor) => {
    this.floorList.push(floor)
  }

  removeFloor = (floor: Floor) => {
    this.floorList = this.floorList.filter(f => f != floor)
  }

  getAllFloors = () => {
    return this.floorList
  }
}

export default Building;