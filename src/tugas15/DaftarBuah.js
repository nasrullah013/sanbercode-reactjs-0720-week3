import React from 'react';

import './DaftarBuah.css'
import {BuahProvider} from './BuahContext'
import BuahList from './BuahList'
import BuahForm from './BuahForm'


const DaftarBuah = () => {
        return (
            <BuahProvider>
                <BuahList/>
                <BuahForm/>
            </BuahProvider>
        )
}


export default DaftarBuah

