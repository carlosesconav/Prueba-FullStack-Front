import React, { useState } from "react"
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./tabla.css"

const Conectar = () => {


    const navigate = useNavigate();
    const { id_contacto } = useParams()
    const [data, setData] = useState([])

    const getContacs = async () => {

        const response = await axios({

            method: 'GET',
            url: `http://localhost:4000/contacto/${id_contacto}`,
            headers: {

                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',

            },

        });

        setData(response.data);

    }

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

        setData(response.data);

    }


    const elimInfo = async (id_info) => {

        console.log(id_info);
        const response = await axios({

            method: 'DELETE',
            url: `http://localhost:4000/informacion/${id_info}`,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
            },


        });
        console.log(response);

    }

    return (

       

            <div className="main-container">

                <button onClick={getInfos}>obtener</button>
                <button onClick={()=>navigate('/Ingresar')} >Ingresar un nuevo contacto</button>




                <table>
                    <thead>

                        <tr>

                            <th colSpan={3} >CONTACTOS</th>

                        </tr>

                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>

                    <tbody>

                        {data.map((item, index) => {
                            return (

                                <tr>
                                    <th key={index}>{item.nombre}</th>
                                    <th key={index}>{item.apellido}</th>
                                    <th><button onClick={()=>navigate(`/InformacionContacto/${item.id_info}/contacto`)} >Ver informacion</button>
                                    <button onClick={() => elimInfo(item.id_info)}>eliminar</button>
                                    <button onClick={()=>navigate(`/EditarContacto/${item.id_info}`)}>Editar</button>

                                    </th>
                                </tr>
                            )

                        })}

                    </tbody>




                </table>


            </div>

   
    );

}

export default Conectar  