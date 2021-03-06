import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Airline from './Airline'

const Airlines = () => {
    const [airlines, setAirlines] = useState([])

    useEffect(() => {

        axios.get('/api/v1/airlines.json')
        .then( resp => {
            setAirlines(resp.data.data)
        })
        .catch( resp => console.log(resp) )
    }, [airlines.length])

    const list = airlines.map( item => {
        return (<li key={item.attributes.name}>{item.attributes.name}</li>)
    })

    return (
    <div className="home">
        <div className="header">
            <h1>OpenFlights</h1>
            <div className="subheader"> Airline Reviews </div>
        </div>
    <div className="grid">
    <ul>{list}</ul>
    </div>
</div>
    )
}

export default Airlines