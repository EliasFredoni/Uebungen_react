

export default function Main({ number, inhalt, karte }) {  //props

    let name = 'Elias';
    let uhrzeit = new Date().getHours();

    let willkommen = () => {
        alert("Hallo") //HIER VERFASSEN WAS PASSIEREN SOLL
    }


    return (
        <div className={karte ? "sub card" : "main card"}>
            <h1>Willkommen! {name}.{number}</h1>
            <h2>{uhrzeit < 12 ? "Guten Morgen" : 'Guten Tag'}, es ist {uhrzeit} Uhr!</h2>
            <button onClick={willkommen}>HIER!</button>
        </div>
    )
}



