import React, { Component } from 'react'
import Nama from './Nama'
import Harga from './Harga'
import Berat from './Berat'
import './DaftarBuah.css'


var dataHargaBuah = [
    {nama : "Semangka", harga : 10000, berat : 1000},
    {nama : "Anggur", harga : 40000, berat : 500},
    {nama : "Strawberry", harga : 30000, berat : 400},
    {nama : "Jeruk", harga : 30000, berat : 1000},
    {nama : "Mangga", harga : 30000, berat : 500}
]

class DaftarBuah extends Component {
    render() {
        return (
            <>
                <div class="container">
                <h1>Tabel Harga Buah</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Nama</th>
                                <th>Harga</th>
                                <th>Berat</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dataHargaBuah.map(db => {
                                    return (
                                        <tr>
                                            <Nama nama={db.nama}/>
                                            <Harga harga={db.harga}/>
                                            <Berat berat={db.berat}/>
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
}

export default DaftarBuah

