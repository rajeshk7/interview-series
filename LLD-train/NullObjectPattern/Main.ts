import MusicFactory from "./MusicFactory";

const musicFactory = new MusicFactory();

const electricGuitar = musicFactory.getInstrumentObject('ElectricGuitar');
electricGuitar.getIsClassicalInstrument();
electricGuitar.getCanPlayWithoutElectricity();

console.log('-------------------');

const harmonium = musicFactory.getInstrumentObject('Harmonium');
harmonium.getIsClassicalInstrument();
harmonium.getCanPlayWithoutElectricity();

console.log('-------------------');

const nullObject = musicFactory.getInstrumentObject('Violin');
nullObject.getIsClassicalInstrument();
nullObject.getCanPlayWithoutElectricity();

