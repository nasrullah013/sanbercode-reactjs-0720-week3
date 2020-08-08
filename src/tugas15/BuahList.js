import React, {useContext, useEffect, useState} from "react"
import axios from 'axios'
import {BuahContext} from "./BuahContext"
import './DaftarBuah.css'



const BuahList = () => {
    const [, setInputNama] = useState("")
    const [, setInputHarga] = useState("")
    const [, setInputBerat] = useState(0)
    const [, setSelectedId] = useState(0)
    const [, setStatusForm]  =  useState("")
    const[dataHargaBuah, setDataHargaBuah] = useContext(BuahContext)

    useEffect( () => {
        if (dataHargaBuah === null) {
            axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
            .then(res => {
                setDataHargaBuah(res.data.map(db => { return {id: db.id, nama: db.name, harga: db.price, berat: db.weight}}))
            })
        }
    }
    
    )
    
    
    const handleEdit = (event) => {
        let index = parseInt(event.target.value)
        let buah = dataHargaBuah.find(db => db.id === index)
        setInputNama(buah.nama)
        setInputHarga(buah.harga)
        setInputBerat(buah.berat)
        setSelectedId(index)
        setStatusForm("edit")
    
    }

    const handleDelete = (event) => {
        let index = parseInt(event.target.value)
        let newDataHargaBuah = dataHargaBuah.filter(db => db.id !== index)

        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${index}`)
        .then(res => {
            console.log(res)
        })

        setDataHargaBuah([...newDataHargaBuah])

    }


    return(
        <>
        <div class="container">
        <h1>Tabel Harga Buah</h1>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Harga</th>
                        <th>Berat</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataHargaBuah !== null && dataHargaBuah.map((db, index) =>{

                            return (
                                <tr key={index}>
                                    <td>{index+1}</td> 
                                    <td>{db.nama}</td>                                            
                                    <td>{db.harga}</td>                                            
                                    <td>{db.berat/1000} kg</td> 
                                    <td>
                                        <div style={{textAlign: "center"}}>
                                            <button onClick={handleEdit} value={db.id}>Edit</button>
                                            &nbsp;
                                            <button onClick={handleDelete} value={db.id}>Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </>
    )
}

export default BuahList