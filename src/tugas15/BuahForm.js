import React, {useContext, useState} from "react"
import {BuahContext} from "./BuahContext"
import './DaftarBuah.css'
// import BuahList from "./BuahList"
import axios from 'axios'


const BuahForm = () => {
    const [inputNama, setInputNama] = useState("")
    const [inputHarga, setInputHarga] = useState("")
    const [inputBerat, setInputBerat] = useState(0)
    const [selectedId, setSelectedId] = useState(0)
    const [statusForm, setStatusForm]  =  useState("create")
    const [dataHargaBuah, setDataHargaBuah] = useContext(BuahContext)

    const handleChange = (event) => {
        let tipe = event.target.name
        switch (tipe) {
            case "nama": {setInputNama(event.target.value); break;}
            case "harga": {setInputHarga(event.target.value); break;}
            case "berat": {setInputBerat(event.target.value); break;}        
            default:
                {break;} 
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        
        let name = inputNama
        let price = inputHarga
        let weight = inputBerat 

        
        if (name.replace(/\s/g,'') !== "" && price.replace(/\s/g,'') !== "") {
                if (statusForm === "create") {
                    axios.post(`http://backendexample.sanbercloud.com/api/fruits`, {name, price, weight})
                    .then(res => {
                        setDataHargaBuah([...dataHargaBuah, {id: res.data.id, nama: name, harga: price, berat: weight}])
                    })
                }else if (statusForm === "edit"){
                    axios.put(`http://backendexample.sanbercloud.com/api/fruits/${selectedId}`, {name, price, weight})
                    .then(res => {
                        let editdataHargaBuah = dataHargaBuah.find(db => db.id === selectedId)
                        editdataHargaBuah.nama = name
                        editdataHargaBuah.harga = price
                        editdataHargaBuah.berat = weight
                        setDataHargaBuah([...dataHargaBuah])
                    })
                }

                setStatusForm("create")
                setSelectedId(0)
                setInputNama("")
                setInputHarga("")
                setInputBerat(0)
        }
    }


    return(
        <>
                    <div class="form_content">
                    <h1>Form Buah</h1>
                        <form onSubmit={handleSubmit}>
                            <label>Nama Buah : </label> 
                            <input type="text" name="nama" value={inputNama} onChange={handleChange}/>
                            <label>Harga Buah : </label>
                            <input type="text" name="harga" value={inputHarga} onChange={handleChange}/>
                            <label>Berat Buah : </label>
                            <input type="text" name="berat" value={inputBerat} onChange={handleChange}/>
                            <button class="submit" >Submit</button>
                        </form>
                    </div>

        </>
    )

}

export default BuahForm