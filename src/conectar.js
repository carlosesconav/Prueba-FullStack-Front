import React, { useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";

const Conectar = () => {

    const [data, setData] = useState([])

    const getInfos = async () => {

        const response = await axios({

            method: 'GET',
            url: 'http://localhost:4000/informacion',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',

            },

        });

        console.log("Datos: ", response.data);
        setData(response.data);

    }

    return (<div>lista Contactos

        <button onClick={Conectar}>obtener</button>
        {data.map((item, index) => {
            return <div key={index}>{item.nombre} <h5>{item.apellido}</h5> 

            </div>
        })}

    </div>);

}

export default Conectar  