import React, { useState } from "react"
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./tabla.css"
import ingresar from "./ingresar";


const Contacto = () => {

    
    const [data, setData] = useState([])
    const navigate = useNavigate();

    const Ingresarcontacto = async (event) => {



        event.preventDefault();

        const { correo, Telefono, direccion, celular, idIndormacion } = event.target

        let datosenviados = {

            correo: correo.value,
            Telefono: Telefono.value,
            direccion: direccion.value,
            celular: celular.value,
            idIndormacion: idIndormacion.value

        }

        console.log(datosenviados);

        const response = await axios({
            method: 'POST',
            url: 'http://localhost:4000/contacto',
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

            <button onClick={() => navigate('/')}>Volver</button>

            <form onSubmit={Ingresarcontacto}>

                <p>Ingrese su Correo: <input type="text" name="correo" /></p>
                <p>Ingresa su Telefono: <input type="text" name="Telefono" /></p>
                <p>Ingrese su direccion: <input type="text" name="direccion" /></p>
                <p>Ingresa su celular: <input type="text" name="celular" /></p>
                <p>Ingresa El contacto: <input type="text" name="idIndormacion" /></p>


                <input type="submit" value="Guardar" />

            </form>


        </div>

    )



}



export default Contacto