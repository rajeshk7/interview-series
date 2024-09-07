import MusicalInstrument from './Model/MusicalInstrument';

class Harmonium implements MusicalInstrument {
  getIsClassicalInstrument() {
    console.log("Yup, it is")
  }
  getCanPlayWithoutElectricity()  {
    console.log("It can")
  }
}

export default Harmonium;