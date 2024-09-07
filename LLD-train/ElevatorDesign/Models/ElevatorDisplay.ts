import Direction from '../Interface/Direction';

class ElevatorDisplay {
  floor: number = 0;
  direction: Direction = Direction.UP;

  setDisplay = (floor: number, direction: Direction) => {
    this.floor = floor;
    this.direction = direction;
  }

  showDisplay = (floor: number, direction: Direction) => {
    console.log(`Floor: ${floor} Direction`);
    console.log(`Direction: ${direction}`);
  }
}

export default ElevatorDisplay;
