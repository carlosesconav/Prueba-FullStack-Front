
import React, { useState } from "react"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Formulario = () => {

    const [data, setData] = useState([])
    const navigate = useNavigate();

    const ingresarInfo = async (event) => {

        event.preventDefault();

        const { nombre, apellido } = event.target

        let datosenviados = {

            nombre: nombre.value,
            apellido: apellido.value

        }

        console.log(datosenviados);

        const response = await axios({
            method: 'POST',
            url: 'http://localhost:4000/informacion',
            headers: 
            {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
            },

            data: datosenviados
        });

        console.log(response.data);


    }


    return (

        <div>

            <button onClick={()=>navigate('/')}>Volver</button>

            <form onSubmit={ingresarInfo}>

                <p>Ingrese su nombre: <input type="text"  name="nombre" /></p>
                <p>Ingresa su apellido: <input type="text" name="apellido" /></p>


                <input type="submit" value="Guardar" />

            </form>


        </div>



  

    )




}

export default Formulario 