import { useEffect, useState } from "react";

function UseEffect(){
     const [dateTime, setDateTime] = useState("");
    useEffect(() =>{
        console.log("Day 1 nihh HAHAHHAHUHUHUHU")
        const sekarang = new Date();
        setDateTime(sekarang.toLocaleString());
    }, []);
     const ubahJudul = () => {
    document.title = "kukuraamahwa in here <3 - useEffect";
  };
    return(
        <div>
            <h1> Day 1 useEffect</h1>
            <p>Tanggal & Waktu</p>
            <p>{dateTime}</p>
             <button onClick={ubahJudul}>
                Ubah Judul Halaman
            </button>
        </div>
    );
}
export default UseEffect;