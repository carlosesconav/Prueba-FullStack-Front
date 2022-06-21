import React, { useState } from "react"
import axios from "axios";
import {
    useNavigate,
    useParams
} from "react-router-dom";


const EDC = ()=>{

    
    const { id_contacto } = useParams()
    const [data, setData] = useState([])
    const navigate = useNavigate();

    const Editaruno = async () => {

        const response = await axios({
            method: 'GET',
            url: `http://localhost:4000/contacto/${id_contacto}`,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
            }
        });

        setData(response.data);

    }

    const actualizar = async (event) => {

        event.preventDefault();
        const { correo, Telefono, direccion, celular} = event.target

        let datosenviados = {
            correo: correo.value,
            Telefono: Telefono.value,
            direccion: direccion.value,
            celular: celular.value
        }

        const response = await axios({
            method: 'PUT',
            url: `http://localhost:4000/contacto/${id_contacto}`,
            headers:
            {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
            },

            data: datosenviados

        });


    }




    return (

        <div>

            <button onClick={() => navigate('/')}>Volver</button>
            <button onClick={Editaruno}>Obtener</button>

            <form onSubmit={actualizar}>

                <p>Ingrese su Correo: <input type="text"  defaultValue={data?.correo} name="correo" /></p>
                <p>Ingresa su Telefono: <input type="text"  defaultValue={data?.Telefono} name="Telefono" /></p>
                <p>Ingrese su direccion: <input type="text"  defaultValue={data?.direccion} name="direccion" /></p>
                <p>Ingresa su celular: <input type="text"  defaultValue={data?.celular} name="celular" /></p>


                <input type="submit" value="Guardar" />

            </form>


        </div>

    )


}


export default EDC;