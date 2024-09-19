import ElectricGuitar from './ElectricGuitar';
import NullObject from './NullObject';
import Harmonium from './Harmonium';
import MusicalInstrument from './Model/MusicalInstrument';

class MusicFactory  {
  getInstrumentObject(name: string): MusicalInstrument {
    if(name === 'ElectricGuitar')
      return new ElectricGuitar()
    else if(name === 'Harmonium')
      return new Harmonium()
    else
      return new NullObject()
  }
}

export default MusicFactory;