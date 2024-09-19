import MusicalInstrument from './Model/MusicalInstrument';

class NullObject implements MusicalInstrument {
  getIsClassicalInstrument() {
    console.log("N/A")
  }
  getCanPlayWithoutElectricity()  {
    console.log("N/A")
  }
}

export default NullObject;