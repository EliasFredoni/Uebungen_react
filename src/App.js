import React, { useState } from 'react'
import Header from './components/Header';
import Main from './components/Main';
import "./index.css";

export default function App() {

    let bier = "bier"

    const [zahl, setZahl] = useState(1); //unveränderliches Array, default Wert
    const [karte, setKarte] = useState(false);

    return (
        <div>
            <Header bier={bier} />
            <div>
                <button onClick={() => setZahl(zahl + 1)}>+1</button>
                <button onClick={() => setKarte(!karte)}>Karte</button>
            </div>
            <Main number={zahl} inhalt="gutes" karte={karte} />
            <Main number="2" inhalt="schlecht" />
        </div>
    )
}
