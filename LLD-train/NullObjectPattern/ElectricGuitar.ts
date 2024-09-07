import MusicalInstrument from './Model/MusicalInstrument';

class ElectricGuitar implements MusicalInstrument {
  getIsClassicalInstrument() {
    console.log("Its not")
  }
  getCanPlayWithoutElectricity()  {
    console.log("It cannot")
  }
}

export default ElectricGuitar;