import React, { useState } from "react"
import axios from "axios";
import {
    useNavigate,
    useParams
} from "react-router-dom";


const InfoUno = () => {

    const { id_info,id_contacto} = useParams()
    const [data, setData] = useState([])
    const navigate = useNavigate();


    const ObtenerInfo = async () => {

        const response = await axios({
            method: 'GET',
            url: `http://localhost:4000/informacion/${id_info}/contacto`,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
            }
        });

        setData(response.data);

    }


    const Eliminarunainfo = async (id_contacto) => {

        console.log(id_contacto);

        const response = await axios({

            method: 'DELETE',
            url: `http://localhost:4000/contacto/${id_contacto}`,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
            },


        });
        console.log(response);


    }

    return (<div>


        <div className="main-container">

            <button onClick={ObtenerInfo}>obtener Informacion</button>
            <button onClick={() => navigate('/')} >Volver</button>
            <button onClick={() => navigate('/Ingresarcontacto')} >Ingresar informacion</button>




            <table>
                <thead>

                    <tr>

                        <th colSpan={5} > INFORMACION CONTACTOS</th>

                    </tr>

                    <tr>
                        <th>Correo</th>
                        <th>Telefono</th>
                        <th>Direccion</th>
                        <th>Celular</th>
                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody>

                    {data.map((item, index) => {

                        return (

                            <tr>
                                <th key={index}>{item.correo}</th>
                                <th key={index}>{item.Telefono}</th>
                                <th key={index}>{item.direccion}</th>
                                <th key={index}>{item.celular}</th>
                                <th>

                                <button onClick={()=>navigate(`/EditartInfotmacion/${item.id_contacto}`)}>Editar</button>
                                    <button onClick={() => Eliminarunainfo(item.id_contacto)}>eliminar</button>



                                </th>


                            </tr>
                        )

                    }
                    
                    )}

                </tbody>




            </table>


        </div>




    </div>


    )







}



export default InfoUno
