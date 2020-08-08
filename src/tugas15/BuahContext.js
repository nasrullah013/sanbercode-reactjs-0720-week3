import React, {useState, createContext} from "react"

export const BuahContext = createContext();

export const BuahProvider = props => {
    const [dataHargaBuah, setDataHargaBuah] = useState(null)

    return (
        <BuahContext.Provider value={[dataHargaBuah, setDataHargaBuah]}>
            {props.children}
        </BuahContext.Provider>
    )
}

