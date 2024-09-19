import './App.css';
import TextInput from './components/text-input';
import { useState } from 'react';
import SliderInput from './components/slider-input';
import { tenureData } from './utils/constants';

function App() {

  const [cost, setCost] = useState(0);
  const [interest, setInterest] = useState(10);
  const [fee, setFee] = useState(1);
  const [downPayment, setDownPayment] = useState(0);
  const [tenure, setTenure] = useState(12);
  const [emi, setEmi] = useState(0); 

  return (
    <div className="App">
      <span className="title" style={{ fontSize: 30, marginTop: 10 }}>
        EMI Calculator
      </span>

      <TextInput 
        title= "Total Cost of asset"
        state= {cost}
        setState= {setCost}
      />

      <TextInput
        title= "Interest Rate"
        state= {interest}
        setState= {setInterest}
      />

      <TextInput
        title= "Processing Fee"
        state= {fee}
        setState= {setFee}
      />

      {/* <SliderInput
        title="Down Payment"
        underlineTitle={`Total Down Payment - ${totalDownPayment()}`}
        onChange={updateEMI}
        state={downPayment}
        min={0}
        max={cost}
        labelMin={"0%"}
        labelMax={"100%"}
      />

      <SliderInput
        title="Loan per Month"
        underlineTitle={`Total Loan Amount - ${totalEMI()}`}
        onChange={updateDownPayment}
        state={emi}
        min={calculateEMI(cost)}
        max={calculateEMI(0)}
      /> */}
    </div>
  );
}

export default App;
