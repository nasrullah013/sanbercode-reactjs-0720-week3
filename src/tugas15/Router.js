import React from "react";
import { Switch, Link, Route } from "react-router-dom";

import Tugas1 from '../tugas11/Tugas1'
import Clock from '../tugas12/Clock'
import Tugas3 from '../tugas13/tugas3'
import Tugas4 from '../tugas14/tugas4'
import DaftarBuah from '../tugas15/DaftarBuah'

const Routers = () => {

    return (
        <>
        <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/tugas11">Tugas11</Link>
            </li>
            <li>
                <Link to="/tugas12">Tugas12</Link>
            </li>
            <li>
                <Link to="/tugas13">Tugas13</Link>
            </li>
            <li>
                <Link to="/tugas14">Tugas14</Link>
            </li>
            <li>
                <Link to="/tugas15">Tugas15</Link>
            </li>
        </ul>
        </nav>
        <Switch>
            <Route path="/tugas11">
                <Tugas1 />
            </Route>
            <Route path="/tugas12">
                <Clock />
            </Route>
            <Route path="/tugas13">
                <Tugas3 />
            </Route>
            <Route path="/tugas14">
                <Tugas4 />
            </Route>
            <Route path="/tugas15">
                <DaftarBuah />
            </Route>
        </Switch>
    </>
    )
}

export default Routers