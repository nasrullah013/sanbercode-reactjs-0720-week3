import React from 'react';
import './App.css';
import DaftarBuah from './tugas11/DaftarBuah'
import Clock from './tugas12/Clock'

function App() {
  return (
    <div>
      {/* Tugas11 */}
        <DaftarBuah />
        {/* Tugas12 */}
        <Clock start={100}/>
    </div>
  )
}

export default App;
